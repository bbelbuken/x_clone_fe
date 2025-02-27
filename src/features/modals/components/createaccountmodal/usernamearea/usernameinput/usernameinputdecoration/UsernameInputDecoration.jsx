import { memo } from 'react';

const UsernameInputDecoration = memo(
    ({ isFocused, username, count, isFirstTime }) => {
        return (
            <div className="flex h-full justify-between">
                <div
                    className={`absolute top-1 transform text-[13px] leading-4 text-ellipsis transition-all duration-300 ease-in-out select-none ${
                        isFirstTime
                            ? 'text-[#1d9bf0]'
                            : isFocused && username.length > 4
                              ? 'text-[#1d9bf0]'
                              : isFocused && username.length < 5
                                ? 'text-[#f4212e]'
                                : !isFocused && username.length > 4
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
                            : isFocused && username.length > 4
                              ? 'text-[#1d9bf0]'
                              : isFocused && username.length < 5
                                ? 'text-[#f4212e]'
                                : !isFocused && username.length > 4
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
    },
);

UsernameInputDecoration.displayName = 'UsernameInputDecoration';
export default UsernameInputDecoration;
