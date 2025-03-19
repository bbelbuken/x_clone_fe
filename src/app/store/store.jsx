import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import accountReducer from '../../features/accounts/accountSlice';
import modalReducer from '../../features/modals/modalSlice';
import authReducer from '../../features/auth/authSlice';
import { apiSlice } from '../api/apiSlice';

// Persist configuration for each reducer
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'], // Only persist the token
};

const accountPersistConfig = {
    key: 'accounts',
    storage,
    whitelist: ['currentAccount', 'loggedInAccounts'], // Only persist account-related data
};

const modalPersistConfig = {
    key: 'modals',
    storage,
};

// Wrap each reducer with its own persist configuration
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedAccountReducer = persistReducer(
    accountPersistConfig,
    accountReducer,
);
const persistedModalReducer = persistReducer(modalPersistConfig, modalReducer);

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: persistedAuthReducer,
        accounts: persistedAccountReducer,
        modals: persistedModalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }).concat(apiSlice.middleware),
    devTools: true,
});

// Create a persistor
export const persistor = persistStore(store);
