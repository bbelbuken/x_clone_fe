import { useModal } from 'hooks/useModal';
import PostModal from './components/PostModal';
import { useDispatch } from 'react-redux';
import { closeModal } from './modalSlice';

const ModalManager = () => {
  const { isOpen, modalType } = useModal();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!isOpen) return null;

  switch (modalType) {
    case 'post':
      return <PostModal handleClose={handleClose} />;
    default:
      return null;
  }
};

export default ModalManager;
