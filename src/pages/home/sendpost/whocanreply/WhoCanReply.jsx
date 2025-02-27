const WhoCanReply = () => {
    return (
        <button className="ml-[1px] flex min-h-6 min-w-6 items-center justify-start pb-[14px]">
            <div className="flex grow items-center justify-start rounded-full px-3 text-sm font-semibold text-[#1d9bf0] transition-colors hover:bg-[#1d9bf01a]">
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width={16}
                    height={16}
                >
                    <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"></path>
                </svg>
                <span className="ml-1 -tracking-[0.04em]">
                    Everyone can reply
                </span>
            </div>
        </button>
    );
};

export default WhoCanReply;
