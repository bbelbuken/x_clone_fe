import { useSelector } from 'react-redux';

export const useLoggedInAccounts = () => {
    const loggedInAccounts = useSelector(
        (state) => state.accounts.loggedInAccounts,
    );
    return loggedInAccounts;
};
