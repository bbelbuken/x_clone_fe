import React from 'react';
import { useCurrentAccount, useAccounts } from 'hooks/useAccounts';

const OtherAccountLists = () => {
  const currentAccount = useCurrentAccount();
  const accounts = useAccounts();
  const otherAccounts = accounts.filter(
    (account) => account.id !== currentAccount.id,
  );
  console.log(otherAccounts);

  return (
    <button className="w-full" type="button">
      {otherAccounts.map((account, key) => (
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
          </div>
        </div>
      ))}
    </button>
  );
};

export default OtherAccountLists;
