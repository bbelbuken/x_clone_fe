import { useDispatch } from 'react-redux';
import { removeFollower } from 'features/accounts/accountSlice';
import { closeModal } from 'features/modals/modalSlice';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import Button from 'components/buttons/Button';

const UnfollowModal = () => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const { account } = useParams();

  const handleUnfollow = () => {
    dispatch(removeFollower(account.id));
    dispatch(closeModal());
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
        <h1 className="mb-2 min-w-0 break-words text-left text-xl font-bold">
          Unfollow @{account}
        </h1>

        <p className="w-full min-w-0 break-words text-left text-[15px] font-normal leading-5 text-[#71767b]">
          Their posts will no longer show up in your For You timeline. You can
          still view their profile, unless their posts are protected.
        </p>

        <div className="mb-[calc(-12px)] mt-6 flex flex-col transition-colors">
          <Button
            size="profile-follow"
            onClick={handleUnfollow}
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
