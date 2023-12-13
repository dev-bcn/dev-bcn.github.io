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

const MultimediaInfoButtons: FC = () => {
  const trackAttendee = useCallback(() => {
    gaEventTracker("flickr", "flickr");
  }, []);

  const trackSpeaker = useCallback(() => {
    gaEventTracker("youtube", "youtube");
  }, []);

  return (
    <StyledActionDiv>
      <Button
        onClick={trackAttendee}
        target="_blank"
        text="Flickr"
        link="https://www.flickr.com/photos/devbcn/albums"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Flickr.svg"
          alt="flickr"
          height={32}
          width={32}
          style={{ marginRight: "5px" }}
        />
      </Button>

      <Button
        onClick={trackSpeaker}
        target="_blank"
        text="Youtube"
        link="https://www.youtube.com/watch?v=Pv4kEMRE-kg&list=PLzJFNZtyAbyzmAAKzx1COeIBEGFgPA_og"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/159px-YouTube_full-color_icon_%282017%29.svg.png"
          alt="Youtube"
          height={32}
          width={48}
          style={{ marginRight: "5px" }}
        />
      </Button>
    </StyledActionDiv>
  );
};
export default MultimediaInfoButtons;
