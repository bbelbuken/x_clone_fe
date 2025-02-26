import { useRef, useState, useEffect } from 'react';
const UsernameInput = ({ name, username, setUsername }) => {
    const inputRef = useRef();
    const [isFocused, setIsFocused] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleInput = (e) => {
        const inputValue = e.target.value.slice(0, 50);
        setUsername(inputValue);
        setCount(inputValue.length);
    };

    return (
        <label
            htmlFor="name"
            className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 transition-colors duration-200 ease-in-out focus-within:border-[#1d9bf0]"
        >
            <div className="flex h-full justify-between">
                <div
                    className={`absolute top-1 transform text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none ${
                        isFocused ? 'text-[#1d9bf0]' : 'text-[#71767b]'
                    }`}
                >
                    <span>Username</span>
                </div>

                <span
                    className={`${
                        isFocused ? 'text-[#1d9bf0]' : 'text-[#71767b]'
                    } mt-3`}
                >
                    @
                </span>
                <div
                    className={`absolute top-2 right-0 items-end px-2 text-[13px] text-[#71767b] ${isFocused ? 'inline-block' : 'hidden'}`}
                >
                    <span>{count} / 50</span>
                </div>
            </div>

            <input
                ref={inputRef}
                type="text"
                id="name"
                className="ml-1 box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[16px] leading-6 text-[#e7e9ea] outline-none"
                value={name}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInput}
                autoComplete="off"
            />
        </label>
    );
};

export default UsernameInput;
