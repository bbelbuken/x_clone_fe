import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../features/accounts/accountSlice';
import modalReducer from '../features/modals/modalSlice';
import postReducer from '../features/posts/postSlice';
import likeReducer from '../features/likes/likeSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    accounts: accountReducer,
    modals: modalReducer,
    likes: likeReducer,
  },
});
