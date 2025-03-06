import { apiSlice } from '../../app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/i/flow/login',
                method: 'POST',
                body: { ...credentials },
            }),
            transformErrorResponse: (response) => {
                return response.data?.message || 'An error occurred';
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

export const { useLoginMutation, useSignUpMutation } = authApiSlice;
