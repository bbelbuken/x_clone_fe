import { useState, useEffect } from 'react';
import { DayData } from './data/daydata/DayData';
import Months from './months/Months';
import Years from './years/Years';
import Days from './days/Days';

const DateInput = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  // Update days in the selected month
  useEffect(() => {
    const days = DayData(selectedYear, selectedMonth);
    setSelectedDay(days);
  }, [selectedYear, selectedMonth]);

  return (
    <div className="mt-5">
      <div className="mb-2 min-w-0 text-[15px] leading-5 font-bold text-[#e7e9ea]">
        <span>Date of birth</span>
      </div>

      <div className="mb-1 min-w-0 text-[14px] leading-4 tracking-[0.012em] break-words text-[#71767b]">
        <span>
          This will not be shown publicly. Confirm your own age, even if this
          account is for a business, a pet, or something else.
        </span>
      </div>

      <div className="flex">
        <Months
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <Days
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedMonth={selectedMonth}
        />
        <Years selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      </div>
    </div>
  );
};

export default DateInput;
