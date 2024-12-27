import Index from './index/Index';
import UserNav from './usernav/UserNav';

const Content = ({ content, account, postDate }) => {
  return (
    <div className="items-star flex grow flex-col justify-start overflow-hidden pb-3">
      <UserNav account={account} postDate={postDate} />
      <Index content={content} />
    </div>
  );
};

export default Content;
