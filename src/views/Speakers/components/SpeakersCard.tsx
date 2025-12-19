import { Suspense } from "react";
import { Link } from "react-router";

import {
  ROUTE_2023_SPEAKER_DETAIL,
  ROUTE_2024_SPEAKER_DETAIL,
  ROUTE_SPEAKER_DETAIL,
} from "@constants/routes";



import {
  StyledImageAnimation,
  StyledSpeakerCard,
  StyledSpeakerImage,
  StyledSpeakerImageContainer,
  StyledSpeakerText,
  StyledSpeakerTitle,
} from "./SpeakerCard.Style";

import type { ISpeaker } from "@/types/speakers";
import type { FC } from "react";

type SpeakerCardProps = {
  speaker: ISpeaker;
  year: string;
};


// eslint-disable-next-line react-refresh/only-export-components
export const getSpeakerRoute = (year: string): string => {
  if (year === "2023") {
    return ROUTE_2023_SPEAKER_DETAIL;
  }
  if (year === "2024") {
    return ROUTE_2024_SPEAKER_DETAIL;
  }
  return ROUTE_SPEAKER_DETAIL;
};

export const SpeakerCard: FC<React.PropsWithChildren<SpeakerCardProps>> = ({
  speaker,
  year,
}) => {
  return (
    <StyledSpeakerCard>
      <Link
        to={`${getSpeakerRoute(year)}/${speaker.id}`}
        style={{ textDecoration: "none" }}
      >
        <StyledSpeakerImageContainer>
          <Suspense fallback={<img src="/images/logo.png" alt="loading" />}>
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
