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
      username: 'NathieVR',
      fullname: 'Nathie',
      avatar:
        'https://pbs.twimg.com/profile_images/1567608510497652736/TvoiS4g6_200x200.jpg',
    },
    {
      id: 4,
      username: 'LiveDigitalArt',
      fullname: 'Digital Art',
      avatar:
        'https://pbs.twimg.com/profile_images/857849907624820740/8ewzDDjp_200x200.jpg',
      verified: true,
    },
    {
      id: 5,
      username: 'nodejs',
      fullname: 'Node.js',
      avatar:
        'https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_normal.jpg',
      verified: true,
    },
    {
      id: 6,
      username: 'drapplebrain',
      fullname: 'Dr.Applebrain',
      avatar:
        'https://pbs.twimg.com/profile_images/1658233760838569985/OsRPTc1Q_200x200.png ',
      verified: false,
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
