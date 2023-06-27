import { FC, useCallback } from "react";
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

const InfoButtons: FC = () => {
  const trackAttendee = useCallback(() => {
    gaEventTracker("attendee-info", "attendee-infos");
  }, []);

  const trackSpeaker = useCallback(() => {
    gaEventTracker("speaker-info", "speaker-info");
  }, []);

  return (
    <StyledActionDiv>
      <Button
        onClick={trackAttendee}
        text="🙋🏻 Attendee information"
        link="https://www.devbcn.com/attendee"
      />

      <Button
        onClick={trackSpeaker}
        text="🎙️ Speaker information"
        link="https://www.devbcn.com/speaker-information"
      />
    </StyledActionDiv>
  );
};
export default InfoButtons;
