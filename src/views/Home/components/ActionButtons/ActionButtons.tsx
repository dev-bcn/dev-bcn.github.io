import {FC, useCallback} from "react";
import data from "../../../../data/2024.json";
import Button from "../../../../components/UI/Button";
import styled from "styled-components";
import {BIG_BREAKPOINT} from "../../../../constants/BreakPoints";
import {gaEventTracker} from "../../../../components/analytics/Analytics";

const StyledActionDiv = styled.div`
  display: flex;
  text-align: center;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    flex-direction: column;
    width: 75%;
  }
`;

const ActionButtons: FC<React.PropsWithChildren<unknown>> = () => {
  const ticketStartDay = new Date(data.tickets.startDay);
  const ticketEndDay = new Date(data.tickets.endDay);
  const CFPStartDay = new Date(data.cfp.startDay);
  const CFPEndDay = new Date(data.cfp.endDay);
  const sponsorshipStartDay = new Date(data.sponsors.startDate);
  const sponsorshipEndDay = new Date(data.sponsors.endDate);
  const today = new Date();

  const isBetween = (startDay: Date, endDay: Date): boolean =>
    startDay < new Date() && endDay > today;

  const trackSponsorshipInfo = useCallback(() => {
    gaEventTracker("sponsorship", "sponsorship");
  }, []);

  const trackTickets = useCallback(() => {
    gaEventTracker("ticket", "tickets");
  }, []);

  const trackCFP = useCallback(() => {
    gaEventTracker("CFP", "CFP");
  }, []);

  return (
    <StyledActionDiv>
      <Button
        onClick={trackTickets}
        text="🎟️ Buy Tickets"
        subtext="February 1st, 2025"
        link="https://tickets.devbcn.com/event/devbcn-2025"
        disabled={!isBetween(ticketStartDay, ticketEndDay)}
      />
        <Button
          onClick={trackCFP}
          text="📢 Call For Papers"
          subtext="January 1st, 2025"
          link={data.cfp.link}
          disabled={!isBetween(CFPStartDay, CFPEndDay)}
        />
        <Button
          onClick={trackSponsorshipInfo}
          text="🤝 Sponsorship"
          link="https://www.devbcn.com/sponsorship"
          disabled={isBetween(sponsorshipStartDay, sponsorshipEndDay)}
        />
    </StyledActionDiv>
  );
};
export default ActionButtons;
