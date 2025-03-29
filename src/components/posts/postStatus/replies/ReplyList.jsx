import { useGetRepliesForPostQuery } from 'features/posts/postsApiSlice';
import Replies from './Replies';
import { MoonLoader } from 'react-spinners';
const ReplyList = ({ currentAccount, postId }) => {
    const {
        data: posts,
        isLoading,
        isSuccess,
    } = useGetRepliesForPostQuery(postId); // Pass postId to the hook

    let content;

    if (isLoading) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <MoonLoader color="#1d9bf0" size={30} />
            </div>
        );
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
