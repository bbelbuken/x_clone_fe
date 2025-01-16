import Post from 'components/posts/Post';
import { usePost } from 'hooks/usePost';

const UserLikes = ({ account }) => {
  const allPosts = usePost();
  const userLikes = allPosts.filter((post) => post.reactions.like > 0);

  return (
    <>
      {userLikes.map((post) => (
        <Post post={post} key={post.id} postId={post.id} />
      ))}
    </>
  );
};

export default UserLikes;
