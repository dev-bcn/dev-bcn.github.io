import { isWithinInterval } from "date-fns";

type DateInterval = {
  tickets:{
    startDay: string,
    endDay: string,
  },
  cfp:{
    startDay: string,
    endDay: string,
  },
  sponsors:{
    startDate: string,
    endDate: string,
  }
}

export const useDateInterval = (today: Date, edition: DateInterval) => {
  const ticketStartDay = new Date(edition.tickets.startDay);
  const ticketEndDay = new Date(edition.tickets.endDay);
  const CFPStartDay = new Date(edition.cfp.startDay);
  const CFPEndDay = new Date(edition.cfp.endDay);
  const sponsorStartDay = new Date(edition.sponsors.startDate);
  const sponsorEndDay = new Date(edition.sponsors.endDate);

  return {
    isTicketsDisabled: !isWithinInterval(today, {
      start: ticketStartDay,
      end: ticketEndDay,
    }),
    isCfpDisabled: !isWithinInterval(today, {
      start: CFPStartDay,
      end: CFPEndDay,
    }),
    isSponsorDisabled: !isWithinInterval(today, {
      start: sponsorStartDay,
      end: sponsorEndDay,
    }),
  };
};
