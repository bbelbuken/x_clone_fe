import { useGetPostsQuery } from 'features/posts/postsApiSlice';
import Post from 'components/posts/Post';

const UserMedia = ({ currentAccount, visitedAccount }) => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPostsQuery();

    let content;

    if (isLoading) {
        content = <p>Loading media posts...</p>;
    } else if (isError) {
        content = <p>{error?.data?.message || 'An error occurred'}</p>;
    } else if (isSuccess) {
        const { ids, entities } = posts;

        // Filter posts that belong to the current user AND contain media
        const postsWithMedia = ids.filter((postId) => {
            const post = entities[postId];
            return (
                post.userId === visitedAccount._id && // Check if the post belongs to the current user
                ((post.media?.image && post.media.image.length > 0) || // Check for images
                    (post.media?.video && post.media.video.length > 0)) // Check for videos
            );
        });

        content = postsWithMedia.map((postId) => {
            const post = entities[postId];
            return (
                <Post
                    post={post}
                    postId={postId}
                    key={postId}
                    currentAccount={currentAccount}
                    visitedAccount={visitedAccount}
                    isProfile={true}
                />
            );
        });

        if (postsWithMedia.length === 0) {
            content = (
                <p className="mx-auto mt-10 text-lg">No media posts found.</p>
            );
        }
    }

    return <>{content}</>;
};

export default UserMedia;
