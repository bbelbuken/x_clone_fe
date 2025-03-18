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
        getPostById: builder.query({
            query: (postId) => ({
                url: `/posts/${postId}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError;
                },
            }),
            transformResponse: (responseData) => {
                responseData.id = responseData._id;
                return responseData;
            },
            providesTags: (result, error, arg) => [{ type: 'Post', id: arg }],
        }),
        addPost: builder.mutation({
            query: (credentials) => {
                const formData = new FormData();
                formData.append('content', credentials.content);
                formData.append('userId', credentials.userId);

                if (credentials.mediaFiles) {
                    if (Array.isArray(credentials.mediaFiles)) {
                        // If mediaFiles is an array, append each file
                        credentials.mediaFiles.forEach((file) => {
                            formData.append('mediaFiles', file);
                        });
                    } else {
                        // If mediaFiles is a single file, append it directly
                        formData.append('mediaFiles', credentials.mediaFiles);
                    }
                }

                return {
                    url: '/posts',
                    method: 'POST',
                    body: formData,
                };
            },
            transformResponse: (responseData) => {
                return responseData.post;
            },
            invalidatesTags: (result, error, arg) => [
                { type: 'Post', id: arg.id },
            ],
        }),
        deletePost: builder.mutation({
            query: ({ postId }) => ({
                url: `/posts/${postId}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Post', id: arg.id },
            ],
        }),
        likePost: builder.mutation({
            query: ({ postId, userId }) => ({
                url: `/posts/${postId}/like`,
                method: 'PATCH',
                body: { userId },
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Post', id: arg.postId },
            ],
        }),
        replyToPost: builder.mutation({
            query: (credentials) => {
                const formData = new FormData();
                formData.append('userId', credentials.userId);
                formData.append('content', credentials.content);

                if (credentials.mediaFiles) {
                    if (Array.isArray(credentials.mediaFiles)) {
                        credentials.mediaFiles.forEach((file) => {
                            formData.append('mediaFiles', file);
                        });
                    } else {
                        formData.append('mediaFiles', credentials.mediaFiles);
                    }
                }

                return {
                    url: `/posts/${credentials.postId}/reply`,
                    method: 'POST',
                    body: formData,
                };
            },
            invalidatesTags: (result, error, arg) => [
                { type: 'Post', id: arg.postId },
            ],
        }),
        viewCount: builder.mutation({
            query: ({ postId, userId }) => ({
                url: `/posts/${postId}/view`,
                method: 'PATCH',
                body: { userId },
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Post', id: arg.postId },
            ],
        }),
        repostPost: builder.mutation({
            query: ({ postId, userId }) => ({
                url: `/posts/${postId}/repost`,
                method: 'POST',
                body: { userId },
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Post', id: arg.postId },
            ],
        }),
    }),
});
export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useAddPostMutation,
    useDeletePostMutation,
    useLikePostMutation,
    useReplyToPostMutation,
    useViewCountMutation,
    useRepostPostMutation,
} = postsApiSlice;

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
