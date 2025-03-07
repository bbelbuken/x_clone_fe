import { selectCurrentToken } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { useMemo } from 'react';
import { useGetCurrentAccountQuery } from 'features/accounts/accountApiSlice';

const useCurrentAccount = () => {
    const token = useSelector(selectCurrentToken);
    console.log('Token:', token); // Log the token

    const decoded = useMemo(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            console.log('Decoded Token:', decodedToken); // Log the decoded token
            return decodedToken;
        }
        return null;
    }, [token]);

    const username = decoded?.UserInfo?.username || '';
    console.log('Username:', username); // Log the username

    const {
        data: account,
        isLoading,
        error,
    } = useGetCurrentAccountQuery(username, { skip: !username });

    return { account, isLoading, error };
};

export default useCurrentAccount;
