import { useCurrentAccount } from 'hooks/useAccounts';
import { useState } from 'react';
import PostNavData from './postnavdata/PostNavData';
import Button from 'components/buttons/Button';
import Form from './form/Form';
import WhoCanReply from './whocanreply/WhoCanReply';
import { useDispatch } from 'react-redux';
import { addPost } from 'features/posts/postSlice';

const SendPost = () => {
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const currentAccount = useCurrentAccount();

  const handleClick = () => {
    setIsClicked(true);
  };

  const handlePost = () => {
    if (tweet.trim()) {
      dispatch(addPost(tweet, currentAccount.id)); // No need to handle post structure manually
      console.log(currentAccount.id);

      setTweet(''); // Clear input after dispatch
    }
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

      <div className="static mt-[6px] flex grow basis-0 flex-col">
        <Form tweet={tweet} setTweet={setTweet} />
        {isClicked && (
          <div className="sticky -bottom-[1px] top-0 -ml-2 mt-[14px] flex w-full flex-wrap items-center justify-between border-b border-b-[#2f3336]">
            <WhoCanReply />
          </div>
        )}
        <div
          className={`flex min-h-10 w-full items-center justify-center ${isClicked ? 'mt-2' : 'mt-5'}`}
        >
          <nav className="-ml-2 mr-1 flex h-full w-full items-center justify-center">
            <PostNavData />
          </nav>
        </div>
      </div>

      <Button
        size="normal"
        className={`absolute bottom-[10px] right-4 px-[16.5px] py-[7px] text-[14.5px] text-black ${tweet ? 'bg-[#eff3f4]' : 'pointer-events-none bg-[#787a7a]'}`}
        onClick={handlePost}
      >
        <span>Post</span>
      </Button>
    </div>
  );
};

export default SendPost;
