import {FC, useCallback} from "react";
import Button from "src/components/UI/Button";
import styled from "styled-components";
import {BIG_BREAKPOINT} from "src/constants/BreakPoints";
import {gaEventTracker} from "src/components/analytics/Analytics";
import {
    ROUTE_2023_ATTENDEE,
    ROUTE_SPEAKER_INFO_PARAMETERIZED,
} from "src/constants/routes";

const StyledActionDiv = styled.div`
  display: flex;
  text-align: center;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    flex-direction: column;
    width: 75%;
  }
`;

const InfoButtons: FC<React.PropsWithChildren<unknown>> = () => {
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
        target="_self"
        text="🙋🏻 Attendee information"
        link={ROUTE_2023_ATTENDEE}
      />

      <Button
        onClick={trackSpeaker}
        target="_self"
        text="🎙️ Speaker information"
        link={ROUTE_SPEAKER_INFO_PARAMETERIZED}
      />
    </StyledActionDiv>
  );
};
export default InfoButtons;
