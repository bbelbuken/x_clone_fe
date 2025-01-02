import { useCurrentAccount } from 'hooks/useAccounts';
import { useState } from 'react';
import PostNavData from './postnavdata/PostNavData';
import Button from 'components/buttons/Button';
import Form from './form/Form';
import WhoCanReply from './whocanreply/WhoCanReply';
import { useDispatch } from 'react-redux';
import { addPost } from 'features/posts/postSlice';

const SendPost = ({ modalRef }) => {
  const [tweet, setTweet] = useState('');
  const [image, setImage] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const currentAccount = useCurrentAccount();
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleImageSelect = (img) => {
    setImage(img);
  };

  const handlePost = () => {
    if (tweet.trim()) {
      dispatch(addPost(tweet, currentAccount.id));
      console.log(currentAccount.id);

      setTweet('');
    }
  };

  return (
    <div
      className="relative flex border-b border-b-[#2f3336] px-4 pb-2 pt-1"
      onClick={handleClick}
      onFocus={handleClick}
    >
      <div
        className={`mr-2 grow-0 basis-10 pt-3 ${modalRef ? 'max-h-10' : ''}`}
      >
        <img
          src={currentAccount.avatar}
          alt="user_avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      <div className="static mt-[6px] flex grow basis-0 flex-col">
        <Form
          tweet={tweet}
          setTweet={setTweet}
          image={image}
          modalRef={modalRef}
        />
        {isClicked || modalRef ? (
          <div
            className={`sticky -bottom-[1px] top-0 mt-[14px] flex w-full flex-wrap items-center justify-between border-b border-b-[#2f3336] ${modalRef ? '-ml-14 w-[570px]' : '-ml-2'}`}
          >
            <WhoCanReply />
          </div>
        ) : null}
        <div
          className={`flex min-h-10 w-full items-center justify-center ${isClicked ? 'mt-2' : 'mt-5'}`}
        >
          <nav
            className={`mr-1 flex h-full w-full items-center justify-center ${modalRef ? '-ml-[105px]' : '-ml-2'}`}
          >
            <PostNavData onImageSelect={handleImageSelect} />
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
