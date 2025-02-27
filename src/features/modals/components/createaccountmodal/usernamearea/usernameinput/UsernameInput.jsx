import { useRef, useState, useEffect, memo, useCallback } from 'react';
import UsernameInputDecoration from './usernameinputdecoration/UsernameInputDecoration';

const UsernameInput = memo(
    ({
        name,
        username,
        setUsername,
        isFirstTime,
        setIsFirstTime,
        setUseSuggested,
    }) => {
        const inputRef = useRef();
        const [isFocused, setIsFocused] = useState(true);
        const [count, setCount] = useState(0);
        const [suggestion, setSuggestion] = useState([]);
        const [showMore, setShowMore] = useState(false);

        useEffect(() => {
            inputRef.current.focus();
        }, []);

        const generateUsername = useCallback(() => {
            if (name) {
                const lowercaseName = name.toLowerCase();
                const randomNumber = Array.from({ length: 9 }, () =>
                    Math.floor(Math.random() * 10000),
                );
                const newUsername = `${lowercaseName}${randomNumber[0]}`;
                setUsername(newUsername);
                setCount(newUsername.length);

                const randomUsernames = [];
                for (let i = 1; i < 9; i++) {
                    randomUsernames.push(`${lowercaseName}${randomNumber[i]}`);
                }
                setSuggestion(randomUsernames);
            }
        }, [name, setUsername]);

        useEffect(() => {
            generateUsername();
        }, [generateUsername]);

        const handleInput = useCallback(
            (e) => {
                const inputValue = e.target.value.slice(0, 50);
                setUsername(inputValue);
                setCount(inputValue.length);
                setIsFirstTime(false);
            },
            [setIsFirstTime, setUsername],
        );

        return (
            <label
                htmlFor="name"
                className={`relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border px-2 py-3 pt-3 pb-2 transition-colors duration-200 ease-in-out ${
                    isFirstTime
                        ? 'border-[#1d9bf0]'
                        : isFocused && username.length > 4
                          ? 'border-[#1d9bf0]'
                          : isFocused && username.length < 5
                            ? 'border-[#f4212e]'
                            : !isFocused && username.length > 4
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
                {!isFirstTime && (
                    <div className="absolute top-14 left-0 min-w-0 flex-1 px-2 pt-1 text-[12px] leading-4 tracking-wide transition-all duration-300 ease-in-out">
                        <span
                            className={`${username.length > 4 ? 'opacity-0' : 'opacity-100'} block text-[#f4212e] transition-opacity duration-300 ease-in-out`}
                        >
                            Your username must be longer than 4 characters.
                        </span>
                    </div>
                )}

                <div
                    className={`${showMore ? 'opacity-0' : 'opacity-100'} absolute top-21 left-0 min-w-0 flex-1 cursor-pointer px-2 pt-1 text-[14px] leading-4 tracking-wide transition-all duration-300 ease-in-out`}
                    onClick={() => setShowMore(true)}
                >
                    <span className="block text-[#1d9bf0] opacity-100 transition-opacity duration-300 ease-in-out">
                        Show more
                    </span>
                </div>

                <div
                    className={`${!showMore ? 'pointer-events-none opacity-0' : 'opacity-100'} absolute top-21 left-0 flex min-w-0 flex-1 cursor-pointer flex-wrap gap-1 px-2 pt-1 text-[14px] leading-4 tracking-wide break-words transition-all duration-300 ease-in-out`}
                    onClick={() => setShowMore(true)}
                >
                    {suggestion.map((name, index) => (
                        <span
                            key={index}
                            className="block text-[#1d9bf0] opacity-100 transition-opacity duration-300 ease-in-out"
                            onClick={() => {
                                setUsername(name);
                                setUseSuggested(true);
                            }}
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </label>
        );
    },
);

UsernameInput.displayName = 'UsernameInput';
export default UsernameInput;
