import ReactionData from './reactiondata/ReactionData';

const ReactionNav = ({
  postReply,
  postReposts,
  postLike,
  postView,
  postId,
}) => {
  return (
    <div className="mt-3 flex max-w-[600px] items-center justify-between">
      <ReactionData
        postReply={postReply}
        postReposts={postReposts}
        postLike={postLike}
        postView={postView}
        postId={postId}
      />

      <div className="relative flex min-h-5 items-center text-[14px] text-[#71767b]">
        <button className="absolute right-[22px] flex h-[34.75px] w-[34.75px] items-center justify-center rounded-full transition-colors hover:bg-[#1d9bf022] hover:text-[#1d9bf0]">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width={18.75}
            height={18.75}
          >
            <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
            s
          </svg>
        </button>
        <button className="absolute -right-2 flex h-[34.75px] w-[34.75px] items-center justify-center rounded-full transition-colors hover:bg-[#1d9bf022] hover:text-[#1d9bf0]">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width={18.75}
            height={18.75}
          >
            <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReactionNav;
