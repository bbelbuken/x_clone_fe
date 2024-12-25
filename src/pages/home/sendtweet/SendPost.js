import { useCurrentAccount } from 'hooks/useAccounts';
import { useState } from 'react';

const SendPost = () => {
  const [tweet, setTweet] = useState('');
  const currentAccount = useCurrentAccount();

  return (
    <div className="flex px-4 pt-1">
      <div className="mr-2 grow-0 basis-10 pt-3">
        <img
          src={currentAccount.avatar}
          alt="user_avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      <div className="static flex grow basis-0 flex-col">
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
        <div></div>
      </div>
    </div>
  );
};

export default SendPost;
