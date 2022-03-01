import { FC } from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../../constants/BreakPoints";
import { COLOR_PINK, COLOR_WHITE } from "../../../styles/colors";

type SpeakersCardProps = {
  speaker: {
    title: string;
    subtitle: string;
    text: string;
  };
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

const StyledSpeakerImage = styled.img`
  width: 100%;
  height: auto;
`;

const StyledSpeakerTitle = styled.h5`
  color: ${COLOR_WHITE};
`;

const StyledSpeakerSubtitle = styled.h5`
  color: ${COLOR_PINK};
  text-align: left;
`;

const StyledSpeakerText = styled.p`
  color: ${COLOR_WHITE};
  text-align: left;
`;

export const SpeakerCard: FC<SpeakersCardProps> = ({ speaker }) => {
  return (
    <StyledSpeakerCard>
      <StyledSpeakerImage
        src={require(`../../../assets/images/FaqsImage1.png`)}
      />
      <StyledSpeakerTitle>{speaker.title}</StyledSpeakerTitle>
      <StyledSpeakerSubtitle>{speaker.subtitle}</StyledSpeakerSubtitle>
      <StyledSpeakerText>{speaker.text}</StyledSpeakerText>
    </StyledSpeakerCard>
  );
};
