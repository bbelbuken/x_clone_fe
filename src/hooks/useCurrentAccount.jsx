import { selectCurrentToken } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { useGetCurrentAccountQuery } from 'features/accounts/accountApiSlice';
import { useState, useEffect } from 'react';

const useCurrentAccount = () => {
    const [currentUsername, setCurrentUsername] = useState('');
    const token = useSelector(selectCurrentToken);

    const {
        data: account,
        isLoading,
        error,
        refetch,
    } = useGetCurrentAccountQuery(currentUsername || null); // Pass null if currentUsername is not set

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            const { username } = decoded.UserInfo;

            if (username !== currentUsername) {
                setCurrentUsername(username);
            }
        } else {
            setCurrentUsername('');
        }
    }, [token, currentUsername]);

    return { account, isLoading, error, refetch }; // Return refetch method
};

export default useCurrentAccount;
