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
            query: (username) => `/users/current/${username}`,
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError;
            },
            providesTags: (result, error, username) => [
                { type: 'Account', id: username },
            ],
        }),
    }),
});

export const {
    useGetAccountsQuery,
    useGetAccountsByIdQuery,
    useGetCurrentAccountQuery,
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
