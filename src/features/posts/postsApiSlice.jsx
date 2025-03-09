import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../app/api/apiSlice';

const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
});

const initialState = postsAdapter.getInitialState();

export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                url: '/posts',

                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                },
            }),
            transformResponse: (responseData) => {
                const loadedPosts = responseData.map((post) => {
                    post.id = post._id;
                    return post;
                });
                return postsAdapter.setAll(initialState, loadedPosts);
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Post', id: 'LIST' },
                        ...result.ids.map((id) => ({ type: 'Post', id })),
                    ];
                } else return [{ type: 'Post', id: 'LIST' }];
            },
        }),
        addPost: builder.mutation({
            query: (credentials) => {
                const formData = new FormData();

                // Append the content and userId fields
                formData.append('content', credentials.content);
                formData.append('userId', credentials.userId);

                console.log('content:', credentials.content);
                console.log('userId', credentials.userId);

                // Append the media file(s) if they exist
                if (credentials.media) {
                    if (Array.isArray(credentials.media)) {
                        // If media is an array, append each file
                        credentials.media.forEach((file) => {
                            formData.append('mediaFiles', file);
                        });
                    } else {
                        // If media is a single file, append it directly
                        formData.append('mediaFiles', credentials.media);
                    }
                }
                console.log('media', credentials.media);

                return {
                    url: '/posts',
                    method: 'POST',
                    body: formData,
                    // Do NOT specify Content-Type here, browser will set it correctly
                };
            },
            transformResponse: (responseData) => {
                return responseData.post;
            },
            invalidatesTags: (result, error, arg) => [
                { type: 'Post', id: 'LIST' },
            ],
        }),
    }),
});
export const { useGetPostsQuery, useAddPostMutation } = postsApiSlice;

export const selectPostsResult = postsApiSlice.endpoints.getPosts.select();

// creating memoized selector
const selectPostsData = createSelector(
    selectPostsResult,
    (postsResult) => postsResult.data, // normalized state obj with ids & entities
);

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds,
} = postsAdapter.getSelectors(
    (state) => selectPostsData(state) ?? initialState,
);
