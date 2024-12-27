import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../features/accounts/accountSlice';
import modalReducer from '../features/modals/modalSlice';
import postSlice from '../features/posts/postSlice';

export const store = configureStore({
  reducer: {
    posts: postSlice,
    accounts: accountReducer,
    modals: modalReducer,
  },
});
