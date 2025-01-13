import { Link } from 'react-router-dom';
import { formatDate } from '../../../../utils/formatDate/FormatDate';
import {
  CalendarIcon,
  LinkIcon,
  LocationIcon,
} from '../../../../components/icons/ProfileBioSVG';
import { convertUrlsToLinks } from '../../../../utils/formatBioLinks/FormatBioLinks';

const AccountBio = ({ account }) => {
  if (!account) return null;

  return (
    <div>
      <div className="-mt-[1px] mb-3 flex">
        <span className="break-words text-[15px] font-normal leading-5 tracking-[0.020em] text-[#e7e9ea]">
          {convertUrlsToLinks(account.bio || '')}
        </span>
      </div>

      {/*       <div className="mt-3 flex flex-wrap gap-x-3 text-[15px] text-gray-600 dark:text-gray-400">
        {account.location && (
          <div className="flex items-center gap-1">
            <LocationIcon className="h-[18px] w-[18px]" />
            <span>{account.location}</span>
          </div>
        )}

        {account.website && (
          <div className="flex items-center gap-1">
            <LinkIcon className="h-[18px] w-[18px]" />
            <a
              href={account.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {account.website.replace(/(^\w+:|^)\/\//, '')}
            </a>
          </div>
        )}

        <div className="flex items-center gap-1">
          <CalendarIcon className="h-[18px] w-[18px]" />
          <span>Joined {formatDate(account.createdAt)}</span>
        </div>
      </div>

      <div className="mt-3 flex gap-4 text-[14px]">
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
