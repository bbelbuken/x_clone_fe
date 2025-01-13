import HeaderPhoto from './headerphoto/HeaderPhoto';

const ProfileBanner = ({ account }) => {
  return (
    <div>
      <HeaderPhoto account={account} />
    </div>
  );
};

export default ProfileBanner;
