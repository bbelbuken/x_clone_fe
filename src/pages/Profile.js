import { useAccounts } from 'hooks/useAccounts';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { username } = useParams();
  const accounts = useAccounts();
  const account = accounts.find((account) => account.username === username);

  return (
    <div className="sticky -top-[0.5px] h-[53px] w-full cursor-pointer bg-black/65 bg-red-600 px-4 backdrop-blur-md">
      <div className="flex h-full items-center justify-start">
        <div className="flex min-h-8 min-w-16 items-stretch justify-start">
          <button className="ml-[calc(-8px)] flex min-h-9 min-w-9 items-center justify-center rounded-full transition-colors hover:bg-[#eff3f41a]">
            <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
            </svg>
          </button>
        </div>

        <div>{account.fullname}</div>
      </div>
    </div>
  );
};

export default Profile;
