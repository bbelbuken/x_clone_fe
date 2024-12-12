import React from 'react';
import { useCurrentAccount, useAccounts } from 'hooks/useCurrentAccount';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Link } from 'react-router-dom';
import ThreeDotSVG from 'components/svgs/ThreeDotSVG';

const AccountButton = () => {
  const currentAccount = useCurrentAccount();
  const accounts = useAccounts();
  const allAccounts = JSON.stringify(accounts.length);

  return (
    <Popover className={'relative'}>
      <PopoverButton className={'relative w-full'}>
        <div
          className={
            'mb-3 flex min-h-[65px] w-full min-w-[52px] items-center justify-center overflow-hidden break-words rounded-full bg-transparent px-3 text-[17px] font-bold leading-5 transition-colors hover:bg-[#e7e9ea1a] active:bg-white'
          }
        >
          <div className="flex h-auto w-full items-center justify-start gap-3">
            <img
              src={currentAccount.avatar}
              alt="Avatar"
              className="h-10 w-10 rounded-full"
            ></img>
            <div className="flex flex-col items-start justify-center py-2">
              <p className="break-words text-[15px] font-bold">
                {currentAccount.fullname}
              </p>
              <div className="text-[15px] font-light leading-[1.5em] tracking-[0.045em] text-[#71767b]">
                <div className="flex items-center justify-center">
                  <p className="mr-[1px] text-[12px]">@</p>
                  {currentAccount.username}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -right-1 top-[15px] inline-flex h-[34.75px] w-[34.75px] rounded-full transition-colors">
          <div className="flex items-center justify-center">
            <ThreeDotSVG />
          </div>
        </div>
      </PopoverButton>
      <PopoverPanel
        className={
          'absolute bottom-[88px] left-0 box-border flex h-auto w-[300px] flex-col items-center justify-center rounded-2xl bg-black shadow-morebox transition-colors'
        }
      >
        <div className="flex flex-1 flex-col justify-center self-stretch overflow-visible py-3 text-sm font-bold">
          {allAccounts > 1 && <div className="my-3 h-[1px] bg-[#2f3336]"></div>}
          <Link className="w-full px-4 py-3 hover:bg-[#e7e9ea1a]">
            Add an existing account
          </Link>
          {allAccounts > 1 && (
            <Link className="w-full px-4 py-3 hover:bg-[#e7e9ea1a]">
              Manage accounts
            </Link>
          )}

          <Link className="w-full px-4 py-3 hover:bg-[#e7e9ea1a]">{`Log out @${currentAccount.username}`}</Link>

          <svg
            viewBox="0 0 24 24"
            width={24}
            height={15}
            className="absolute -bottom-[10px] left-28 rotate-180 drop-shadow-morebox"
          >
            <path d="M22 17H2L12 6l10 11z" fill="black"></path>
          </svg>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

export default AccountButton;
