import { useState, useRef, useCallback } from 'react';
import Button from 'components/buttons/Button';

const UsernameOrEmailInput = ({
    username,
    setUsername,
    email,
    setEmail,
    handleNextSection,
}) => {
    const inputRef = useRef();
    const [isFocused, setIsFocused] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = useCallback((email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value === '') {
            setIsValidEmail(true);
            setErrorMessage('');
        }

        if (validateEmail(value)) {
            setIsValidEmail(true);
            setErrorMessage('');
        } else {
            setIsValidEmail(true);
            setErrorMessage(
                'Please enter a valid email username or email adress',
            );
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue === '')
            setErrorMessage('Please enter your email or username.');

        if (validateEmail(inputValue)) {
            setEmail(inputValue);
        } else {
            setUsername(inputValue);
        }
    };

    return (
        <form
            action="submit"
            onSubmit={onSubmit}
            className="flex h-full w-full flex-col"
        >
            <label
                htmlFor="name"
                className="relative mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 transition-colors duration-200 ease-in-out focus-within:border-[#1d9bf0]"
            >
                <div className="flex h-full justify-between">
                    <div
                        className={`absolute text-ellipsis transition-all ease-in-out select-none ${
                            isFocused || inputValue
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
                    value={inputValue}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={handleChange}
                    autoComplete="off"
                />
                {!isValidEmail && (
                    <div className="absolute top-14 left-0 min-w-0 flex-1 px-2 pt-1 text-[12px] leading-4 tracking-wide transition-all duration-300 ease-in-out">
                        <span
                            className={`${!isFocused ? 'opacity-0' : isValidEmail ? 'opacity-0' : 'opacity-100'} block text-[#f4212e] transition-opacity duration-300 ease-in-out`}
                        >
                            Your must enter a valid email
                        </span>
                    </div>
                )}
            </label>

            <div className="min-w-0 text-[3px] leading-4 tracking-[0.010em] text-[#71767b]">
                <Button
                    type="button"
                    className={`${inputValue ? 'bg-[#fff] opacity-100' : 'pointer-events-none bg-[#eff3f4] opacity-50'} my-[15px] min-h-[37px] w-full px-20 transition-opacity duration-300 ease-in-out outline-none`}
                    onClick={inputValue ? handleNextSection : null}
                >
                    <span className="text-[15px] text-black">Next</span>
                </Button>
            </div>
        </form>
    );
};

export default UsernameOrEmailInput;
