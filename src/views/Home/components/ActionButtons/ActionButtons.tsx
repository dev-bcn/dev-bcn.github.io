import { useCallback } from "react";
import { styled } from "styled-components";

import { gaEventTracker } from "../../../../components/analytics/Analytics";
import { formatDateWithOrdinal } from "../../../../components/date/dateUtils";
import Button from "../../../../components/UI/Button";
import { BIG_BREAKPOINT } from "../../../../constants/BreakPoints";
import data from "../../../../data/2025.json";
import { useUrlBuilder } from "../../../../services/urlBuilder";

import type { FC } from "react";

const StyledActionDiv = styled.div`
  display: flex;
  text-align: center;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    flex-direction: column;
    width: 75%;
  }
`;

interface ActionButtonsProps {
  isTicketsDisabled: boolean;
  isCfpDisabled: boolean;
  isSponsorDisabled: boolean;
  ticketsStartDay: string;
  cfpStartDay: string;
  cfpLink: string;
  edition: string;
}

const ActionButtons: FC<React.PropsWithChildren<ActionButtonsProps>> = ({
  isTicketsDisabled,
  isCfpDisabled,
  isSponsorDisabled,
  ticketsStartDay,
  cfpStartDay,
  cfpLink,
  edition,
}) => {
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
        subtext={
          ticketsStartDay
            ? formatDateWithOrdinal(new Date(ticketsStartDay))
            : "Coming soon"
        }
        link={useUrlBuilder(
          "https://tickets.devbcn.com/event/devbcn-" + edition,
        )}
        isDisabled={isTicketsDisabled}
      />
      <Button
        onClick={trackCFP}
        text="📢 Become a Speaker"
        subtext={
          cfpStartDay
            ? formatDateWithOrdinal(new Date(cfpStartDay))
            : "Coming soon"
        }
        link={cfpLink}
        isDisabled={isCfpDisabled}
        isVisible={true}
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
