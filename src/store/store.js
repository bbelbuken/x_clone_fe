import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../features/account/accountSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    accounts: accountReducer,
    modal: modalReducer,
  },
});
