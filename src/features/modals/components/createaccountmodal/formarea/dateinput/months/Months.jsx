import { useState } from 'react';
import { MonthData } from '../data/monthdata/MonthData';

const Months = ({ selectedMonth, setSelectedMonth }) => {
  const [isFocusedMonth, setIsFocusedMonth] = useState(false);

  return (
    <label
      htmlFor="month"
      className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 focus-within:border-[#1d9bf0]"
    >
      <div className="flex h-full justify-between">
        <div
          className={`absolute top-1 transform text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none ${isFocusedMonth ? 'text-[#1d9bf0]' : 'text-[#71767b]'}`}
        >
          <span>Month</span>
        </div>
      </div>

      <select
        id="month"
        value={selectedMonth}
        className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
        onFocus={() => setIsFocusedMonth(true)}
        onBlur={() => setIsFocusedMonth(false)}
        onChange={(e) => setSelectedMonth(Number(e.target.value))}
        autoComplete="off"
      >
        {MonthData.map((month, index) => (
          <option key={index}>{month}</option>
        ))}
      </select>
    </label>
  );
};

export default Months;
