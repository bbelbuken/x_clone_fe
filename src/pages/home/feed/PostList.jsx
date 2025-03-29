import Post from 'components/posts/Post';
import { useGetPostsQuery } from 'features/posts/postsApiSlice';
import { MoonLoader } from 'react-spinners';
const Feed = ({ currentAccount, visitedAccount, isProfile }) => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPostsQuery();
    let content;

    if (isLoading) {
        content = (
            <div className="flex h-full w-full items-center justify-center">
                <MoonLoader color="#1d9bf0" size={30} />
            </div>
        );
    } else if (isError) {
        content = <p>{error?.data?.message || 'An error occurred'}</p>;
    } else if (isSuccess) {
        // Using normalized data
        const { ids, entities } = posts;

        // Filter posts based on whether it's the profile page or not
        const filteredIds = ids.filter((postId) => {
            const post = entities[postId];

            // If it's a profile page, only show posts by the visited account
            if (isProfile) {
                return (
                    post.userId === visitedAccount?._id && // Only show posts by the visited account
                    !post.repliedPost // Exclude replies
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
                    visitedAccount={visitedAccount}
                    isProfile={isProfile}
                />
            );
        });
    }

    return <>{content}</>;
};

export default Feed;
