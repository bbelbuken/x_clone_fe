import { useEffect } from 'react';
import { DayData } from './data/daydata/DayData';
import Months from './months/Months';
import Years from './years/Years';
import Days from './days/Days';

const DateInput = ({ month, setMonth, day, setDay, year, setYear }) => {
    useEffect(() => {
        // Only reset the day if it's invalid for the selected month/year
        const daysInMonth = DayData(year, month);
        if (day > daysInMonth) {
            setDay(''); // Reset day if current selection is invalid
        }
    }, [year, month, day, setDay]);

    return (
        <div className="mt-5">
            <div className="mb-2 min-w-0 text-[15px] leading-5 font-bold text-[#e7e9ea]">
                <span>Date of birth</span>
            </div>

            <div className="mb-1 min-w-0 text-[14px] leading-4 tracking-[0.012em] break-words text-[#71767b]">
                <span>
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                </span>
            </div>

            <div className="flex">
                <Months month={month} setMonth={setMonth} />
                <Days
                    day={day}
                    setDay={setDay}
                    maxDays={DayData(year, month)}
                />
                <Years year={year} setYear={setYear} />
            </div>
        </div>
    );
};

export default DateInput;
