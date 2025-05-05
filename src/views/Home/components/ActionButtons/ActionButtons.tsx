import { FC, useCallback } from "react";
import data from "../../../../data/2025.json";
import Button from "../../../../components/UI/Button";
import styled from "styled-components";
import { BIG_BREAKPOINT } from "../../../../constants/BreakPoints";
import { gaEventTracker } from "../../../../components/analytics/Analytics";
import { useDateInterval } from "../../../../hooks/useDateInterval";
import { useUrlBuilder } from "../../../../services/urlBuilder";

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
        subtext="February 1st, 2025"
        link={useUrlBuilder("https://tickets.devbcn.com/event/devbcn-2025")}
        isDisabled={isTicketsDisabled}
      />
      <Button
        onClick={trackCFP}
        text="📢 Call For Papers"
        subtext="January 1st, 2025"
        link={data.cfp.link}
        isDisabled={isCfpDisabled}
        isVisible={false}
      />
      <Button
        onClick={trackSponsorshipInfo}
        text="🤝 Sponsorship"
        target="_self"
        link="/sponsorship"
        isDisabled={isSponsorDisabled}
      />
    </StyledActionDiv>
  );
};
export default ActionButtons;
