import { useState } from 'react';
import { MonthData } from '../data/monthdata/MonthData';
import { DropDownSVG } from 'components/icons/DropDownSVG';

const Months = ({ selectedMonth, setSelectedMonth }) => {
  const [isFocusedMonth, setIsFocusedMonth] = useState(false);

  return (
    <label
      htmlFor="month"
      className="relative mt-4 mr-3 mb-3 flex h-full grow-65 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 focus-within:border-[#1d9bf0]"
    >
      <div className="flex h-full justify-between">
        <div
          className={`absolute top-2 transform text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none ${isFocusedMonth ? 'text-[#1d9bf0]' : 'text-[#71767b]'}`}
        >
          <span>Month</span>
        </div>
      </div>

      <DropDownSVG
        className={`absolute top-4 right-3 h-[22.5px] w-[22.5px] transform text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none`}
      />

      <select
        id="month"
        value={selectedMonth}
        className="box-border w-full min-w-0 appearance-none bg-black pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none focus:outline-none"
        onFocus={() => setIsFocusedMonth(true)}
        onBlur={() => setIsFocusedMonth(false)}
        onChange={(e) => setSelectedMonth(Number(e.target.value))}
        autoComplete="off"
      >
        <option value=""></option>
        {MonthData.map((month, index) => (
          <option key={index} value={index + 1}>
            {month}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Months;
