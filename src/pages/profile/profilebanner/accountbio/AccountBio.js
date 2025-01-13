import { Link } from 'react-router-dom';
import { convertUrlsToLinks } from '../../../../utils/formatBioLinks/FormatBioLinks';
import AccountBioIcons from './accountbioicons/AccountBioIcons';

const AccountBio = ({ account }) => {
  if (!account) return null;

  return (
    <div>
      <div className="-mt-[1px] mb-3 flex">
        <span className="break-words text-[15px] font-normal leading-5 tracking-[0.020em] text-[#e7e9ea]">
          {convertUrlsToLinks(account.bio || '')}
        </span>
      </div>
      <AccountBioIcons account={account} />
      {/*       <div className="mt-3 flex gap-4 text-[14px]">
        <Link to={`/${account.username}/following`} className="hover:underline">
          <span className="font-bold text-neutral-950 dark:text-white">
            {account.following?.length || 0}
          </span>{' '}
          <span className="text-gray-600 dark:text-gray-400">Following</span>
        </Link>

        <Link to={`/${account.username}/followers`} className="hover:underline">
          <span className="font-bold text-neutral-950 dark:text-white">
            {account.followers?.length || 0}
          </span>{' '}
          <span className="text-gray-600 dark:text-gray-400">Followers</span>
        </Link>
      </div> */}
    </div>
  );
};

export default AccountBio;
