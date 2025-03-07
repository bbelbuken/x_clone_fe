import React from 'react';
import useCurrentAccount from 'hooks/useCurrentAccount';
import { useGetCurrentAccountQuery } from 'features/accounts/accountApiSlice';

const ButtonItems = ({ gap }) => {
    const currentAccount = useCurrentAccount();
    const {
        data: account,
        isLoading,
        error,
    } = useGetCurrentAccountQuery(currentAccount);

    const getGoogleDriveDirectImageUrl = (url) => {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const fileId = urlParams.get('id');
        return `https://lh3.googleusercontent.com/d/${fileId}`; // Direct image URL
    };

    const avatar = account.cachedAvatar
        ? `${account.cachedAvatar}`
        : account.avatar
          ? getGoogleDriveDirectImageUrl(account.avatar)
          : '/public/default_profile_200x200.png';

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading account data</p>;
    }

    return (
        <div
            className={`items-starts flex h-auto w-full justify-start gap-${gap}`}
        >
            <img
                src={avatar}
                alt="Avatar"
                className="mt-[1px] h-10 w-10 rounded-full"
            />
            <div className="ml-1 flex flex-col items-start justify-center">
                <p className="text-[15px] font-bold break-words">
                    {account.fullname}
                </p>
                <div className="text-[15px] leading-[1.5em] font-light tracking-[0.045em] text-[#71767b]">
                    <div className="flex items-center justify-center">
                        <p className="text-[12px]">@</p>
                        {account.username}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonItems;
