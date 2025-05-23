import { PasswordIconSVG } from 'components/icons/PasswordShowSVG';
import { useState, useEffect, useRef } from 'react';
import Button from 'components/buttons/Button';

const SignInPasswordInput = ({
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    handleNextSection2,
    login,
    newStep,
}) => {
    const inputRef = useRef();
    const [iconClicked, setIconClicked] = useState(false);
    const [isFocused, setIsFocused] = useState(true);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { password, step: newStep };
        if (username) {
            payload.username = username;
        } else {
            payload.email = email;
        }

        await login(payload).unwrap();
        setPassword('');
        setUsername('');
        setEmail('');
        handleNextSection2();
    };

    return (
        <form action="submit" onSubmit={handleSubmit} className="w-full">
            <label
                htmlFor="password"
                className={`relative mt-4 mb-0.5 flex w-full items-center justify-center rounded-[4px] border px-2 py-4 pt-4 pb-2 transition-colors lg:h-full lg:flex-1 ${isFocused ? 'border-[#1d9bf0]' : 'border-[#333639]'} `}
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
                />
            </label>
            <div className="mt-0.5 ml-2 flex h-[36px] w-full items-start justify-start rounded-[20px] bg-transparent">
                <span className="cursor-pointer text-[13px] text-[#1d9bf0] hover:underline">
                    Forgot password?
                </span>
            </div>
            <div className="mt-[204px] h-auto w-full min-w-0 leading-4 text-[#71767b] sm:mt-0 md:mt-[204px] 2xl:mt-[204px]">
                <Button
                    type="button"
                    className={`${password ? 'bg-[#fff] opacity-100' : 'pointer-events-none bg-[#eff3f4] opacity-50'} mt-6 min-h-[52px] w-full transition-opacity duration-300 ease-in-out outline-none`}
                >
                    <span className="text-[17px] text-black">Log in</span>
                </Button>
            </div>
        </form>
    );
};

export default SignInPasswordInput;
