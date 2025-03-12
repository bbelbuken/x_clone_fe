import { useLikePostMutation } from 'features/posts/postsApiSlice';

const Like = ({ postReactions, postId, currentAccount }) => {
    const [likePost] = useLikePostMutation();

    const isLiked = postReactions.likedBy.includes(currentAccount._id);
    const handleLike = async (e) => {
        e.preventDefault();
        const button = e.currentTarget;
        button.classList.add('animate-like');

        try {
            await likePost({
                postId,
                userId: currentAccount._id,
            }).unwrap();
        } catch (error) {
            console.error('Failed to update like:', error);
        }

        setTimeout(() => {
            button.classList.remove('animate-like');
        }, 300);
    };

    const data = {
        title: 'Like',
        count: postReactions.likeCount || 0,
        svg: (
            <svg
                viewBox="0 0 24 24"
                width={18.75}
                height={18.75}
                className={``}
            >
                {isLiked ? (
                    // Filled heart when liked
                    <path
                        fill="#f91880"
                        d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                    />
                ) : (
                    // Outline heart when not liked
                    <path
                        fill="currentColor"
                        d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                    />
                )}
            </svg>
        ),
    };

    return (
        <div
            className="flex flex-1 -translate-x-2 items-center justify-start"
            title={data.title}
        >
            <button
                className={`group absolute flex min-h-5 transform cursor-pointer items-center text-[14px] text-[#71767b] transition-colors hover:text-[#f91881] ${isLiked ? 'text-[#f91880]' : ''}`}
                onClick={handleLike}
            >
                <div className="flex h-[34.75px] w-[34.75px] items-center justify-center rounded-full group-hover:bg-[#f918811e]">
                    {data.svg}
                </div>
                <span className="-translate-x-[3px] translate-y-[1px] text-[13px] tracking-wide transition-none">
                    {data.count}
                </span>
            </button>
        </div>
    );
};

export default Like;
