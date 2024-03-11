import { FC, Suspense } from "react";
import {
  StyledImageAnimation,
  StyledSpeakerCard,
  StyledSpeakerImage,
  StyledSpeakerImageContainer,
  StyledSpeakerText,
  StyledSpeakerTitle,
} from "./SpeakerCard.Style";
import { Link } from "react-router-dom";
import { ROUTE_SPEAKER_DETAIL } from "../../../constants/routes";
import { ISpeaker } from "../Speaker.types";
import Loading from "../../../assets/images/logo.png";

type SpeakerCardProps = {
  speaker: ISpeaker;
};

export const SpeakerCard: FC<React.PropsWithChildren<SpeakerCardProps>> = ({
  speaker,
}) => {
  return (
    <StyledSpeakerCard>
      <Link
        to={`${ROUTE_SPEAKER_DETAIL}/${speaker.id}`}
        style={{ textDecoration: "none" }}
      >
        <StyledSpeakerImageContainer>
          <Suspense fallback={Loading}>
            <StyledSpeakerImage src={speaker.speakerImage} />
          </Suspense>
          <StyledImageAnimation />
        </StyledSpeakerImageContainer>
        <StyledSpeakerTitle>{speaker.fullName}</StyledSpeakerTitle>
        <StyledSpeakerText>{speaker.tagLine}</StyledSpeakerText>
      </Link>
    </StyledSpeakerCard>
  );
};
