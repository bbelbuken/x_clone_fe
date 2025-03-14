import { useDispatch } from 'react-redux';
import { closeModal } from 'features/modals/modalSlice';
import { useRef } from 'react';
import Button from 'components/buttons/Button';
import { useToggleFollowMutation } from 'features/accounts/accountApiSlice';

const UnfollowModal = ({ account, userId, currentUserId, refetch }) => {
    const modalRef = useRef();
    const dispatch = useDispatch();
    const [toggleFollow] = useToggleFollowMutation(); // Add toggleFollow mutation

    const handleUnfollow = async () => {
        try {
            const payload = {
                userId, // Use the userId from props
                currentUserId, // Use the currentUserId from props
            };

            console.log('Payload:', payload); // Debugging: Log the payload

            const response = await toggleFollow(payload).unwrap();
            console.log('Response:', response); // Debugging: Log the response

            dispatch(closeModal()); // Close the modal after unfollowing

            await refetch();
        } catch (error) {
            console.error('Failed to unfollow:', error);
        }
    };

    const handleClickOutside = (e) => {
        e.preventDefault();
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            dispatch(closeModal());
        }
    };

    return (
        <div
            onClick={handleClickOutside}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#4a5c687c]"
        >
            <div
                ref={modalRef}
                className="mx-auto flex min-h-[calc(192px)] w-[320px] max-w-[80vh] flex-col rounded-2xl bg-black p-8"
            >
                <h1 className="mb-2 min-w-0 text-left text-xl font-bold break-words">
                    Unfollow @{account?.username}
                </h1>

                <p className="w-full min-w-0 text-left text-[15px] leading-5 font-normal break-words text-[#71767b]">
                    Their posts will no longer show up in your For You timeline.
                    You can still view their profile, unless their posts are
                    protected.
                </p>

                <div className="mt-6 mb-[calc(-12px)] flex flex-col transition-colors">
                    <Button
                        size="profile-follow"
                        onClick={handleUnfollow} // Call handleUnfollow
                        className="mb-3 min-h-[44px] bg-[#eff3f4] text-black hover:bg-[#d7dbdc]"
                    >
                        Unfollow
                    </Button>
                    <Button
                        size="profile-follow"
                        onClick={() => dispatch(closeModal())}
                        className="mb-3 min-h-[44px] hover:bg-[#eff3f41a]"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UnfollowModal;
