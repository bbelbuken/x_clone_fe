import { useGetPostsQuery } from 'features/posts/postsApiSlice';
import Post from 'components/posts/Post';

const UserLikes = ({ currentAccount, visitedAccount }) => {
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
        const likedPostIds = ids.filter((postId) =>
            entities[postId].reactions.likedBy.includes(visitedAccount._id),
        );

        content = likedPostIds.map((postId) => {
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

        if (likedPostIds.length === 0) {
            content = (
                <p className="mx-auto mt-10 text-lg">No replied posts found.</p>
            );
        }
    }

    return <>{content}</>;
};

export default UserLikes;
