import { FC } from "react";
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

type SpeakersCardProps = {
  speaker: ISpeaker;
};

export const SpeakerCard: FC<SpeakersCardProps> = ({ speaker }) => {
  return (
    <StyledSpeakerCard>
      <Link to={`${ROUTE_SPEAKER_DETAIL}/${speaker.id}`}>
        <StyledSpeakerImageContainer>
          <StyledSpeakerImage src={speaker.speakerImage} />
          <StyledImageAnimation />
        </StyledSpeakerImageContainer>
        <StyledSpeakerTitle>{speaker.fullName}</StyledSpeakerTitle>
        <StyledSpeakerText>{speaker.tagLine}</StyledSpeakerText>
      </Link>
    </StyledSpeakerCard>
  );
};
