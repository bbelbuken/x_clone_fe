import { useState } from 'react';
import { YearData } from '../data/yeardata/YearData';

const Years = ({ selectedYear, setSelectedYear }) => {
  const [isFocusedYear, setIsFocusedYear] = useState(false);

  return (
    <label
      htmlFor="year"
      className="relative mt-4 mb-3 flex h-full w-full flex-1 items-center justify-center rounded-[4px] border border-[#333639] px-2 py-3 pt-3 pb-2 focus-within:border-[#1d9bf0]"
    >
      <div className="flex h-full justify-between">
        <div
          className={`absolute top-1 transform text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none ${isFocusedYear ? 'text-[#1d9bf0]' : 'text-[#71767b]'}`}
        >
          <span>Year</span>
        </div>
      </div>

      <select
        id="year"
        value={selectedYear}
        className="box-border w-full min-w-0 appearance-none bg-transparent pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
        onFocus={() => setIsFocusedYear(true)}
        onBlur={() => setIsFocusedYear(false)}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
        autoComplete="off"
      >
        {YearData.map((month, index) => (
          <option key={index}>{month}</option>
        ))}
      </select>
    </label>
  );
};

export default Years;
