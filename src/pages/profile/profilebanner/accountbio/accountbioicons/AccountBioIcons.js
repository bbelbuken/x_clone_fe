import {
  CalendarIcon,
  LinkIcon,
  LocationIcon,
} from 'components/icons/ProfileBioSVG';
import { formatDate } from 'utils/formatDate/FormatDate';

const AccountBioIcons = ({ account }) => {
  return (
    <div className="mb-3">
      <div className="flex flex-wrap gap-x-3 text-[15px] font-normal leading-5 tracking-wide">
        {account.location && (
          <div className="flex items-center gap-1">
            <LocationIcon className="h-[18.75px] w-[18.75px]" />
            <span>{account.location}</span>
          </div>
        )}
        {account.website && (
          <div className="flex items-center gap-1">
            <LinkIcon className="h-[18.75px] w-[18.75px]" />
            <a
              href={account.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary bio-link"
            >
              {account.website.replace(/(^\w+:|^)\/\//, '')}
            </a>
          </div>
        )}
        <div className="flex items-center gap-1 text-[#9ca3afaf]">
          <CalendarIcon className="h-[18.75px] w-[18.75px]" />
          <span>Joined {formatDate(account.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountBioIcons;
