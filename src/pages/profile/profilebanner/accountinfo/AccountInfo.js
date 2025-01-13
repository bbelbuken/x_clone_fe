import AccountAvatar from './accountavatar/AccountAvatar';
import ActionBars from './actionbars/ActionBars';
const AccountInfo = ({ account }) => {
  return (
    <div className="mb-4 px-4 pt-3">
      <div className="flex flex-wrap items-start justify-between">
        <AccountAvatar account={account} />
        <ActionBars account={account} />
      </div>
    </div>
  );
};

export default AccountInfo;
