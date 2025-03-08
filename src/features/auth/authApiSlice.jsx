import { apiSlice } from '../../app/api/apiSlice';
import { setCredentials, logOut } from './authSlice';

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
                    const { accessToken } = data; // Ensure this matches the response structure
                    dispatch(setCredentials({ accessToken }));
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
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(logOut());
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
        }),
    }),
});

export const { useLoginMutation, useSignUpMutation, useSendLogOutMutation } =
    authApiSlice;
