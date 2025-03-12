import React from 'react';

const Repost = ({ postReactions }) => {
    const data = {
        title: 'Repost',
        count: postReactions.repostCount || 0,
        svg: (
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18.75}
                height={18.75}
            >
                <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
            </svg>
        ),
    };

    return (
        <div
            className="flex flex-1 -translate-x-2 items-center justify-start"
            title={data.title}
        >
            <button
                className="absolute flex min-h-5 cursor-pointer items-center text-[14px] text-[#71767b] hover:text-[#00ba7c]"
                onClick={(e) => {
                    e.preventDefault();
                }}
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

export default Repost;
