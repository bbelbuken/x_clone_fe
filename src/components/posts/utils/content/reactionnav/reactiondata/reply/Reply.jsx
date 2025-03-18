import { useNavigate } from 'react-router-dom';

const Reply = ({ postReactions, postId }) => {
    const navigate = useNavigate();

    const openReplyPostal = (e) => {
        e.preventDefault();
        const previousRouteReplyModal = location.pathname;
        localStorage.setItem(
            'previousRouteReplyModal',
            previousRouteReplyModal,
        );
        navigate(`/post/${postId}/reply`, {
            state: { background: location.pathname },
        });
    };

    const data = {
        title: 'Reply',
        count: postReactions.replyCount || 0,
        svg: (
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18.75}
                height={18.75}
            >
                <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
            </svg>
        ),
    };

    return (
        <div
            className="flex flex-1 -translate-x-2 items-center justify-start"
            title={data.title}
        >
            <button
                className="absolute flex min-h-5 cursor-pointer items-center text-[14px] text-[#71767b] hover:text-[#1d9bf0]"
                onClick={openReplyPostal}
            >
                <div
                    className={`flex h-[34.75px] w-[34.75px] items-center justify-center rounded-full hover:bg-[#1d9bf022]`}
                >
                    {data.svg}
                </div>
                <span className="-translate-x-[3px] translate-y-[1px] text-[13px] tracking-wide">
                    {data.count}
                </span>
            </button>
        </div>
    );
};

export default Reply;
