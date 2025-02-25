const currentYear = new Date().getFullYear();

export const YearData = Array.from(
  { length: currentYear - 1920 + 1 },
  (_, index) => 1920 + index,
);
