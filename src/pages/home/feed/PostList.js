import Post from 'components/posts/Post';
import { usePost } from 'hooks/usePost';

const Feed = () => {
  const allPosts = usePost();

  return (
    <>
      {allPosts.map((post) => (
        <Post post={post} key={post.id} postId={post.id} />
      ))}
    </>
  );
};

export default Feed;
