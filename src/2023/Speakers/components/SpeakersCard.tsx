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
import { ISpeaker } from "../Speaker.types";
import Loading from "../../../assets/images/logo.png";
import { ROUTE_2023_SPEAKER_DETAIL } from "../../../constants/routes";

type SpeakersCardProps = {
  speaker: ISpeaker;
};

export const SpeakerCard: FC<React.PropsWithChildren<SpeakersCardProps>> = ({ speaker }) => {
  return (
    <StyledSpeakerCard>
      <Link
        to={`${ROUTE_2023_SPEAKER_DETAIL}/${speaker.id}`}
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
