import Post from 'components/posts/Post';
import { useGetPostsQuery } from 'features/posts/postsApiSlice';

const Feed = ({ currentAccount }) => {
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
        // using normalized data
        const { ids, entities } = posts;

        content = ids.map((postId, index) => {
            const post = entities[postId];

            return (
                <Post
                    post={post}
                    postId={postId}
                    key={index}
                    currentAccount={currentAccount}
                />
            );
        });
    }

    return <>{content}</>;
};

export default Feed;
