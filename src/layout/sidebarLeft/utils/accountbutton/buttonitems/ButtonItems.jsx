import React from 'react';
import { useCurrentAccount } from 'hooks/useAccounts';

const ButtonItems = ({ gap }) => {
  const currentAccount = useCurrentAccount();
  return (
    <div className={`items-starts flex h-auto w-full justify-start gap-${gap}`}>
      <img
        src={currentAccount.avatar}
        alt="Avatar"
        className="mt-[1px] h-10 w-10 rounded-full"
      ></img>
      <div className="ml-1 flex flex-col items-start justify-center">
        <p className="break-words text-[15px] font-bold">
          {currentAccount.fullname}
        </p>
        <div className="text-[15px] font-light leading-[1.5em] tracking-[0.045em] text-[#71767b]">
          <div className="flex items-center justify-center">
            <p className="text-[12px]">@</p>
            {currentAccount.username}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonItems;
