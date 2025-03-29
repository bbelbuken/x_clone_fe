import Post from 'components/posts/Post';
import { useGetPostsQuery } from 'features/posts/postsApiSlice';
import { MoonLoader } from 'react-spinners';

const FollowingsPostList = ({ currentAccount }) => {
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
        const { ids, entities } = posts;

        // Check if following array exists and has items
        if (
            !currentAccount?.following ||
            currentAccount.following.length === 0
        ) {
            content = (
                <div className="flex min-h-[200px] items-center justify-center">
                    <p className="text-[15px] text-[#71767b]">
                        Follow some users to see their posts here.
                    </p>
                </div>
            );
        } else {
            // Filter posts to only show posts from users that currentAccount follows
            const filteredIds = ids.filter((postId) => {
                const post = entities[postId];
                return currentAccount.following.includes(post.userId);
            });

            if (filteredIds.length === 0) {
                content = (
                    <div className="flex min-h-[200px] items-center justify-center">
                        <p className="text-[15px] text-[#71767b]">
                            No posts from followed users.
                        </p>
                    </div>
                );
            } else {
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
        }
    }

    return <>{content}</>;
};

export default FollowingsPostList;
