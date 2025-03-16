import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentAccount } from 'features/accounts/accountSlice';
import { useGetAccountsQuery } from 'features/accounts/accountApiSlice';

const OtherAccountLists = ({ currentAccount, otherLoggedInAccounts }) => {
    const dispatch = useDispatch();

    // Fetch all accounts from the backend
    const { data: fetchedAccounts, isLoading, error } = useGetAccountsQuery();

    // Log the fetched data to inspect its structure
    console.log('Fetched Accounts:', fetchedAccounts);

    // Convert entities object into an array of accounts
    const accountsArray = fetchedAccounts
        ? Object.values(fetchedAccounts.entities)
        : [];

    // Merge loggedInAccounts with fetched accounts to get cachedAvatar
    const mergedAccounts = React.useMemo(() => {
        if (!accountsArray || !otherLoggedInAccounts) return [];

        return otherLoggedInAccounts.map((loggedInAccount) => {
            const matchedAccount = accountsArray.find(
                (account) => account.username === loggedInAccount.username,
            );

            return {
                ...loggedInAccount,
                cachedAvatar:
                    matchedAccount?.cachedAvatar ||
                    loggedInAccount.cachedAvatar,
            };
        });
    }, [accountsArray, otherLoggedInAccounts]);

    const handleCurrentAccount = (account) => {
        dispatch(setCurrentAccount(account));
    };

    const getGoogleDriveDirectImageUrl = (url) => {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const fileId = urlParams.get('id');
        return `https://lh3.googleusercontent.com/d/${fileId}`; // Direct image URL
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!currentAccount) {
        return <div>No account found</div>;
    }

    return (
        <div className="relative flex flex-col items-center justify-center py-0.5">
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
                                account.cachedAvatar
                                    ? account.cachedAvatar
                                    : account.avatar
                                      ? getGoogleDriveDirectImageUrl(
                                            account.avatar,
                                        )
                                      : '/public/default_profile_200x200.png'
                            }
                            alt="Avatar"
                            className="h-10 w-10 rounded-full"
                        />
                        <div className="flex flex-col items-start justify-center py-2">
                            <p className="text-[15px] font-bold break-words">
                                {account.fullname}
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
