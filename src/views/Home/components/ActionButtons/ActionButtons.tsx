import { FC } from "react";
import data from "../../../../data/2023.json";
import Button from "./Button";
import styled from "styled-components";
import ReactGa from "react-ga";
import { BIG_BREAKPOINT } from "../../../../constants/BreakPoints";

const StyledActionDiv = styled.div`
  display: flex;

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

  const isBetween = (startDay: Date, endDay: Date): boolean => {
    return startDay < new Date() && endDay > today;
  };
  const analyticsEventsTracker = (category = "action") => {
    return (action = "", label = "") => {
      ReactGa.event({ category, action, label });
    };
  };
  const gaEventTracker = analyticsEventsTracker("links");
  const doNothing = (event: MouseEvent) => {
    event.preventDefault();
  };

  return (
    <StyledActionDiv>
      {isBetween(ticketStartDay, ticketEndDay) && (
        <Button
          onClick={doNothing}
          text="🎟️ Buy Tickets"
          link="#"
          disabled={true}
        />
      )}
      {isBetween(CFPStartDay, CFPEndDay) && (
        <Button onClick={doNothing} text="📢 CFP" disabled={true} link="#" />
      )}
      {isBetween(sponsorshipStartDay, sponsorshipEndDay) && (
        <Button
          onClick={() => gaEventTracker("sponsors")}
          text="🤝 Sponsorship"
          link="mailto:sponsors@devbcn.com?subject=devBcn sponsorship"
        />
      )}
    </StyledActionDiv>
  );
};
export default ActionButtons;
