import ReactionData from './reactiondata/ReactionData';
import Bookmarks from './bookmark/Bookmarks';
const ReactionNav = ({
    postReactions,
    postId,
    currentAccount,
    isARepost,
    currentAccountReposted,
}) => {
    return (
        <div className={`mt-3 flex max-w-[600px] items-center justify-between`}>
            <ReactionData
                postId={postId}
                postReactions={postReactions}
                currentAccount={currentAccount}
                isARepost={isARepost}
                currentAccountReposted={currentAccountReposted}
            />

            <div className="relative flex min-h-5 items-center text-[14px] text-[#71767b]">
                <Bookmarks
                    postReactions={postReactions}
                    postId={postId}
                    currentAccount={currentAccount}
                />
                <button
                    className="absolute -right-2 flex h-[34.75px] w-[34.75px] cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-[#1d9bf022] hover:text-[#1d9bf0]"
                    onClick={(e) => e.preventDefault()}
                >
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
