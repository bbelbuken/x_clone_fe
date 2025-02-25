import { useState, useEffect } from 'react';
import { DayData } from './data/daydata/DayData';
import Months from './months/Months';
import Years from './years/Years';
import Days from './days/Days';

const DateInput = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(1); // Default to January
  const [daysInMonth, setDaysInMonth] = useState(31); // Default for January

  // Update days in the selected month
  useEffect(() => {
    const days = DayData(selectedYear, selectedMonth);
    setDaysInMonth(days);
  }, [selectedYear, selectedMonth]);

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

      <div>
        <Months
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <Days daysInMonth={daysInMonth} />
        <Years selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      </div>
    </div>
  );
};

export default DateInput;
