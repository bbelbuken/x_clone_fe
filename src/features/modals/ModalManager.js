import { useModal } from 'hooks/useModal';
import PostModal from './components/PostModal';

const ModalManager = () => {
  const { isOpen, modalType } = useModal();

  if (!isOpen) return null;

  switch (modalType) {
    case 'post':
      return <PostModal />;
    default:
      return null;
  }
};

export default ModalManager;
