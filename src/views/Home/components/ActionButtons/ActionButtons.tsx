import {FC} from "react";
import data from "../../../../data/2023.json";
import Button from "./Button";
import styled from "styled-components";

const StyledActionDiv = styled.div`
  display: flex;`

const ActionButtons: FC = () => {
    const ticketStartDay = new Date(data.tickets.startDay);
    const ticketEndDay = new Date(data.tickets.endDay);
    const CFPStartDay = new Date(data.tickets.startDay);
    const CFPEndDay = new Date(data.tickets.endDay);
    const sponsorshipStartDay = new Date(data.tickets.startDay);
    const sponsorshipEndDay = new Date(data.tickets.endDay);
    const today = new Date();
    console.info("Action buttons", ticketStartDay, ticketEndDay);

    const isBetween = (startDay: Date, endDay: Date): boolean => {
        console.info("comparing", startDay, new Date().getDate(), endDay);
        return startDay < new Date() && endDay > today;
    }

    return (
        <StyledActionDiv>
            {isBetween(ticketStartDay, ticketEndDay) && <Button text="🎟️ Buy Tickets" link="https://ticket.com"/>}
            {isBetween(CFPStartDay, CFPEndDay) && <Button text="📢 CFP" link="https://cfp.com"/>}
            {isBetween(sponsorshipStartDay, sponsorshipEndDay) &&
                <Button text="🤝 Sponsorship" link="https://sponsor.com"/>}
        </StyledActionDiv>
    )
}
export default ActionButtons;
