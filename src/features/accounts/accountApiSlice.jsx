import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../../app/api/apiSlice';

const accountsAdapter = createEntityAdapter({});

const initialState = accountsAdapter.getInitialState();

export const accountsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: () => '/users',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError;
            },
            transformResponse: (responseData) => {
                const loadedAccounts = responseData.map((account) => {
                    account.id = account._id;
                    return account;
                });
                return accountsAdapter.setAll(initialState, loadedAccounts);
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Account', id: 'LIST' },
                        ...result.ids.map((id) => ({ type: 'Account', id })),
                    ];
                } else return [{ type: 'Account', id: 'LIST' }];
            },
        }),

        getAccountsById: builder.query({
            query: (userId) => `/users/${userId}`,
            providesTags: (result, error, userId) => [
                { type: 'Account', id: userId },
            ],
        }),

        getCurrentAccount: builder.query({
            query: (username) => ({
                url: `/users/current/${username}`,
                method: 'GET',
                credentials: 'include',
            }),
            transformResponse: (responseData) => {
                if (!responseData) return null;
                return {
                    ...responseData,
                    id: responseData._id, // Ensure ID is properly set
                };
            },
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError;
            },
            skip: (username) => !username,
            providesTags: (result, error, username) => [
                { type: 'Account', id: username },
            ],
        }),
        editCurrentAccount: builder.mutation({
            query: (credentials) => {
                const formData = new FormData();
                if (credentials.fullname)
                    formData.append('fullname', credentials.fullname);
                if (credentials.bio) formData.append('bio', credentials.bio);
                if (credentials.location)
                    formData.append('location', credentials.location);
                if (credentials.website)
                    formData.append('website', credentials.website);
                if (credentials.dateOfBirth)
                    formData.append('dateOfBirth', credentials.dateOfBirth);

                if (credentials.avatar) {
                    if (Array.isArray(credentials.avatar)) {
                        // If avatar is an array, append each file
                        credentials.avatar.forEach((file) => {
                            formData.append('avatar', file);
                        });
                    } else {
                        // If avatar is a single file, append it directly
                        formData.append('avatar', credentials.avatar);
                    }
                }

                if (credentials.header_photo) {
                    if (Array.isArray(credentials.header_photo)) {
                        credentials.header_photo.forEach((file) => {
                            formData.append('header_photo', file);
                        });
                    } else {
                        formData.append(
                            'header_photo',
                            credentials.header_photo,
                        );
                    }
                }

                return {
                    url: `/users/${credentials.userId}`,
                    method: 'PATCH',
                    body: formData,
                };
            },
            transformResponse: (responseData) => {
                return responseData.updatedUser;
            },
            invalidatesTags: (result, error, arg) => [
                { type: 'Account', id: arg.userId },
            ],
        }),
        toggleFollow: builder.mutation({
            query: ({ userId, currentUserId }) => ({
                url: `/users/${userId}/toggle-follow`,
                method: 'POST',
                body: { currentUserId },
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Account', id: arg.currentUserId },
            ],
        }),
    }),
});

export const {
    useGetAccountsQuery,
    useGetAccountsByIdQuery,
    useGetCurrentAccountQuery,
    useEditCurrentAccountMutation,
    useToggleFollowMutation,
} = accountsApiSlice;

// returning the query result obj
export const selectAccountsResult =
    accountsApiSlice.endpoints.getAccounts.select();

// memoized selector
const selectAccountData = createSelector(
    selectAccountsResult,
    (accountResult) => accountResult.data, // normalized obj with ids and entities
);

// getSelectors create these selectors and we rename with aliases using destructions
export const {
    selectAll: selectAllAccounts,
    selectById: selectAccountsById,
    selectIds: selectAccountIds,
} = accountsAdapter.getSelectors(
    (state) => selectAccountData(state) ?? initialState,
);
