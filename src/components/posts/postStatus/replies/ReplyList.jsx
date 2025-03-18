import { useGetRepliesForPostQuery } from 'features/posts/postsApiSlice';
import Replies from './Replies';

const ReplyList = ({ currentAccount, postId }) => {
    const {
        data: posts,
        isLoading,
        isSuccess,
    } = useGetRepliesForPostQuery(postId); // Pass postId to the hook

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        const { ids, entities } = posts;

        content = ids.map((replyId) => {
            const reply = entities[replyId];
            return (
                <Replies
                    post={reply}
                    postId={replyId}
                    key={replyId}
                    currentAccount={currentAccount}
                />
            );
        });
    }

    return <>{content}</>;
};

export default ReplyList;
