import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentAccount: {
    id: 1,
    username: 'bbelbuken',
    fullname: 'Batuhan',
    avatar:
      'https://pbs.twimg.com/profile_images/1863667711319924737/RrRyq3vD_400x400.jpg',
  },
  accounts: [],
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload,
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        state.currentAccount = false;
      }
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const selectCurrentAccount = (state) => state.accounts.currentAccount;

export const { addAccount, removeAccount, setCurrentAccount } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
