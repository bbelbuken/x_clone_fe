import { useBookmarkPostMutation } from 'features/posts/postsApiSlice';

const Bookmarks = ({ postReactions, postId, currentAccount }) => {
    const [bookmarkPost] = useBookmarkPostMutation();
    const isBookmarked = postReactions.bookmarkedBy.includes(
        currentAccount._id,
    );

    const handleBookmark = async (e) => {
        e.preventDefault();
        const button = e.currentTarget;
        button.classList.add('animate-like');

        try {
            await bookmarkPost({
                postId,
                userId: currentAccount._id,
            }).unwrap();
        } catch (error) {
            console.error('Failed to bookmark post:', error);
        }

        setTimeout(() => {
            button.classList.remove('animate-like');
        }, 300);
    };

    return (
        <button
            className="absolute right-[22px] flex h-[34.75px] w-[34.75px] cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-[#1d9bf022] hover:text-[#1d9bf0]"
            onClick={handleBookmark}
        >
            {isBookmarked ? (
                /* Solid version that MATCHES original outline dimensions */
                <svg
                    viewBox="0 0 24 24"
                    fill="#1d9bf0"
                    width={18.75}
                    height={18.75}
                >
                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path>
                </svg>
            ) : (
                /* Your original outline bookmark */
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={18.75}
                    height={18.75}
                >
                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
                </svg>
            )}
        </button>
    );
};

export default Bookmarks;
