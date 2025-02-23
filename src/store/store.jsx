import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../features/accounts/accountSlice';
import modalReducer from '../features/modals/modalSlice';
import postReducer from '../features/posts/postSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    accounts: accountReducer,
    modals: modalReducer,
  },
});
