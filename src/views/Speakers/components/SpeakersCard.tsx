import { FC } from "react";
import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../../constants/BreakPoints";
import { Color } from "../../../styles/colors";
import { ISpeaker } from "../Speakers";

type SpeakersCardProps = {
  speaker: ISpeaker;
};

const StyledSpeakerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10rem;
  padding: 0 1rem 1rem 1rem;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    width: 12rem;
  }
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 15rem;
  }
`;

const StyledSpeakerImageContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const StyledSpeakerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const StyledImageAnimation = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.25s linear;
  background-color: rgba(239, 71, 111, 0.5);

  &:hover {
    opacity: 1;
  }
`;

const StyledSpeakerTitle = styled.h5`
  color: ${Color.WHITE};
`;

const StyledSpeakerText = styled.p`
  color: ${Color.WHITE};
  text-align: left;
`;

export const SpeakerCard: FC<SpeakersCardProps> = ({ speaker }) => {
  return (
    <StyledSpeakerCard>
      <StyledSpeakerImageContainer>
        <StyledSpeakerImage src={speaker.speakerImage} />
        <StyledImageAnimation />
      </StyledSpeakerImageContainer>
      <StyledSpeakerTitle>{speaker.title}</StyledSpeakerTitle>
      <StyledSpeakerText>{speaker.text}</StyledSpeakerText>
    </StyledSpeakerCard>
  );
};
