import { Link } from 'react-router-dom';
import { convertUrlsToLinks } from '../../../../utils/formatBioLinks/FormatBioLinks';
import AccountBioIcons from './accountbioicons/AccountBioIcons';
import { numberFormat } from 'utils/formatPostCount/FormatPostCount';

const AccountBio = ({ account }) => {
  if (!account) return null;

  return (
    <div>
      <div className="-mt-[2px] mb-3 flex font-twitter">
        <span className="break-words text-[15px] font-normal leading-5 tracking-[0.012em] text-[#e7e9ea]">
          {convertUrlsToLinks(account.bio || '')}
        </span>
      </div>

      <AccountBioIcons account={account} />

      <div className="flex text-[14px] leading-[18px]">
        <Link
          to={`/${account.username}/following`}
          className="mr-5 hover:underline"
        >
          <span className="font-bold tracking-wide text-[#e7e9ea]">
            {account.following?.length || 0}
          </span>
          <span className="ml-0.5 tracking-wide text-[#71767b]">Following</span>
        </Link>

        <Link to={`/${account.username}/followers`} className="hover:underline">
          <span className="font-bold text-[#e7e9ea]">
            {numberFormat(account.followers?.length || 0)}
          </span>
          <span className="ml-0.5 tracking-wide text-[#71767b]">Followers</span>
        </Link>
      </div>
    </div>
  );
};

export default AccountBio;
