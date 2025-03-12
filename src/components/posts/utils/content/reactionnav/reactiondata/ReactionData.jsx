import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { incrementView } from 'features/posts/postSlice';
import Reply from './reply/Reply';
import Repost from './repost/Repost';
import Like from './like/Like';
import ViewCount from './viewcount/ViewCount';

const ReactionData = ({ postId, postReactions, currentAccount }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(incrementView({ postId, userId: currentAccount._id }));
    }, [dispatch, postId, currentAccount._id]);

    return (
        <div className="justify-star relative mr-[49px] flex flex-1 items-center">
            <Reply postReactions={postReactions} />
            <Repost postReactions={postReactions} />
            <Like
                postReactions={postReactions}
                currentAccount={currentAccount}
                postId={postId}
            />
            <ViewCount postReactions={postReactions} />
        </div>
    );
};

export default ReactionData;
