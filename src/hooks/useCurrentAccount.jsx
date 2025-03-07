import { selectCurrentToken } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

const useCurrentAccount = () => {
    const token = useSelector(selectCurrentToken);

    if (token) {
        const decoded = jwtDecode(token);
        const { username } = decoded.UserInfo;

        return username;
    }

    return { username: '' };
};

export default useCurrentAccount;
