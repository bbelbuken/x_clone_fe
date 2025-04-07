import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://x-clone-be-uvoa.onrender.com' }),
    credentials: 'include',
    tagTypes: ['Post', 'Account', 'Auth'],
    endpoints: (builder) => ({}),
});
