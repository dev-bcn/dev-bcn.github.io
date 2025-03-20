import React, { FC, useCallback } from "react";
import data from "../../../../data/2023.json";
import Button from "../../../../components/UI/Button";
import styled from "styled-components";
import { BIG_BREAKPOINT } from "../../../../constants/BreakPoints";
import { gaEventTracker } from "../../../../components/analytics/Analytics";
import { useDateInterval } from "../../../../hooks/useDateInterval";

const StyledActionDiv = styled.div`
  display: flex;
  text-align: center;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    flex-direction: column;
    width: 75%;
  }
`;

const ActionButtons: FC<React.PropsWithChildren<unknown>> = () => {
  const { isTicketsDisabled, isSponsorDisabled, isCfpDisabled } =
    useDateInterval(new Date(), data);

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
        link={
          "https://tickets.devbcn.com/event/devbcn-2023" +
          window.location.search
        }
        disabled={isTicketsDisabled}
      />
      <Button
        onClick={trackCFP}
        text="📢 Call For Papers"
        link={data.cfp.link}
        disabled={isCfpDisabled}
      />
      <Button
        onClick={trackSponsorshipInfo}
        text="🤝 Sponsorship"
        link="mailto:sponsors@devbcn.com?subject=devBcn sponsorship"
        disabled={isSponsorDisabled}
      />
    </StyledActionDiv>
  );
};
export default ActionButtons;
