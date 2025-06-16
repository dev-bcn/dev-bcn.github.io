import { isWithinInterval } from "date-fns";

type DateInterval = {
  cfp: {
    startDay: string;
    endDay: string;
  };
  endDay: string;
  sponsors: {
    startDate: string;
    endDate: string;
  };
  startDay: string;
  tickets: {
    startDay: string;
    endDay: string;
  };
};

export const useDateInterval = (today: Date, edition: DateInterval) => {
  const ticketStartDay = new Date(edition.tickets.startDay);
  const ticketEndDay = new Date(edition.tickets.endDay);
  const CFPStartDay = new Date(edition.cfp.startDay);
  const CFPEndDay = new Date(edition.cfp.endDay);
  const sponsorStartDay = new Date(edition.sponsors.startDate);
  const sponsorEndDay = new Date(edition.sponsors.endDate);
  const conferenceStartDay = new Date(edition.startDay);
  const conferenceEndDay = new Date(edition.endDay);

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
    isConferenceActive: isWithinInterval(today, {
      start: conferenceStartDay,
      end: conferenceEndDay,
    }),
  };
};
