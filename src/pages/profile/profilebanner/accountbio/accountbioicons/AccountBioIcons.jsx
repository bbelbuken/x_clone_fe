import {
  CalendarIcon,
  LinkIcon,
  LocationIcon,
} from 'components/icons/ProfileBioSVG';
import { formatDate } from 'utils/formatDate/FormatDate';

const ensureHttps = (url) => {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
};

const AccountBioIcons = ({ account }) => {
  return (
    <div className="mb-3">
      <div className="flex flex-wrap gap-x-3 text-[15px] font-normal leading-5 tracking-wide">
        {account.location && (
          <div className="flex items-center gap-1">
            <LocationIcon className="mt-[2px] h-[18.75px] w-[18.75px]" />
            <span className="">{account.location}</span>
          </div>
        )}
        {account.website && (
          <div className="flex items-center gap-1">
            <LinkIcon className="mt-[2px] h-[18.75px] w-[18.75px]" />
            <a
              href={ensureHttps(account.website)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary bio-link"
            >
              {account.website.replace(/(^\w+:|^)\/\//, '')}
            </a>
          </div>
        )}
        <div className="flex items-center gap-1 text-[#9ca3afaf]">
          <CalendarIcon className="mt-[2px] h-[18.75px] w-[18.75px]" />
          <span className="">Joined {formatDate(account.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountBioIcons;
