import { useAccounts } from 'hooks/useAccounts';
import { useParams } from 'react-router-dom';
import usePostCountByUser from 'hooks/usePostCountByUser';
import GoBack from './goback/GoBack';

const Profile = () => {
  const { username } = useParams();
  const postCount = usePostCountByUser();
  const accounts = useAccounts();
  const account = accounts.find((account) => account.username === username);

  return (
    <div>
      <GoBack account={account} postCount={postCount} />
    </div>
  );
};

export default Profile;
