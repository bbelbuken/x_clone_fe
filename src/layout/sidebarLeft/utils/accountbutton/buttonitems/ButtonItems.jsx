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

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading account data</p>;
    }
    console.log(getGoogleDriveDirectImageUrl(account.avatar)); // Check if the URL is correct

    return (
        <div
            className={`items-starts flex h-auto w-full justify-start gap-${gap}`}
        >
            <img
                src={getGoogleDriveDirectImageUrl(
                    'https://drive.google.com/thumbnail?id=101pdSR_fZE2dZZOP79_YOEX2uytV-2QQ&sz=w1050',
                )}
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
