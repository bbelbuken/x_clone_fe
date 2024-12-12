import { useSelector } from 'react-redux';

export const useCurrentAccount = () =>
  useSelector((state) => state.accounts.currentAccount);
export const useAccounts = () =>
  useSelector((state) => state.accounts.accounts);
