import HeaderPhoto from './headerphoto/HeaderPhoto';
import AccountInfo from './accountinfo/AccountInfo';
const ProfileBanner = ({ account }) => {
  return (
    <div>
      <HeaderPhoto account={account} />
      <AccountInfo account={account} />
    </div>
  );
};

export default ProfileBanner;
