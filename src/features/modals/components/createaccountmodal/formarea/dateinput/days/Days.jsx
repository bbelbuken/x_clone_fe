import { useState } from 'react';

const Days = ({ daysInMonth }) => {
  const [isFocusedDay, setIsFocusedDay] = useState(false);

  return (
    <label
      htmlFor="days"
      className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 focus-within:border-[#1d9bf0]"
    >
      <div className="flex h-full justify-between">
        <div
          className={`absolute top-1 transform text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none ${isFocusedDay ? 'text-[#1d9bf0]' : 'text-[#71767b]'}`}
        >
          <span>Day</span>
        </div>
      </div>

      <select
        id="days"
        className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
        onFocus={() => setIsFocusedDay(true)}
        onBlur={() => setIsFocusedDay(false)}
      >
        {Array.from({ length: daysInMonth }, (_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Days;
