import { useState } from 'react';
import { DropDownSVG } from 'components/icons/DropDownSVG';

const Days = ({ selectedDay, setSelectedDay, selectedMonth }) => {
  const [isFocusedDay, setIsFocusedDay] = useState(false);

  return (
    <label
      htmlFor="days"
      className="relative mt-4 mr-3 mb-3 flex h-full flex-shrink-0 grow-3 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 focus-within:border-[#1d9bf0]"
    >
      <div className="flex h-full justify-between">
        <div
          className={`absolute top-2 transform text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none ${isFocusedDay ? 'text-[#1d9bf0]' : 'text-[#71767b]'}`}
        >
          <span>Day</span>
        </div>
      </div>

      <DropDownSVG
        className={`absolute top-4 right-3 h-[22.5px] w-[22.5px] transform text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none`}
      />

      <select
        id="days"
        onChange={(e) => setSelectedDay(Number(e.target.value))}
        className="box-border w-full min-w-0 appearance-none bg-black pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
        onFocus={() => setIsFocusedDay(true)}
        onBlur={() => setIsFocusedDay(false)}
      >
        <option value=""></option>
        {Array.from({ length: selectedDay }, (_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Days;
