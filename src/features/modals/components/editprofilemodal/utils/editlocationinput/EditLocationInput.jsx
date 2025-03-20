import { useRef, useState, useEffect, memo } from 'react';

const EditLocationInput = memo(({ location, setLocation, currentAccount }) => {
    const inputRef = useRef();
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (currentAccount?.location) {
            setLocation(currentAccount.location);
        }
    }, [currentAccount, setLocation]);

    const handleInput = (e) => {
        const inputValue = e.target.value.slice(0, 50);
        setLocation(inputValue);
    };

    return (
        <label
            htmlFor="location"
            className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 transition-colors duration-200 ease-in-out focus-within:border-[#1d9bf0]"
        >
            <div className="flex h-full justify-between">
                <div
                    className={`absolute text-ellipsis transition-all ease-in-out select-none ${
                        isFocused || location
                            ? 'top-1 transform text-[13px] leading-4'
                            : 'top-[30%] transform text-[17px] leading-6'
                    } ${isFocused ? 'text-[#1d9bf0]' : 'text-[#71767b]'}`}
                >
                    <span>Location</span>
                </div>
            </div>

            <input
                ref={inputRef}
                type="text"
                id="location"
                className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
                value={location || ''}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInput}
            />
        </label>
    );
});

EditLocationInput.displayName = 'EditLocationInput';
export default EditLocationInput;
