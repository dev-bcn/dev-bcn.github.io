export const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return "th"; // Handles 11th, 12th, 13th
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const formatDateWithOrdinal = (date: Date): string => {
  const day = date.getDate();
  const ordinalSuffix = getOrdinalSuffix(day);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

  // Insert the ordinal suffix
  return formattedDate.replace(day.toString(), `${day}${ordinalSuffix}`);
};
