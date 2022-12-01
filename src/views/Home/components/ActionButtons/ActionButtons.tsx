import {FC} from "react";
import data from "../../../../data/2023.json";
import Button from "./Button";
import styled from "styled-components";
import ReactGa from "react-ga";
import {BIG_BREAKPOINT} from "../../../../constants/BreakPoints";

const StyledActionDiv = styled.div`
  display: flex;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    flex-direction: column;
    width: 75%;
  }
`

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
    }
    const analyticsEventsTracker = (category = "action") => {
        return (action = "", label = "") => {
            ReactGa.event({category, action, label});
        };
    }
    const gaEventTracker = analyticsEventsTracker("links");

    return (
        <StyledActionDiv>
            {isBetween(ticketStartDay, ticketEndDay) &&
                <Button onClick={() => gaEventTracker("tickets")} text="🎟️ Buy Tickets" link="https://ticket.com/"/>}
            {isBetween(CFPStartDay, CFPEndDay) &&
                <Button onClick={() => gaEventTracker("cfp")} text="📢 CFP" link="https://cfp.com/"/>}
            {isBetween(sponsorshipStartDay, sponsorshipEndDay) &&
                <Button onClick={() => gaEventTracker("sponsors")} text="🤝 Sponsorship" link="https://sponsor.com/"/>}
        </StyledActionDiv>
    )
}
export default ActionButtons;
