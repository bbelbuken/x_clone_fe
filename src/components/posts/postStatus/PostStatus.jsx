import { useGetPostByIdQuery } from 'features/posts/postsApiSlice';
import { useParams } from 'react-router-dom';
import useCurrentAccount from 'hooks/useCurrentAccount';
import Post from '../Post';
import GoBack from 'pages/profile/goback/GoBack';
import ReplyList from './replies/ReplyList';

const PostStatus = ({ replyClicked, isReplyModalOpen, isModalClosing }) => {
    const { postId } = useParams();
    const currentAccountData = useCurrentAccount();
    const { account: currentAccount } = currentAccountData;
    const {
        data: post,
        isLoading,
        isError,
        error,
    } = useGetPostByIdQuery(postId);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <main className="flex w-full flex-col">
            {!replyClicked && <GoBack postId={postId} />}
            <Post
                post={post}
                postId={postId}
                currentAccount={currentAccount}
                replyClicked={replyClicked}
            />

            {!isReplyModalOpen &&
                !isModalClosing && ( // Render ReplyList only if modal is fully closed
                    <ReplyList
                        currentAccount={currentAccount}
                        postId={postId}
                    />
                )}
        </main>
    );
};

export default PostStatus;
