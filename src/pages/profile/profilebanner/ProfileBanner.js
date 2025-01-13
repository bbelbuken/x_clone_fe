import HeaderPhoto from './headerphoto/HeaderPhoto';
import AccountAvatar from './accountavatar/AccountAvatar';
import ActionBars from './actionbars/ActionBars';
import AccountName from './accountname/AccountName';
import AccountBio from './accountbio/AccountBio';

const ProfileBanner = ({ account }) => {
  return (
    <div>
      <HeaderPhoto account={account} />

      <div className="mb-4 px-4 pt-3">
        <div className="flex flex-wrap items-start justify-between">
          <AccountAvatar account={account} />
          <ActionBars account={account} />
        </div>

        <AccountName account={account} />
        <AccountBio account={account} />
      </div>
    </div>
  );
};
export default ProfileBanner;
