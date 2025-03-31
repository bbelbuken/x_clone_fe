import { useRef, useState, useEffect, memo } from 'react';

const EditBioInput = memo(({ bio, setBio, currentAccount }) => {
    const inputRef = useRef();
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (currentAccount?.bio) {
            setBio(currentAccount.bio);
        }
    }, [currentAccount, setBio]);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        setBio(inputValue);
    };

    return (
        <label
            htmlFor="bio"
            className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 transition-colors duration-200 ease-in-out focus-within:border-[#1d9bf0]"
        >
            <div className="flex h-full justify-between">
                <div
                    className={`absolute text-ellipsis transition-all ease-in-out select-none ${
                        isFocused || bio
                            ? 'top-1 transform text-[13px] leading-4'
                            : 'top-[30%] transform text-[17px] leading-6'
                    } ${isFocused ? 'text-[#1d9bf0]' : 'text-[#71767b]'}`}
                >
                    <span>Bio</span>
                </div>
            </div>

            <input
                ref={inputRef}
                type="text"
                id="bio"
                className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
                value={bio || ''}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInput}
            />
        </label>
    );
});

EditBioInput.displayName = 'EditBioInput';
export default EditBioInput;
