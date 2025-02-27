import { useState, memo } from 'react';
import { PasswordIconSVG } from 'components/icons/PasswordShowSVG';

const PasswordInput = memo(({ password, setPassword }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [invalidPass, setInvalidPass] = useState(false);
    const [active, setActive] = useState(false);
    const [isFirstTry, setIsFirstTry] = useState(true);
    const [iconClicked, setIconClicked] = useState(false);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        setPassword(inputValue);
        if (inputValue.length < 8) {
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
        <>
            <label
                htmlFor="password"
                className={`relative mt-4 mb-0.5 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-4 pt-4 pb-2 transition-colors ${invalidPass ? 'focus-within:border-[#f4212e]' : active && !isFirstTry ? 'focus-within:border-[#f4212e]' : 'focus-within:border-[#1d9bf0]'}`}
            >
                {PasswordIconSVG.map((svg, index) => (
                    <div
                        key={index}
                        onClick={() => setIconClicked(!iconClicked)}
                        className="absolute top-7 right-3 cursor-pointer"
                    >
                        {iconClicked ? svg.active : svg.passive}
                    </div>
                ))}

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
                    type={iconClicked ? 'text' : 'password'}
                    id="password"
                    value={password}
                    className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[20px] leading-6 font-normal text-[#e7e9ea] outline-none"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                />
            </label>
            <div className="min-w-0 flex-1 px-2 pt-1 text-[13px] leading-4 tracking-wide transition-all duration-300 ease-in-out">
                <span
                    className={`${isFocused && invalidPass && active ? 'opacity-100' : 'opacity-0'} block text-[#f4212e] transition-opacity duration-300 ease-in-out`}
                >
                    Your password needs to be at least 8 characters. Please
                    enter a longer one.
                </span>
            </div>
        </>
    );
});

PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
