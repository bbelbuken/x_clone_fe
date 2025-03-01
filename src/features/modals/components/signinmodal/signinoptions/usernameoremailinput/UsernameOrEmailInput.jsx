import { useState, useRef, useCallback } from 'react';
import Button from 'components/buttons/Button';

const UsernameOrEmailInput = ({ setUsername, setEmail, handleNextSection }) => {
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
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // Reset error message
        setErrorMessage('');

        // Check if input is empty
        if (inputValue === '') {
            setErrorMessage('Please enter your email or username.');
            setIsValidEmail(false); // Reset isValidEmail state
            return; // Stop further execution
        }

        // Validate email
        if (validateEmail(inputValue)) {
            // Input is a valid email
            setEmail(inputValue);
            setIsValidEmail(true); // Set isValidEmail to true
            setErrorMessage(''); // Clear any previous error message
            console.log('Sending email to backend:', inputValue);
            handleNextSection(); // Proceed to the next section
        } else if (
            (!validateEmail(inputValue) && inputValue.includes('@')) ||
            inputValue.includes('.')
        ) {
            setIsValidEmail(false); // Set isValidEmail to false
            setErrorMessage('You have entered a wrong email address');
            return;
        } else if (inputValue.length < 5) {
            // Username is too short
            setErrorMessage('Username must be at least 5 characters long.');
        } else {
            // Input is a valid username
            setUsername(inputValue);
            setErrorMessage(''); // Clear any previous error message
            console.log('Sending username to backend:', inputValue);
            handleNextSection(); // Proceed to the next section
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
            </label>

            <div className="min-w-0 text-[3px] leading-4 tracking-[0.010em] text-[#71767b]">
                <Button
                    type="submit" // Use type="submit" to trigger the form's onSubmit
                    className="my-[15px] min-h-[37px] w-full bg-[#fff] px-20 transition-opacity duration-300 ease-in-out outline-none"
                >
                    <span className="text-[15px] text-black">Next</span>
                </Button>
            </div>

            {errorMessage && (
                <div className="absolute -bottom-40 min-w-0 flex-1 rounded-sm bg-[#1d9bf0] px-4 py-4 text-[14px] leading-4 tracking-wide transition-all duration-300 ease-in-out">
                    <span>{errorMessage}.</span>
                </div>
            )}
        </form>
    );
};

export default UsernameOrEmailInput;
