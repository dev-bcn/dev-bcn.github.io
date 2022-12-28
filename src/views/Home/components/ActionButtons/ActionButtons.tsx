import { FC, useCallback } from "react";
import data from "../../../../data/2023.json";
import Button from "./Button";
import styled from "styled-components";
import ReactGa from "react-ga";
import { BIG_BREAKPOINT } from "../../../../constants/BreakPoints";

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
  const CFPStartDay = new Date(data.tickets.startDay);
  const CFPEndDay = new Date(data.tickets.endDay);
  const sponsorshipStartDay = new Date(data.tickets.startDay);
  const sponsorshipEndDay = new Date(data.tickets.endDay);
  const today = new Date();

  const isBetween = (startDay: Date, endDay: Date): boolean => startDay < new Date() && endDay > today;
  const analyticsEventsTracker = (category = "action") =>
    (action = "", label = "") => {
      ReactGa.event({ category, action, label });
    };
  const gaEventTracker = analyticsEventsTracker("links");

  const trackSponsorshipInfo = useCallback(() => {
    gaEventTracker("sponsorship", "sponsorship");
  }, [gaEventTracker]);

  const trackTickets = useCallback(() => {
    gaEventTracker("ticket", "tickets");
  }, [gaEventTracker]);

  const trackCFP = useCallback(() => {
    gaEventTracker("CFP", "CFP");
  }, [gaEventTracker]);

  return (
    <StyledActionDiv>
      {isBetween(ticketStartDay, ticketEndDay) && (
        <Button
          onClick={trackTickets}
          text="🎟️ Buy Tickets"
          link="https://tickets.devbcn.com/event/devbcn-2023"
        />
      )}
      {isBetween(CFPStartDay, CFPEndDay) && (
        <Button onClick={trackCFP} text="📢 CFP" link="https://sessionize.com/devbcn23/" />
      )}
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
