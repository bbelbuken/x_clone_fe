import { Link, useNavigate } from 'react-router-dom';
import TimeAgo from './timeago/TimeAgo';
import More from './more/More';
import VerifiedSVG from 'components/icons/VerifiedSVG';

const UserNav = ({ account, postDate }) => {
  const navigate = useNavigate();
  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/${account.username}`);
  };

  return (
    <div className="relative mb-0.5 flex max-w-full shrink grow items-start justify-start">
      <div className="flex w-full items-center justify-start">
        <div
          onClick={handleImageClick}
          className="flex max-w-full shrink cursor-pointer items-center justify-start gap-0.5 whitespace-nowrap text-[15px] font-bold leading-5 hover:underline"
        >
          {account.fullname}
          {account?.verified && <VerifiedSVG />}
        </div>
        <div className="ml-1 flex items-center justify-center text-[15px] leading-5 text-[#71767b]">
          <div
            onClick={handleImageClick}
            className="flex min-w-0 max-w-full shrink leading-5"
          >
            <span className="text-[12px]">@</span>
            {account.username}
          </div>
          <span className="-translate-y-1 px-1">.</span>
          <TimeAgo postDate={postDate} />
        </div>
      </div>
      <More account={account} />
    </div>
  );
};

export default UserNav;
