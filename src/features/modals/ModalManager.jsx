import { useModal } from 'hooks/useModal';
import UnfollowModal from './components/unfollowmodal/UnfollowModal';
import DeletePostModal from './components/deletepostmodal/DeletePostModal';

const ModalManager = () => {
    const { isOpen, modalType } = useModal();
    console.log('ModalManager - isOpen:', isOpen, 'modalType:', modalType); // Debugging

    if (!isOpen) return null;

    switch (modalType) {
        case 'unfollow':
            return <UnfollowModal />;
        case 'delete':
            return <DeletePostModal />;
        default:
            return null;
    }
};

export default ModalManager;
