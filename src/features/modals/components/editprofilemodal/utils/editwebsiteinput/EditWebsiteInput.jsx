import { useRef, useState, useEffect, memo } from 'react';

const EditWebsiteInput = memo(({ website, setWebsite, currentAccount }) => {
    const inputRef = useRef();
    const [isFocused, setIsFocused] = useState(false);

    // Initialize the website state with the current account's website
    useEffect(() => {
        if (currentAccount?.website) {
            setWebsite(currentAccount.website);
        }
    }, [currentAccount, setWebsite]);

    const handleInput = (e) => {
        const inputValue = e.target.value.slice(0, 100); // Limit to 100 characters
        setWebsite(inputValue);
    };

    return (
        <label
            htmlFor="website"
            className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 transition-colors duration-200 ease-in-out focus-within:border-[#1d9bf0]"
        >
            <div className="flex h-full justify-between">
                <div
                    className={`absolute text-ellipsis transition-all ease-in-out select-none ${
                        isFocused || website
                            ? 'top-1 transform text-[13px] leading-4' // Moved position
                            : 'top-[30%] transform text-[17px] leading-6' // Original position
                    } ${
                        isFocused // Color is blue when focused
                            ? 'text-[#1d9bf0]'
                            : 'text-[#71767b]' // Color changes back to gray when not focused
                    }`}
                >
                    <span>Website</span>
                </div>
            </div>

            <input
                ref={inputRef}
                type="text"
                id="website"
                className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
                value={website || ''}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInput}
            />
        </label>
    );
});

EditWebsiteInput.displayName = 'EditWebsiteInput';
export default EditWebsiteInput;
