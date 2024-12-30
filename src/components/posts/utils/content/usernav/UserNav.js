import { Link } from 'react-router-dom';
import TimeAgo from './timeago/TimeAgo';
import More from './more/More';
import VerifiedSVG from 'components/svgs/VerifiedSVG';

const UserNav = ({ account, postDate }) => {
  return (
    <div className="relative mb-0.5 flex max-w-full shrink grow items-start justify-start">
      <div className="flex w-full items-center justify-start">
        <Link
          to={`/${account.username}`}
          className="flex max-w-full shrink cursor-pointer items-center justify-start gap-0.5 whitespace-nowrap text-[15px] font-bold leading-5 hover:underline"
        >
          {account.fullname}
          {account?.verified && <VerifiedSVG />}
        </Link>
        <div className="ml-1 flex items-center justify-center text-[15px] leading-5 text-[#71767b]">
          <Link
            to={`/${account.username}`}
            className="flex min-w-0 max-w-full shrink leading-5"
          >
            <span className="text-[12px]">@</span>
            {account.username}
          </Link>
          <span className="-translate-y-1 px-1">.</span>
          <TimeAgo postDate={postDate} />
        </div>
      </div>
      <More account={account} />
    </div>
  );
};

export default UserNav;
