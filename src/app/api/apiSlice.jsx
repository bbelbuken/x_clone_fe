import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
    tagTypes: ['Post', 'Account'],
    endpoints: (builder) => ({}),
});
