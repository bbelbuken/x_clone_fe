import { useGetPostByIdQuery } from 'features/posts/postsApiSlice';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Post from '../Post';

const PostStatus = () => {
    const { postId } = useParams();
    const currentAccount = useSelector(
        (state) => state.accounts.currentAccount,
    );
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
            <Post post={post} postId={postId} currentAccount={currentAccount} />
        </main>
    );
};

export default PostStatus;
