import { useRef, useState, useEffect } from 'react';

const NameInput = () => {
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(true);
  let [count, setCount] = useState(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleCount = (e) => {
    const inputLength = e.target.value.length;
    if (inputLength <= 50) {
      setCount(inputLength);
    }
  };

  const handleInput = (e) => {
    if (e.target.value.length > 50) {
      e.target.value = e.target.value.slice(0, 50); // Truncate the input if it's longer than 50 characters
    }
  };
  return (
    <label
      htmlFor="name"
      className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 focus-within:border-[#1d9bf0]"
    >
      <div className="flex h-full justify-between">
        <div
          className={`absolute text-ellipsis transition-all ease-in-out select-none ${isFocused ? 'top-1 transform text-[13px] leading-4 text-[#1d9bf0]' : 'top-[30%] transform text-[17px] leading-6 text-[#71767b]'}`}
        >
          <span>Name</span>
        </div>

        <div
          className={`absolute top-2 right-0 items-end px-2 text-[13px] text-[#71767b] ${isFocused ? 'inline-block' : 'hidden'}`}
        >
          <span>{count} / 50</span>
        </div>
      </div>

      <input
        ref={inputRef}
        type="text"
        id="name"
        className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleCount}
        onInput={handleInput}
        autoComplete="off"
      />
    </label>
  );
};

export default NameInput;
