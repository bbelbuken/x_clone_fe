import { useCurrentAccount } from 'hooks/useAccounts';
import { useState } from 'react';
import PostNavData from './postnavdata/PostNavData';
import Button from 'components/buttons/Button';

const SendPost = () => {
  const [tweet, setTweet] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const currentAccount = useCurrentAccount();

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      className="relative flex border-b border-b-[#2f3336] px-4 pb-2 pt-1"
      onClick={handleClick}
      onFocus={handleClick}
    >
      <div className="mr-2 grow-0 basis-10 pt-3">
        <img
          src={currentAccount.avatar}
          alt="user_avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      <div className="static mt-[5px] flex grow basis-0 flex-col">
        <form className="relative flex w-full min-w-0 flex-1 items-center justify-start break-words bg-none pt-3 text-[20px] font-normal tracking-[0.010em]">
          <label htmlFor="newPost">
            <input
              type="text"
              id="newPost"
              name="newPost"
              placeholder="What is happening?!"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
              className="max-h-[720px] min-h-6 w-full overflow-hidden border-none bg-transparent bg-none px-0.5 placeholder-[#71767B] outline-none"
            />
          </label>
        </form>

        {isClicked && (
          <div className="sticky -bottom-[1px] top-0 -ml-2 mt-[15px] flex w-full flex-wrap items-center justify-between border-b border-b-[#2f3336]">
            <button className="ml-[1px] flex min-h-6 min-w-6 items-center justify-start pb-[14px]">
              <div className="flex grow items-center justify-start rounded-full px-3 text-sm font-semibold text-[#f91880] transition-colors hover:bg-[#f918801a]">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={16}
                  height={16}
                >
                  <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"></path>
                </svg>
                <span className="ml-1 -tracking-[0.04em]">
                  Everyone can reply
                </span>
              </div>
            </button>
          </div>
        )}

        <div
          className={`flex min-h-10 w-full items-center justify-center ${isClicked ? 'mt-2' : 'mt-[21px]'}`}
        >
          <nav className="-ml-2 mr-1 flex h-full w-full items-center justify-center">
            <PostNavData />
          </nav>
        </div>
      </div>

      <Button
        size="small"
        className={`absolute bottom-[10px] right-4 px-[17.5px] py-[7px] text-[14.5px] text-black ${tweet ? 'bg-[#eff3f4]' : 'pointer-events-none bg-[#787a7a]'}`}
      >
        <span>Post</span>
      </Button>
    </div>
  );
};

export default SendPost;
