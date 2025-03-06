import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../../features/accounts/accountSlice';
import modalReducer from '../../features/modals/modalSlice';
import postReducer from '../../features/posts/postSlice';
import { apiSlice } from '../api/apiSlice';
import authReducer from '../../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        posts: postReducer,
        accounts: accountReducer,
        modals: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});
