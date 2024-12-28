import Index from './index/Index';
import UserNav from './usernav/UserNav';
import Media from './media/Media';

const Content = ({ account, postContent, postDate, postIMG, postVideo }) => {
  return (
    <div className="items-star flex grow flex-col justify-start overflow-hidden pb-3">
      <UserNav account={account} postDate={postDate} />
      <Index postContent={postContent} />
      <Media postIMG={postIMG} postVideo={postVideo} />
    </div>
  );
};

export default Content;
