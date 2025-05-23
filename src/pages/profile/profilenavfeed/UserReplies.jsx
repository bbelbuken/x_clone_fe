import { useGetPostsQuery } from 'features/posts/postsApiSlice';
import Post from 'components/posts/Post';
import { MoonLoader } from 'react-spinners';

const UserReplies = ({ currentAccount, visitedAccount }) => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPostsQuery();

    let content;

    if (isLoading) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <MoonLoader color="#1d9bf0" size={30} />
            </div>
        );
    } else if (isError && error?.data?.message === 'No posts found') {
        content = (
            <p className="mx-auto mt-10 text-lg">No replied posts found.</p>
        );
    } else if (isError) {
        content = <p>{error?.data?.message || 'An error occurred'}</p>;
    } else if (isSuccess) {
        const { ids, entities } = posts;

        // Filter posts that are replies made by the current user
        const repliedPostIds = ids.filter((postId) => {
            const post = entities[postId];
            // Check if the post is a reply and if it belongs to the current user
            return (
                post.repliedPost && // Check if it's a reply
                post.userId === visitedAccount._id // Check if the reply belongs to the current user
            );
        });

        if (repliedPostIds.length === 0) {
            content = (
                <p className="mx-auto mt-10 text-lg">No replied posts found.</p>
            );
        } else {
            // Map the filtered reply posts to the Post component
            content = repliedPostIds.map((postId) => {
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
        }
    }

    return <>{content}</>;
};

export default UserReplies;
