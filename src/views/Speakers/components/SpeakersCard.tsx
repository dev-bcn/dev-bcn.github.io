import React, { FC, Suspense } from "react";
import {
  StyledImageAnimation,
  StyledSpeakerCard,
  StyledSpeakerImage,
  StyledSpeakerImageContainer,
  StyledSpeakerText,
  StyledSpeakerTitle,
} from "./SpeakerCard.Style";
import { Link } from "react-router-dom";
import { ROUTE_SPEAKER_DETAIL_PARAMETERIZED } from "../../../constants/routes";
import { ISpeaker } from "../Speaker.types";
import Loading from "../../../assets/images/logo.png";

type SpeakerCardProps = {
  speaker: ISpeaker;
  year: string | undefined;
};

export const SpeakerCard: FC<React.PropsWithChildren<SpeakerCardProps>> = ({
  speaker,
  year,
}) => {
  return (
    <StyledSpeakerCard>
      <Link
        to={`${ROUTE_SPEAKER_DETAIL_PARAMETERIZED.replace(":year", year as string)}/${speaker.id}`}
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
