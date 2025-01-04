import { useAccounts } from './useAccounts';
import { usePost } from './usePost';

const usePostCountByUser = () => {
  const allPosts = usePost();
  const allAccounts = useAccounts();
  const postCount = {};

  allAccounts.forEach((account) => {
    postCount[account.id] = allPosts.filter(
      (post) => post.userId === account.id,
    ).length;
  });

  return postCount; // Returns an object with accountId as key and post count as value
};

export default usePostCountByUser;
