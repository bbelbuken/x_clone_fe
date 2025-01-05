import { useAccounts } from 'hooks/useAccounts';
import { useParams } from 'react-router-dom';
import usePostCountByUser from 'hooks/usePostCountByUser';
import GoBack from './goback/GoBack';
import ProfileBanner from './profilebanner/ProfileBanner';

const Profile = () => {
  const { username } = useParams();
  const postCount = usePostCountByUser();
  const accounts = useAccounts();
  const account = accounts.find((account) => account.username === username);

  return (
    <div className="w-full max-w-[600px]">
      <GoBack account={account} postCount={postCount} />
      <div className="mx-auto flex w-full grow flex-col">
        <ProfileBanner account={account} />
      </div>
    </div>
  );
};

export default Profile;
