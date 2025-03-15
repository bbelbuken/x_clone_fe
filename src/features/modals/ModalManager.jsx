import { useModal } from 'hooks/useModal';
import UnfollowModal from './components/unfollowmodal/UnfollowModal';
import DeletePostModal from './components/deletepostmodal/DeletePostModal';

const ModalManager = () => {
    const { isOpen, modalType, props } = useModal();

    if (!isOpen) return null;

    switch (modalType) {
        case 'unfollow':
            return <UnfollowModal {...props} />;
        case 'delete':
            return <DeletePostModal {...props} />;
        default:
            return null;
    }
};

export default ModalManager;
