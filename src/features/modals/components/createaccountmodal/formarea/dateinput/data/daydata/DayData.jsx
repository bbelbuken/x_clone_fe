import { getDaysInMonth } from 'date-fns';

export const DayData = (year, month) => {
  return getDaysInMonth(new Date(year, month - 1)); // month is 0-indexed
};
