import React from 'react';

const UsernameInputDecoration = ({
    isFocused,
    username,
    count,
    isFirstTime,
}) => {
    return (
        <div className="flex h-full justify-between">
            <div
                className={`absolute top-1 transform text-[13px] leading-4 text-ellipsis transition-all duration-300 ease-in-out select-none ${
                    isFirstTime
                        ? 'text-[#1d9bf0]'
                        : isFocused && username
                          ? 'text-[#1d9bf0]'
                          : !username && isFocused
                            ? 'text-[#f4212e]'
                            : username && !isFocused
                              ? 'text-[#1d9bf0]'
                              : 'text-[#f4212e]'
                }`}
            >
                <span>Username</span>
            </div>

            <span
                className={`transition-colors duration-300 ease-in-out ${
                    isFirstTime
                        ? 'text-[#1d9bf0]'
                        : isFocused && username
                          ? 'text-[#1d9bf0]'
                          : !username && isFocused
                            ? 'text-[#f4212e]'
                            : username && !isFocused
                              ? 'text-[#1d9bf0]'
                              : 'text-[#f4212e]'
                } mt-3`}
            >
                @
            </span>
            <div
                className={`absolute top-2 right-0 items-end px-2 text-[13px] text-[#71767b] transition-colors duration-300 ease-in-out ${isFocused ? 'inline-block' : 'hidden'}`}
            >
                <span>{count} / 50</span>
            </div>
        </div>
    );
};

export default UsernameInputDecoration;
