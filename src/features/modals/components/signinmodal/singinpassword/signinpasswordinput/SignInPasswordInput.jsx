import { PasswordIconSVG } from 'components/icons/PasswordShowSVG';
import { useState, useEffect, useRef } from 'react';

const SignInPasswordInput = ({ password, setPassword }) => {
    const inputRef = useRef();
    const [iconClicked, setIconClicked] = useState(false);
    const [isFocused, setIsFocused] = useState(true);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <>
            <label
                htmlFor="password"
                className={`relative mt-4 mb-0.5 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border px-2 py-4 pt-4 pb-2 transition-colors ${isFocused ? 'border-[#1d9bf0]' : 'border-[#333639]'} `}
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
                        } ${isFocused ? 'text-[#1d9bf0]' : isFocused && password ? 'text-[#1d9bf0]' : 'text-[#71767b]'}`}
                    >
                        <span>Password</span>
                    </div>
                </div>
                <input
                    ref={inputRef}
                    type={iconClicked ? 'text' : 'password'}
                    id="password"
                    value={password}
                    className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[20px] leading-6 font-normal text-[#e7e9ea] outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    autoComplete="off"
                />
            </label>
            <div className="mt-0.5 ml-5 flex h-[36px] w-full items-start justify-start rounded-[20px] bg-transparent">
                <span className="cursor-pointer text-[13px] text-[#1d9bf0] hover:underline">
                    Forgot password?
                </span>
            </div>
        </>
    );
};

export default SignInPasswordInput;
