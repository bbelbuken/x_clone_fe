import { useSelector } from 'react-redux';
import { selectCurrentAccount } from 'store/authentication/authenticationSlice'; // Import from the slice

const useCurrentAccount = () => {
  const { id, username, fullname, avatar } = useSelector(selectCurrentAccount);

  return { id, username, fullname, avatar };
};

export default useCurrentAccount;
