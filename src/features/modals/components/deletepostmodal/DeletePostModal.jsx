import { useRef } from 'react';
import Button from 'components/buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'features/modals/modalSlice';
import { useDeletePostMutation } from 'features/posts/postsApiSlice';
import LoadingSpinner from 'components/loading/LoadingSpinner';

const DeletePostModal = () => {
    const modalRef = useRef();
    const dispatch = useDispatch();
    const [deletePost, { isLoading, error }] = useDeletePostMutation();
    const { post } = useSelector((state) => state.modals.props);

    const handleClose = () => {
        dispatch(closeModal());
    };

    const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const handleDeletePost = async (e) => {
        e.preventDefault();
        await deletePost({ postId: post._id }).unwrap();
        handleClose();
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {isLoading && (
                <div>
                    {' '}
                    <LoadingSpinner />
                </div>
            )}
            <div
                onClick={handleClickOutside}
                className="fixed inset-0 z-40 flex items-center justify-center bg-[#4a5c687c]"
            >
                <div
                    ref={modalRef}
                    className="z-50 mx-auto flex min-h-[calc(192px)] w-[320px] max-w-[80vh] flex-col rounded-2xl bg-black p-8"
                >
                    <h1 className="z-50text-left min-w-0 text-xl font-bold tracking-wide break-words">
                        Delete post?
                    </h1>
                    <p className="mt-[5px] mb-0.5 w-full min-w-0 text-left text-[15px] leading-5 font-normal tracking-[0.010em] break-words text-[#71767b]">
                        This can’t be undone and it will be removed from your
                        profile, the timeline of any accounts that follow you,
                        and from search results.
                    </p>
                    <div className="mt-6 mb-[calc(-12px)] flex flex-col transition-colors">
                        <Button
                            size="deletePost"
                            onClick={handleDeletePost}
                            className="mb-3 min-h-[44px] text-white hover:bg-[#dc1e29]"
                        >
                            Delete
                        </Button>
                        <Button
                            size="profile-follow"
                            onClick={handleClose}
                            className="mb-3 min-h-[44px] hover:bg-[#eff3f41a]"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletePostModal;
