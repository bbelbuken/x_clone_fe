import { useRef, useState } from 'react';
import { DiceSVG } from 'components/icons/DiceSVG';

const EmailInput = ({ email, setEmail }) => {
    const inputRefEmail = useRef();
    const [isFocused, setIsFocused] = useState(false);
    const [diceClick, setDiceClick] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleDiceClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDiceClick(true);
        setIsFocused(true);
        setTimeout(() => {
            setDiceClick(false);
        }, 100);
    };

    const handleGenerateEmail = () => {
        //random letters
        let randomLetters = '';
        const randomCount = Math.floor(Math.random() * 5) + 5;

        for (let i = 0; i < randomCount; i++) {
            const randomLetter = String.fromCharCode(
                97 + Math.floor(Math.random() * 26),
            );
            randomLetters += randomLetter;
        }
        // random number
        const randomNumber = Math.floor(Math.random() * 10000);

        // random domain
        const domains = ['hotmail', 'outlook', 'gmail', 'yahoo'];
        const randomIndex = Math.floor(Math.random() * domains.length);
        const randomDomain = domains[randomIndex];

        // random email
        const newGeneratedEmail = `${randomLetters}${randomNumber}@${randomDomain}.com`;
        setEmail(newGeneratedEmail);
        setIsValidEmail(true);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValidEmail(validateEmail(newEmail)); // Validate email on change
    };

    return (
        <label
            htmlFor="email"
            className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 transition-colors duration-200 ease-in-out focus-within:border-[#1d9bf0]"
        >
            <div className="flex h-full justify-between">
                <div
                    className={`absolute text-ellipsis transition-all ease-in-out select-none ${
                        isFocused || email
                            ? 'top-1 transform text-[13px] leading-4' // Moved position
                            : 'top-[30%] transform text-[17px] leading-6' // Original position
                    } ${
                        isFocused // Color is blue when focused
                            ? 'text-[#1d9bf0]'
                            : 'text-[#71767b]' // Color changes back to gray when not focused
                    }`}
                >
                    <span>Email</span>
                </div>

                <DiceSVG
                    className={`absolute top-5 right-3 z-50 cursor-pointer transition-all ${
                        isFocused // Color is blue when focused
                            ? 'text-[#1d9bf0]'
                            : 'text-[#71767b] opacity-0' // Color changes back to gray when not focused
                    } ${diceClick ? 'dice-clicked' : ''}`}
                    onMouseDown={handleDiceClick}
                    onClick={handleGenerateEmail}
                />
            </div>

            <input
                ref={inputRefEmail}
                type="email"
                id="email"
                value={email}
                className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleEmailChange}
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
    );
};

export default EmailInput;
