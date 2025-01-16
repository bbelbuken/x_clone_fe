import Index from './index/Index';
import UserNav from './usernav/UserNav';
import Media from './media/Media';
import ReactionNav from './reactionnav/ReactionNav';

const Content = ({
  account,
  postId,
  postContent,
  postDate,
  postIMG,
  postVideo,
  postReply,
  postReposts,
  postLike,
  postView,
}) => {
  return (
    <div className="items-star flex grow flex-col justify-start pb-3">
      <UserNav account={account} postDate={postDate} />
      <Index postContent={postContent} />
      <Media postIMG={postIMG} postVideo={postVideo} />
      <ReactionNav
        postReply={postReply}
        postReposts={postReposts}
        postLike={postLike}
        postView={postView}
        postId={postId}
        account={account}
      />
    </div>
  );
};

export default Content;
