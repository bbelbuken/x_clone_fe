import Post from 'components/posts/Post';
import { useGetPostsQuery } from 'features/posts/postsApiSlice';

const Feed = ({ currentAccount, isProfile = false }) => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPostsQuery();
    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isError) {
        content = <p>{error?.data?.message || 'An error occurred'}</p>;
    } else if (isSuccess) {
        // Using normalized data
        const { ids, entities } = posts;

        // Filter posts based on whether it's the profile page or not
        const filteredIds = isProfile
            ? ids.filter(
                  (postId) => entities[postId].userId === currentAccount?._id,
              ) // Only show current user's posts
            : ids; // Show all posts

        content = filteredIds.map((postId) => {
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
    }

    return <>{content}</>;
};

export default Feed;
