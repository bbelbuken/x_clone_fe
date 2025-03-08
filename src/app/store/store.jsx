import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import accountReducer from '../../features/accounts/accountSlice';
import modalReducer from '../../features/modals/modalSlice';
import postReducer from '../../features/posts/postSlice';
import authReducer from '../../features/auth/authSlice';
import { apiSlice } from '../api/apiSlice';

// Persist configuration
const persistConfig = {
    key: 'root', // Key for the persisted state
    storage, // Storage engine (localStorage by default)
};

// Wrap the auth reducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: persistedAuthReducer,
        posts: postReducer,
        accounts: accountReducer,
        modals: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'], // Ignore redux-persist actions
            },
        }).concat(apiSlice.middleware),
    devTools: true,
});

// Create a persistor
export const persistor = persistStore(store);
