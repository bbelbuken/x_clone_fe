import { Link } from 'react-router-dom';
import { useAccounts } from 'hooks/useAccounts';
import Button from 'components/buttons/Button';
import VerifiedSVG from 'components/icons/VerifiedSVG';

const WhoToFollow = () => {
  const accounts = useAccounts();
  return (
    <div className="block outline-none">
      <div className="flex min-w-0 max-w-full flex-col justify-between self-center break-words px-4 py-3 text-xl font-bold leading-6 tracking-[0.015em] outline-none">
        <h2 className="">Who to follow</h2>
      </div>

      <ul>
        {accounts.slice(3).map((user, index) => (
          <div className="relative" key={index}>
            <Link
              to={user.username}
              key={index}
              className="flex items-center justify-start"
            >
              <li className="flex items-center justify-center px-4 py-[11px]">
                <img
                  src={user.avatar}
                  alt="user_avatar"
                  className="mr-1 h-10 w-10 basis-[40px] rounded-full"
                />
                <div className="flex max-w-full flex-shrink flex-grow items-center justify-between">
                  <div className="ml-1 flex flex-col items-start justify-center">
                    <div className="flex items-center justify-center gap-0.5">
                      <p className="whitespace-nowrap break-words text-[15px] font-bold leading-5 hover:underline">
                        {user.fullname}
                      </p>
                      {user?.verified && (
                        <VerifiedSVG width={18.75} height={18.75} />
                      )}
                    </div>

                    <div className="text-[15px] font-light leading-[1.5em] tracking-[0.025em] text-[#71767b]">
                      <div className="flex items-center justify-center">
                        <p className="text-[12px]">@</p>
                        {user.username}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
            <Button
              className={'absolute right-4 top-4 bg-[#eff3f4] text-black'}
              size="follow"
            >
              Follow
            </Button>
          </div>
        ))}
      </ul>

      <div>
        <Link to={'explore'}>
          <div className="block h-[52px] w-[348px] p-4 transition-colors hover:bg-[#ffffff09]">
            <div className="min-w-0 break-words text-[15px] font-light leading-5 tracking-wide text-[#f91880]">
              <span>Show more</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WhoToFollow;
