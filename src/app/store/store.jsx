import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../../features/accounts/accountSlice';
import modalReducer from '../../features/modals/modalSlice';
import postReducer from '../../features/posts/postSlice';
import { apiSlice } from 'app/api/apiSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        posts: postReducer,
        accounts: accountReducer,
        modals: modalReducer,
    },
});
