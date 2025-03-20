import { useEffect } from 'react';
import { DayData } from 'features/modals/components/createaccountmodal/formarea/inputs/dateinput/data/daydata/DayData';
import EditDays from './utils/editdays/EditDays';
import EditYears from './utils/edityears/EditYears';
import EditMonths from './utils/editmonths/EditMonths';

const EditDateInput = ({
    month,
    setMonth,
    day,
    setDay,
    year,
    setYear,
    currentAccount,
}) => {
    useEffect(() => {
        if (currentAccount?.dateOfBirth) {
            const [parsedMonth, parsedDay, parsedYear] =
                currentAccount.dateOfBirth.split('-');
            setMonth(Number(parsedMonth)); // Convert to number
            setDay(Number(parsedDay)); // Convert to number
            setYear(Number(parsedYear)); // Convert to number
        }
    }, [currentAccount, setMonth, setDay, setYear]);

    useEffect(() => {
        // Only reset the day if it's invalid for the selected month/year
        const daysInMonth = DayData(year, month);
        if (day > daysInMonth) {
            setDay(''); // Reset day if current selection is invalid
        }
    }, [year, month, day, setDay]);

    return (
        <div>
            <div className="flex">
                <EditMonths month={month} setMonth={setMonth} />
                <EditDays
                    day={day}
                    setDay={setDay}
                    maxDays={DayData(year, month)}
                />
                <EditYears year={year} setYear={setYear} />
            </div>
        </div>
    );
};

export default EditDateInput;
