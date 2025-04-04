import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
    credentials: 'include',
    tagTypes: ['Post', 'Account', 'Auth'],
    endpoints: (builder) => ({}),
});
