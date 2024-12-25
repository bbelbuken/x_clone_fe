import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../features/account/accountSlice';
import modalReducer from '../features/modal/modalSlice';
import postSlice from '../features/posts/postSlice';

export const store = configureStore({
  reducer: {
    posts: postSlice,
    accounts: accountReducer,
    modal: modalReducer,
  },
});
