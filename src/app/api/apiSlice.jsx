import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
    credentials: 'include',
    tagTypes: ['Post', 'Account', 'Auth'],
    endpoints: (builder) => ({}),
});
