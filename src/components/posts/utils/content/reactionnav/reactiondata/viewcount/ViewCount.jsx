import React from 'react';

const ViewCount = ({ postReactions }) => {
    const data = {
        title: 'View',
        count: postReactions.viewCount || 0,
        svg: (
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18.75}
                height={18.75}
            >
                <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
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

export default ViewCount;
