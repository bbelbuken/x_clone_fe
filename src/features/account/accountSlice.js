import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentAccount: {
    id: 1,
    username: 'bbelbuken',
    fullname: 'Batuhan',
    avatar:
      'https://pbs.twimg.com/profile_images/1863667711319924737/RrRyq3vD_400x400.jpg',
  },
  accounts: [
    {
      id: 1,
      username: 'bbelbuken',
      fullname: 'Batuhan',
      avatar:
        'https://pbs.twimg.com/profile_images/1863667711319924737/RrRyq3vD_400x400.jpg',
    },
    {
      id: 2,
      username: 'shadowpriest_99',
      fullname: 'ShAd0W_PriEsT',
      avatar:
        'https://imgcdn.stablediffusionweb.com/2024/2/26/8699803e-dc60-48e0-a499-e60bb25764dc.jpg',
    },
    {
      id: 3,
      username: 'pitbull',
      fullname: 'Mr.Worldwide',
      avatar:
        'https://s.yimg.com/os/en-SG/homerun/the_hive_asia_947/f2a87fc834c419f4e76b7a052d54ec73',
    },
  ],
};

const accountSlice = createSlice({
  name: 'account',
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

export const { addAccount, removeAccount, setCurrentAccount } =
  accountSlice.actions;

export default accountSlice.reducer;
