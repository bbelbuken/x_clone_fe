import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentAccount: null,
    loggedInAccounts: [],
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        addLoggedInAccount: (state, action) => {
            if (!action.payload) {
                console.error('Payload is undefined in addLoggedInAccount');
                return;
            }

            const accountExists = state.loggedInAccounts.some(
                (account) => account._id === action.payload._id,
            );

            if (!accountExists) {
                state.loggedInAccounts.push(action.payload);
            }
        },
        setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload;
        },
        removeLoggedInAccount: (state, action) => {
            const accountId = action.payload; // Get the account ID from the payload
            state.loggedInAccounts = state.loggedInAccounts.filter(
                (account) => account._id !== accountId,
            );

            // If the removed account is the current account, reset the current account
            if (state.currentAccount?._id === accountId) {
                state.currentAccount = null;
            }
        },
    },
});

export const { addLoggedInAccount, setCurrentAccount, removeLoggedInAccount } =
    accountSlice.actions;

export default accountSlice.reducer;
