import { useState } from 'react';

const DateInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mt-5">
      <div className="mb-2 min-w-0 text-[15px] leading-5 font-bold text-[#e7e9ea]">
        <span>Date of birth</span>
      </div>

      <div className="mb-4 min-w-0 text-[14px] leading-4 break-words text-[#71767b]">
        <span>
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </span>
      </div>

      <label
        htmlFor="month"
        className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 focus-within:border-[#1d9bf0]"
      >
        <div className="flex h-full justify-between">
          <div
            className={`absolute top-1 transform text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none ${isFocused ? 'text-[#1d9bf0]' : 'text-[#71767b]'}`}
          >
            <span>Month</span>
          </div>
        </div>

        <select
          id="month"
          className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoComplete="off"
        ></select>
      </label>
    </div>
  );
};

export default DateInput;
