import { apiSlice } from '../../app/api/apiSlice';
import { setCredentials, logOut } from './authSlice';
import {
    addLoggedInAccount,
    setCurrentAccount,
    removeLoggedInAccount,
} from 'features/accounts/accountSlice';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/i/flow/login',
                method: 'POST',
                body: { ...credentials },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const { accessToken, foundUser } = data;

                    dispatch(setCredentials({ accessToken }));
                    dispatch(addLoggedInAccount(foundUser));
                    dispatch(setCurrentAccount(foundUser));
                } catch (error) {
                    console.error('Login Failed', error);
                }
            },
            transformErrorResponse: (response) => {
                return response.data?.message || 'An error occurred';
            },
        }),
        sendLogOut: builder.mutation({
            query: () => ({
                url: '/i/flow/logout',
                method: 'post',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled, getState }) {
                try {
                    await queryFulfilled;
                    dispatch(logOut());
                    dispatch(apiSlice.util.resetApiState());

                    const currentAccountId =
                        getState().accounts.currentAccount?._id;

                    // Remove the specific account from loggedInAccounts
                    if (currentAccountId) {
                        dispatch(removeLoggedInAccount(currentAccountId));
                    }
                } catch (error) {
                    console.error('Logout Failed', error);
                }
            },
        }),
        signup: builder.mutation({
            query: (credentials) => ({
                url: '/i/flow/signup',
                method: 'POST',
                body: { ...credentials },
            }),
        }),
    }),
});

export const { useLoginMutation, useSignUpMutation, useSendLogOutMutation } =
    authApiSlice;
