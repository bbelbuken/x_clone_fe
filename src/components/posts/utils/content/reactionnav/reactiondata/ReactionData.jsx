import Reply from './reply/Reply';
import Repost from './repost/Repost';
import Like from './like/Like';
import ViewCount from './viewcount/ViewCount';

const ReactionData = ({
    postId,
    postReactions,
    currentAccount,
    isARepost,
    currentAccountReposted,
}) => {
    return (
        <div className="justify-star relative mr-[49px] flex flex-1 items-center">
            <Reply
                postReactions={postReactions}
                currentAccount={currentAccount}
                postId={postId}
            />
            <Repost
                postReactions={postReactions}
                currentAccount={currentAccount}
                postId={postId}
                isARepost={isARepost}
                currentAccountReposted={currentAccountReposted}
            />
            <Like
                postReactions={postReactions}
                currentAccount={currentAccount}
                postId={postId}
            />
            <ViewCount
                postReactions={postReactions}
                currentAccount={currentAccount}
                postId={postId}
            />
        </div>
    );
};

export default ReactionData;
