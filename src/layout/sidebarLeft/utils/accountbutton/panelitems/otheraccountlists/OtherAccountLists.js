import React from 'react';
import { useCurrentAccount, useAccounts } from 'hooks/useAccounts';
import { useDispatch } from 'react-redux';
import { setCurrentAccount } from 'store/authentication/authenticationSlice';

const OtherAccountLists = () => {
  const dispatch = useDispatch();
  const currentAccount = useCurrentAccount();
  const accounts = useAccounts();
  const otherAccounts = accounts.filter(
    (account) => account.id !== currentAccount.id,
  );

  const handleCurrentAccount = (account) => {
    dispatch(setCurrentAccount(account));
  };
  return (
    <div className="relative flex flex-col items-center justify-center py-0.5">
      {otherAccounts.map((account, key) => (
        <button
          className="w-full px-4 hover:bg-[#e7e9ea1a]"
          type="button"
          onClick={() => handleCurrentAccount(account)}
          key={key}
        >
          <div
            className="mt-[6px] flex h-auto w-full items-center justify-start gap-2"
            key={account.id}
          >
            <img
              src={account.avatar}
              alt="Avatar"
              className="h-10 w-10 rounded-full"
            ></img>
            <div className="flex flex-col items-start justify-center py-2">
              <p className="break-words text-[15px] font-bold">
                {account.fullname}
              </p>
              <div className="text-[15px] font-light leading-[1.5em] tracking-[0.045em] text-[#71767b]">
                <div className="flex items-center justify-center">
                  <p className="mr-[1px] text-[12px]">@</p>
                  {account.username}
                </div>
              </div>
              <div className="font-sm absolute right-[22px] box-content grid h-5 min-w-5 place-content-center rounded-full bg-[#f91880] font-bold">
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
