import { format } from "date-fns";

export function formatDateRange(startDate: Date, endDate: Date): string {
  const sameMonthAndYear =
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear();

  if (sameMonthAndYear) {
    return `${format(startDate, "MMMM do")} - ${format(endDate, "do, yyyy")}`;
  } else {
    return `${format(startDate, "MMMM do, yyyy")} - ${format(
      endDate,
      "MMMM do, yyyy",
    )}`;
  }
}
