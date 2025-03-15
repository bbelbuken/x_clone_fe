import { useGetPostsQuery } from 'features/posts/postsApiSlice';
import Post from 'components/posts/Post';

const UserReplies = ({ currentAccount }) => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPostsQuery();

    let content;

    if (isLoading) {
        content = <p>Loading liked posts...</p>;
    } else if (isError) {
        content = <p>{error?.data?.message || 'An error occurred'}</p>;
    } else if (isSuccess) {
        const { ids, entities } = posts;

        // Filter posts that the current user has liked
        const repliedPostIds = ids.filter((postId) =>
            entities[postId].reactions.repliedBy.includes(currentAccount._id),
        );

        content = repliedPostIds.map((postId) => {
            const post = entities[postId];
            return (
                <Post
                    post={post}
                    postId={postId}
                    key={postId}
                    currentAccount={currentAccount}
                />
            );
        });

        if (repliedPostIds.length === 0) {
            content = (
                <p className="mx-auto mt-10 text-lg">No replied posts found.</p>
            );
        }
    }

    return <>{content}</>;
};

export default UserReplies;
