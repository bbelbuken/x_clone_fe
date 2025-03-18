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
        const filteredIds = ids.filter((postId) => {
            const post = entities[postId];

            // If it's a profile page, only show current user's posts
            if (isProfile) {
                return (
                    post.userId === currentAccount?._id &&
                    !post.repliedPostUsername
                );
            }

            // If it's not a profile page, show all posts except replies that don't belong to the current user
            if (post.repliedPost) {
                // Only show the reply if it belongs to the current user
                return post.userId === currentAccount?._id;
            }

            // Show all non-reply posts
            return true;
        });

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
