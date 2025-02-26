import { useRef, useState, useEffect } from 'react';
import UsernameInputDecoration from './usernameinputdecoration/UsernameInputDecoration';

const UsernameInput = ({
    name,
    username,
    setUsername,
    isFirstTime,
    setIsFirstTime,
}) => {
    const inputRef = useRef();
    const [isFocused, setIsFocused] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        if (name) {
            const lowercaseName = name.toLowerCase();
            const randomNumber = Array.from({ length: 10 }, () =>
                Math.floor(Math.random() * 10000),
            );
            const newUsername = `${lowercaseName}${randomNumber[0]}`;
            setUsername(newUsername);
            setCount(newUsername.length);
        }
    }, [name, setUsername]);

    const handleInput = (e) => {
        const inputValue = e.target.value.slice(0, 50);
        setUsername(inputValue);
        setCount(inputValue.length);
        setIsFirstTime(false);
    };

    return (
        <label
            htmlFor="name"
            className={`relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border px-2 py-3 pt-3 pb-2 transition-colors duration-200 ease-in-out ${
                isFirstTime
                    ? 'border-[#1d9bf0]'
                    : isFocused && username
                      ? 'border-[#1d9bf0]'
                      : !username && isFocused
                        ? 'border-[#f4212e]'
                        : username && !isFocused
                          ? 'border-[#1d9bf0]'
                          : 'border-[#f4212e]'
            } `}
        >
            <UsernameInputDecoration
                username={username}
                isFocused={isFocused}
                count={count}
                isFirstTime={isFirstTime}
            />
            <input
                ref={inputRef}
                type="text"
                id="name"
                className="ml-1 box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[16px] leading-6 text-[#e7e9ea] outline-none"
                value={username}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInput}
                autoComplete="off"
            />
        </label>
    );
};

export default UsernameInput;
