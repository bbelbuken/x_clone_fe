import React from 'react';

const DetectedEmailInput = ({ email }) => {
    return (
        <div
            htmlFor="username"
            className="relative mt-[10px] mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border-none bg-[#202327] px-2 pt-3 pb-[7px] opacity-50 transition-colors duration-200 ease-in-out"
        >
            <div className="ml-[1px] flex h-full w-full items-start justify-start">
                <div className="absolute top-2 transform text-[13px] leading-4 text-ellipsis text-[#6a6d6e] transition-all ease-in-out select-none">
                    <span>Email</span>
                </div>

                <div className="box-border w-full min-w-0 appearance-none bg-transparent pt-[14px] text-left text-[16px] leading-6 tracking-[0.050em] text-[#6a6d6e] outline-none">
                    {email}
                </div>
            </div>
        </div>
    );
};

export default DetectedEmailInput;
