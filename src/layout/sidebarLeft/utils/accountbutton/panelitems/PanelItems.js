import React from 'react';
import { useCurrentAccount, useAccounts } from 'hooks/useAccounts';
import { Link } from 'react-router-dom';
import CurrentAccountItems from '../buttonitems/ButtonItems';
import OtherAccountLists from './otheraccountlists/OtherAccountLists';

const PanelItems = () => {
  const currentAccount = useCurrentAccount();
  const accounts = useAccounts();

  return (
    <div className="flex flex-1 flex-col justify-center self-stretch overflow-visible py-3 text-sm font-bold">
      {accounts.length > 1 && (
        <div>
          <ol className="px-4 pt-0.5">
            <li className="relative">
              <CurrentAccountItems gap={2} />
              <svg
                viewBox="0 0 24 24"
                className="absolute right-2 top-5"
                width={18.75}
                height={18.75}
                fill="#00ba7c"
              >
                <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"></path>
              </svg>
            </li>
          </ol>
          <div className="relative flex items-center justify-center px-4 py-0.5 hover:bg-[#e7e9ea1a]">
            <OtherAccountLists />
            <div className="font-sm absolute right-[23px] box-content grid h-5 min-w-5 place-content-center rounded-full bg-[#f91880] font-bold">
              <span>1</span>
            </div>
          </div>
          <div className="my-3 h-[1px] bg-[#2f3336]"></div>
        </div>
      )}
      <Link className="w-full px-4 py-3 hover:bg-[#e7e9ea1a]">
        Add an existing account
      </Link>
      {accounts.length > 1 && (
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
