import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentAccount } from 'features/accounts/accountSlice';
import { useGetAccountsQuery } from 'features/accounts/accountApiSlice';
import { useSwitchAccountMutation } from 'features/auth/authApiSlice';
import { setCredentials } from 'features/auth/authSlice';
import LoadingSpinner from 'components/loading/LoadingSpinner';

const OtherAccountLists = ({ currentAccount, otherLoggedInAccounts }) => {
    const dispatch = useDispatch();
    const [switchAccount] = useSwitchAccountMutation();

    const { data: fetchedAccounts, isLoading, error } = useGetAccountsQuery();
    // entities object into an array of accounts
    const accountsArray = fetchedAccounts
        ? Object.values(fetchedAccounts.entities)
        : [];

    const mergedAccounts = React.useMemo(() => {
        if (!accountsArray || !otherLoggedInAccounts) return [];

        return otherLoggedInAccounts.map((loggedInAccount) => {
            const matchedAccount = accountsArray.find(
                (account) => account.username === loggedInAccount.username,
            );

            return {
                ...loggedInAccount,
                avatar: matchedAccount?.avatar || loggedInAccount.avatar,
            };
        });
    }, [accountsArray, otherLoggedInAccounts]);

    const handleCurrentAccount = async (account) => {
        try {
            const payload = {
                username: account?.username,
                userId: currentAccount?._id,
            };
            const response = await switchAccount(payload).unwrap();

            dispatch(setCurrentAccount(response.newAccount));

            dispatch(setCredentials({ accessToken: response.accessToken }));
        } catch (error) {
            console.error('Switch Account Error:', error);
        }
    };

    const handleAccountFullname = (account) => {
        const name =
            account?.fullname?.length > 20
                ? account?.fullname?.slice(0, 24) + '..'
                : account?.fullname;

        return name;
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!currentAccount) {
        return <div>No account found</div>;
    }
    return (
        <div className="relative flex flex-col items-center justify-center py-0.5">
            {isLoading && <LoadingSpinner />}
            {mergedAccounts.map((account, key) => (
                <button
                    className="w-full cursor-pointer px-4 hover:bg-[#c4c4c41a]"
                    type="button"
                    onClick={() => handleCurrentAccount(account)}
                    key={key}
                >
                    <div
                        className="mt-[6px] flex h-auto w-full items-center justify-start gap-2"
                        key={account.id}
                    >
                        <img
                            src={
                                account?.avatar
                                    ? account.avatar
                                    : '/default_profile_200x200.png'
                            }
                            alt="Avatar"
                            className="h-10 w-10 rounded-full"
                        />
                        <div className="flex flex-col items-start justify-center py-2">
                            <p className="text-[15px] font-bold break-words">
                                {handleAccountFullname(account)}
                            </p>
                            <div className="text-[15px] leading-[1.5em] font-light tracking-[0.045em] text-[#71767b]">
                                <div className="flex items-center justify-center">
                                    <p className="text-[12px]">@</p>
                                    {account.username}
                                </div>
                            </div>
                            <div className="font-sm absolute right-[22px] box-content grid h-5 min-w-5 place-content-center rounded-full bg-[#1d9bf0] font-bold">
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default OtherAccountLists;
