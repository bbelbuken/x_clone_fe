import { selectCurrentToken } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { useGetCurrentAccountQuery } from 'features/accounts/accountApiSlice';
import { useState, useEffect } from 'react';

const useCurrentAccount = () => {
    const [currentUsername, setCurrentUsername] = useState('');
    const token = useSelector(selectCurrentToken);
    const persistedAccount = useSelector(
        (state) => state.accounts.currentAccount,
    );

    // First, try to get username from token
    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode(token);
                const { username } = decoded.UserInfo;

                if (username && username !== currentUsername) {
                    setCurrentUsername(username);
                }
            } catch (err) {
                console.error('Error decoding token:', err);
                setCurrentUsername('');
            }
        } else {
            setCurrentUsername('');
        }
    }, [token, currentUsername]);

    // Then fetch the account data
    const {
        data: account,
        isLoading: isAccountLoading,
        error: accountError,
        refetch,
    } = useGetCurrentAccountQuery(currentUsername, {
        skip: !currentUsername,
    });

    // Use persisted account data while loading
    if (isAccountLoading && persistedAccount) {
        return {
            account: persistedAccount,
            isLoading: false,
            error: null,
            refetch,
        };
    }

    // Handle error states
    if (!token) {
        return { account: null, isLoading: false, error: null, refetch };
    }

    // Still loading
    if (!currentUsername || isAccountLoading) {
        return { account: null, isLoading: true, error: null, refetch };
    }

    // Error fetching account
    if (accountError) {
        return {
            account: persistedAccount || null,
            isLoading: false,
            error: accountError,
            refetch,
        };
    }

    // Success state - use fresh data if available, otherwise use persisted data
    return {
        account: account || persistedAccount,
        isLoading: false,
        error: null,
        refetch,
    };
};

export default useCurrentAccount;
