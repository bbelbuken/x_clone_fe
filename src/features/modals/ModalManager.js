import { useModal } from 'hooks/useModal';
import PostModal from './components/PostModal';
import HeaderPhotoModal from './components/HeaderPhotoModal';

const ModalManager = () => {
  const { isOpen, modalType } = useModal();

  if (!isOpen) return null;

  switch (modalType) {
    case 'post':
      return <PostModal />;
    case 'header-photo':
      return <HeaderPhotoModal />;
    default:
      return null;
  }
};

export default ModalManager;
