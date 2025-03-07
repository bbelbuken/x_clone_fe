import React from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import ThreeDotSVG from 'components/icons/ThreeDotSVG';
import PanelItems from './panelitems/PanelItems';
import ButtonItems from './buttonitems/ButtonItems';
import useCurrentAccount from 'hooks/useCurrentAccount';

const AccountButton = () => {
    const currentAccountData = useCurrentAccount();
    const { account: currentAccount, error, isLoading } = currentAccountData;

    if (isLoading) {
        return <div>Loading...</div>; // Show a loading spinner or placeholder
    }

    if (error) {
        return <div>Error: {error.message || 'Failed to fetch account'}</div>; // Show an error message
    }

    if (!currentAccount) {
        return <div>No account data found.</div>; // Handle case where account is undefined
    }

    return (
        <Popover className={'relative z-20'}>
            <PopoverButton
                className={
                    'relative mb-3 w-full cursor-pointer rounded-full hover:bg-[#e7e9ea1a]'
                }
            >
                <div
                    className={
                        'flex min-h-[65px] w-full min-w-[52px] items-center justify-center overflow-hidden bg-transparent px-3 text-[17px] leading-5 font-bold break-words transition-colors outline-none active:bg-white'
                    }
                >
                    <ButtonItems gap={2} currentAccount={currentAccount} />
                </div>

                <div className="absolute top-[15px] -right-1 inline-flex h-[34.75px] w-[34.75px] rounded-full transition-colors">
                    <div className="flex items-center justify-center">
                        <ThreeDotSVG />
                    </div>
                    <div className="absolute top-[5px] right-[13px] h-[7px] w-[7px] rounded-full border-0 bg-[#1d9bf0]"></div>
                </div>
            </PopoverButton>
            <PopoverPanel
                className={
                    'box-shadow-morebox absolute bottom-[88px] left-0 box-border flex h-auto w-[300px] flex-col items-center justify-center rounded-2xl bg-black transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0'
                }
                transition
            >
                <PanelItems currentAccount={currentAccount} />
            </PopoverPanel>
        </Popover>
    );
};

export default AccountButton;
