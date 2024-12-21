import { Link } from 'react-router-dom';
import { WhoToFollowMockData } from 'mock/whotofollowmockdata/WhoToFollowMockData';
import Button from 'components/buttons/Button';

const WhoToFollow = () => {
  return (
    <div className="block outline-none">
      <div className="flex min-w-0 max-w-full flex-col justify-between self-center break-words px-4 py-3 text-xl font-bold leading-6 tracking-wide outline-none">
        <h2 className="">Who to follow</h2>
      </div>

      <ul>
        {WhoToFollowMockData.map((user, index) => (
          <li className="flex px-4 py-3">
            <img
              src={user.avatar}
              alt="user_avatar"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex">
              <div className="ml-1 flex flex-col items-start justify-center">
                <p className="break-words text-[15px] font-bold">
                  {user.fullname}
                </p>
                <div className="text-[15px] font-light leading-[1.5em] tracking-[0.045em] text-[#71767b]">
                  <div className="flex items-center justify-center">
                    <p className="mr-[1px] text-[12px]">@</p>
                    {user.username}
                  </div>
                </div>
              </div>
              <Button className={'text-[14px] text-black'}>Follow</Button>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <Link to={'explore'}>
          <div className="block h-[52px] w-[348px] p-4 transition-colors hover:bg-[#ffffff09]">
            <div className="min-w-0 break-words text-[15px] font-light leading-4 text-[#f91880]">
              <span>Show more</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WhoToFollow;
