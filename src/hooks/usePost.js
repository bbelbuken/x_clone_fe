import { useSelector } from 'react-redux';

export const usePost = () => useSelector((state) => state.posts);
