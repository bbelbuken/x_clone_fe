import { useModal } from 'hooks/useModal';
import PostModal from './components/PostModal';
import { useNavigate } from 'react-router-dom';

const ModalManager = () => {
  const { isOpen, modalType } = useModal();
  const navigate = useNavigate();

  const handleClose = () => {
    const previousRoute = localStorage.getItem('previousRoute');
    if (previousRoute) {
      navigate(previousRoute);
    } else {
      navigate('/home'); // Default to '/home' if no previous route
    }
  };

  if (!isOpen) return null;

  switch (modalType) {
    case 'post':
      return <PostModal handleClose={() => handleClose()} />;
    default:
      return null;
  }
};

export default ModalManager;
