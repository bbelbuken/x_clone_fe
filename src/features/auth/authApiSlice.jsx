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

                    // Only dispatch Redux actions if step === 2 (password verification)
                    if (arg.step === 2) {
                        const { accessToken, foundUser } = data;
                        dispatch(setCredentials({ accessToken }));
                        dispatch(
                            addLoggedInAccount({ ...foundUser, accessToken }),
                        ); // Include accessToken
                        dispatch(
                            setCurrentAccount({ ...foundUser, accessToken }),
                        ); // Include accessTo
                    }
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

                    const state = getState();
                    const currentAccountId = state.accounts.currentAccount?._id;

                    // Remove the specific account from loggedInAccounts
                    if (currentAccountId) {
                        dispatch(removeLoggedInAccount(currentAccountId));
                    }

                    // Set the currentAccount to the next available account or null
                    const loggedInAccounts = state.accounts.loggedInAccounts;
                    if (loggedInAccounts.length > 0) {
                        const nextAccount = loggedInAccounts[0];
                        dispatch(setCurrentAccount(nextAccount));

                        // Update credentials for the next account
                        dispatch(
                            setCredentials({
                                accessToken: nextAccount.accessToken, // Ensure this field exists
                            }),
                        );
                    } else {
                        dispatch(setCurrentAccount(null));

                        // Clear credentials if no accounts are left
                        dispatch(setCredentials({ accessToken: null }));
                    }

                    // Reset the API state
                    dispatch(apiSlice.util.resetApiState());
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
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const { accessToken, foundUser } = data;
                    dispatch(setCredentials({ accessToken }));
                    dispatch(addLoggedInAccount({ ...foundUser, accessToken }));
                    dispatch(setCurrentAccount({ ...foundUser, accessToken }));
                } catch (error) {
                    console.error(error);
                }
            },
            transformErrorResponse: (response) => {
                return response.data?.message || 'An error occurred';
            },
        }),
        switchAccount: builder.mutation({
            query: ({ username, userId }) => ({
                url: '/i/flow/switch-account',
                method: 'PATCH',
                body: { username, userId },
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useSignUpMutation,
    useSendLogOutMutation,
    useSwitchAccountMutation,
} = authApiSlice;
