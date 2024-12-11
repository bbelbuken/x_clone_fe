import Button from 'components/buttons/Button';
import React from 'react';
import useCurrentAccount from 'hooks/useCurrentAccount';

const AccountButton = () => {
  const { avatar, username, fullname } = useCurrentAccount();

  return (
    <div className="relative">
      <div className="mb-3 rounded-full">
        <div className="">
          <Button
            size={'account'}
            className={'bg-transparent hover:bg-[#e7e9ea1a]'}
          >
            <div className="flex h-auto w-full items-center justify-start gap-3">
              <img
                src={avatar}
                alt="Avatar"
                className="h-10 w-10 rounded-full"
              ></img>
              <div className="flex flex-col items-start justify-center py-2">
                <p className="break-words text-[15px] font-bold">{fullname}</p>
                <p className="text-[15px] font-light leading-[1.5em] tracking-[0.045em] text-[#71767b]">
                  <div className="flex items-center justify-center">
                    <span className="mr-[1px] text-[12px]">@</span>
                    {username}
                  </div>
                </p>
              </div>
            </div>
          </Button>
        </div>
      </div>
      <div className="absolute right-1 top-[15px] inline-flex h-[34.75px] w-[34.75px] rounded-full transition-colors">
        <button className="flex h-full w-full items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width={18.75}
            height={18.75}
          >
            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 2 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AccountButton;
