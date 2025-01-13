import HeaderPhoto from './headerphoto/HeaderPhoto';
import AccountAvatar from './accountavatar/AccountAvatar';
import ActionBars from './actionbars/ActionBars';
import AccountInfo from './accountinfo/AccountInfo';
const ProfileBanner = ({ account }) => {
  return (
    <div>
      <HeaderPhoto account={account} />

      <div className="mb-4 px-4 pt-3">
        <div className="flex flex-wrap items-start justify-between">
          <AccountAvatar account={account} />
          <ActionBars account={account} />
        </div>

        <AccountInfo account={account} />
      </div>
    </div>
  );
};

export default ProfileBanner;
