import { useRef, useState } from 'react';

const EmailInput = ({ email, setEmail }) => {
  const inputRefEmail = useRef();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <label
      htmlFor="email"
      className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 focus-within:border-[#1d9bf0]"
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
      </div>

      <input
        ref={inputRefEmail}
        type="email"
        id="email"
        value={email}
        className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
      />
    </label>
  );
};

export default EmailInput;
