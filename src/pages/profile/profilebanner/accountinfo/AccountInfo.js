import React from 'react';

const AccountInfo = ({ account }) => {
  return (
    <div className="mb-4 px-4 pt-3">
      <div className="flex flex-wrap items-start justify-between">
        <div className="z-20 -mt-[15%] mb-3 block h-auto w-[23%] min-w-12 rounded-full">
          <img
            src={account.avatar}
            alt="avatar"
            className="box-content h-full w-full rounded-full border-4 border-black"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AccountInfo;
