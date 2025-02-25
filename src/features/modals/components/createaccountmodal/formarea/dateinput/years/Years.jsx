import { useState } from 'react';
import { YearData } from '../data/yeardata/YearData';
import { DropDownSVG } from 'components/icons/DropDownSVG';

const Years = ({ selectedYear, setSelectedYear }) => {
  const [isFocusedYear, setIsFocusedYear] = useState(false);
  const sortedYeardata = YearData.sort((a, b) => b - a);

  return (
    <div
      className={`${isFocusedYear ? 'border-[#1d9bf0]' : 'border-[#333639]'} relative mt-4 mb-3 flex h-full flex-shrink-0 grow-4 items-center justify-center rounded-[4px] border px-2 py-3 pt-3 pb-2`}
    >
      <label htmlFor="year"> </label>
      <div className="flex h-full justify-between">
        <div
          className={`absolute top-2 transform text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none ${isFocusedYear ? 'text-[#1d9bf0]' : 'text-[#71767b]'}`}
        >
          <span>Year</span>
        </div>
      </div>
      <select
        id="year"
        value={selectedYear}
        className="box-border w-full min-w-0 cursor-pointer appearance-none bg-black pt-3 text-left text-[17px] leading-6 text-[#e7e9ea] outline-none"
        onFocus={() => setIsFocusedYear(true)}
        onBlur={() => setIsFocusedYear(false)}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
        autoComplete="off"
      >
        <option value=""></option>
        {sortedYeardata.map((month, index) => (
          <option key={index}>{month}</option>
        ))}
      </select>
      <DropDownSVG
        className={`pointer-events-none absolute top-4 right-3 h-[22.5px] w-[22.5px] transform cursor-pointer text-[13px] leading-4 text-ellipsis transition-all ease-in-out select-none`}
      />
    </div>
  );
};

export default Years;
