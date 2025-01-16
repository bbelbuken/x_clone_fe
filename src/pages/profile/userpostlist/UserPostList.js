import Post from 'components/posts/Post';
import { usePost } from 'hooks/usePost';

const UserPostList = ({ account }) => {
  const allPosts = usePost();
  const userPosts = allPosts.filter((posts) => posts.userId === account.id);

  return (
    <>
      {userPosts.map((post) => (
        <Post post={post} key={post.id} postId={post.id} />
      ))}
    </>
  );
};

export default UserPostList;
