import { FC, useCallback } from "react";
import data from "../../../../data/2024.json";
import Button from "../../../../components/UI/Button";
import styled from "styled-components";
import { BIG_BREAKPOINT } from "../../../../constants/BreakPoints";
import { gaEventTracker } from "../../../../components/analytics/Analytics";

const StyledActionDiv = styled.div`
  display: flex;
  text-align: center;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    flex-direction: column;
    width: 75%;
  }
`;

const ActionButtons: FC = () => {
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
        link="https://tickets.devbcn.com/event/devbcn-2024"
        disabled={!isBetween(ticketStartDay, ticketEndDay)}
      />
      <Button
        onClick={trackCFP}
        text="📢 Call For Papers"
        disabled={!isBetween(CFPStartDay, CFPEndDay)}
        link="https://sessionize.com/devbcn24/"
      />
      {isBetween(sponsorshipStartDay, sponsorshipEndDay) && (
        <Button
          onClick={trackSponsorshipInfo}
          text="🤝 Sponsorship"
          link="mailto:sponsors@devbcn.com?subject=devBcn sponsorship"
        />
      )}
    </StyledActionDiv>
  );
};
export default ActionButtons;
