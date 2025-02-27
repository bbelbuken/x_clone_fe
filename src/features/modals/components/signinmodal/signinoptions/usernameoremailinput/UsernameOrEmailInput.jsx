import { useState, useRef } from 'react';

const UsernameOrEmailInput = ({ username, setUsername, email, setEmail }) => {
    const inputRef = useRef();
    const [isFocused, setIsFocused] = useState(true);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        setUsername(inputValue);
    };

    return (
        <label
            htmlFor="name"
            className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 transition-colors duration-200 ease-in-out focus-within:border-[#1d9bf0]"
        >
            <div className="flex h-full justify-between">
                <div
                    className={`absolute text-ellipsis transition-all ease-in-out select-none ${
                        isFocused || username || email
                            ? 'top-1 transform text-[13px] leading-4'
                            : 'top-[30%] transform text-[17px] leading-6'
                    } ${isFocused ? 'text-[#1d9bf0]' : 'text-[#71767b]'}`}
                >
                    <span>Username or email </span>
                </div>
            </div>

            <input
                ref={inputRef}
                type="text"
                id="name"
                className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
                value={username || email}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInput}
                autoComplete="off"
            />
        </label>
    );
};

export default UsernameOrEmailInput;
