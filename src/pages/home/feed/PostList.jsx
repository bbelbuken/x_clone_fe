import Post from 'components/posts/Post';
import { useGetPostsQuery } from 'features/posts/postsApiSlice';

const Feed = () => {
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
        // Assuming `posts` is an array of post objects
        content = posts.map((post) => (
            <Post post={post} key={post.id} postId={post.id} />
        ));
    }

    return <>{content}</>;
};

export default Feed;
