import React from 'react';
import { useCurrentAccount, useAccounts } from 'hooks/useCurrentAccount';
import { Link } from 'react-router-dom';

const PanelItems = () => {
  const currentAccount = useCurrentAccount();
  const accounts = useAccounts();
  const allAccounts = JSON.stringify(accounts.length);

  return (
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
  );
};

export default PanelItems;
