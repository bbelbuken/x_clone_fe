import { useState } from 'react';

const PasswordInput = ({ password, setPassword }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [invalidPass, setInvalidPass] = useState(false);
    const [active, setActive] = useState(false);
    const [isFirstTry, setIsFirstTry] = useState(true);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        setPassword(inputValue);
        if (inputValue.length <= 8) {
            setInvalidPass(true);
            setActive(true);
        } else {
            setInvalidPass(false);
            setActive(false);
        }
    };

    const handleKeyDown = (e) => {
        const inputValue = e.target.value;
        if (e.key === 'Backspace' && inputValue.length <= 8) {
            setActive(true);
            setIsFirstTry(false);
        } else {
            setActive(false);
        }
    };

    return (
        <label
            htmlFor="password"
            className={`relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 transition-colors ${invalidPass ? 'focus-within:border-[#f4212e]' : active && !isFirstTry ? 'focus-within:border-[#f4212e]' : 'focus-within:border-[#1d9bf0]'}`}
        >
            <div className="flex h-full justify-between">
                <div
                    className={`absolute text-ellipsis transition-all ease-in-out select-none ${
                        isFocused || password
                            ? 'top-1 transform text-[13px] leading-4'
                            : 'top-[30%] transform text-[17px] leading-6'
                    } ${isFocused && isFirstTry && !invalidPass ? 'text-[#1d9bf0]' : isFocused && !isFirstTry && !invalidPass ? 'text-[#1d9bf0]' : isFocused && invalidPass && active ? 'text-[#f4212e]' : !isFocused ? 'text-[#71767b]' : ''}`}
                >
                    <span>Password</span>
                </div>
            </div>

            <input
                type="password"
                id="password"
                value={password}
                className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                autoComplete="off"
            />
        </label>
    );
};

export default PasswordInput;
