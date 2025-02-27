import { useModal } from 'hooks/useModal';
import UnfollowModal from './components/unfollowmodal/UnfollowModal';

const ModalManager = () => {
    const { isOpen, modalType } = useModal();

    if (!isOpen) return null;

    switch (modalType) {
        case 'unfollow':
            return <UnfollowModal />;
        default:
            return null;
    }
};

export default ModalManager;
