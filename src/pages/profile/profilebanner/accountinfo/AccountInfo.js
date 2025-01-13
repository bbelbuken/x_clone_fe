import AccountAvatar from './accountavatar/AccountAvatar';

const AccountInfo = ({ account }) => {
  return (
    <div className="mb-4 px-4 pt-3">
      <div className="flex flex-wrap items-start justify-between">
        <AccountAvatar account={account} />
        <div></div>
      </div>
    </div>
  );
};

export default AccountInfo;
