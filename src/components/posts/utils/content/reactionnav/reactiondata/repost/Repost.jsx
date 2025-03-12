import { Popover, PopoverPanel, PopoverButton } from '@headlessui/react';
import { useRepostPostMutation } from 'features/posts/postsApiSlice';

const Repost = ({ postReactions, currentAccount, postId }) => {
    const [repostPost] = useRepostPostMutation();

    const handleRepost = async (e) => {
        e.stopPropagation();
        try {
            const response = await repostPost({
                postId,
                userId: currentAccount._id,
            }).unwrap();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

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
            className="relative z-50 flex flex-1 -translate-x-2 items-center justify-start"
            title={data.title}
        >
            <Popover>
                <PopoverButton className="group absolute -top-4 flex min-h-5 cursor-pointer items-center text-[14px] text-[#71767b] hover:text-[#00ba7c]">
                    <div
                        className={`flex h-[34.75px] w-[34.75px] items-center justify-center rounded-full group-hover:bg-[#1d9bf022]`}
                    >
                        {data.svg}
                    </div>
                    <span className="-translate-x-[3px] translate-y-[1px] text-[13px] tracking-wide">
                        {data.count}
                    </span>
                </PopoverButton>
                <PopoverPanel
                    className={
                        'box-shadow-morebox pointer-cursor absolute -top-3 right-16 z-50 box-border flex h-auto w-auto flex-col items-center justify-center overflow-hidden rounded-xl bg-black transition-colors'
                    }
                >
                    <button
                        className="box-border flex h-full w-auto cursor-pointer items-center justify-start"
                        onClick={handleRepost}
                    >
                        <div className="flex h-full w-full items-center justify-start overflow-hidden px-[15px] py-[9px] outline-none hover:bg-[#e7e9ea0c]">
                            <svg
                                viewBox="0 0 24 24"
                                width={18.75}
                                height={18.75}
                                fill="currentColor"
                            >
                                <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                            </svg>

                            <div className="mr-1 ml-2 max-w-full min-w-0 overflow-hidden text-[15px] break-words whitespace-nowrap text-inherit">
                                <span className="ml-0.5 font-bold break-words text-inherit">
                                    Repost
                                </span>
                            </div>
                        </div>
                    </button>

                    <button className="box-border flex h-full w-auto cursor-pointer items-center justify-start">
                        <div className="flex h-full w-full items-center justify-start overflow-hidden px-[15px] py-[9px] outline-none hover:bg-[#e7e9ea0c]">
                            <svg
                                viewBox="0 0 24 24"
                                width={18.75}
                                height={18.75}
                                fill="currentColor"
                            >
                                <path d="M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z"></path>
                            </svg>

                            <div className="mr-1 ml-2 max-w-full min-w-0 overflow-hidden text-[15px] break-words whitespace-nowrap text-inherit">
                                <span className="ml-0.5 font-bold break-words text-inherit">
                                    Quote
                                </span>
                            </div>
                        </div>
                    </button>
                </PopoverPanel>
            </Popover>
        </div>
    );
};

export default Repost;
