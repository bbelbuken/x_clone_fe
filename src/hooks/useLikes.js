import { useSelector } from 'react-redux';

export const useGetLikesByUser = (postId, accountId) => {
  const likes = useSelector((state) => state.likes.likes);
  return likes.filter(
    (like) => like.postId === postId && like.accountId === accountId,
  );
};

export const useLikesForPost = (postId) => {
  const likes = useSelector((state) => state.likes.likes);
  return likes.filter((like) => like.postId === postId);
};
