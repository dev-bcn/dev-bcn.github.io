import { FC } from "react";
import styled from "styled-components";

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
  align-items: center;
  width: 15rem;
  padding: 0 1rem 1rem 1rem;
`;

const StyledSpeakerImage = styled.img`
  width: 10rem;
  height: auto;
`;

export const SpeakerCard: FC<SpeakersCardProps> = ({ speaker }) => {
  return (
    <StyledSpeakerCard>
      <StyledSpeakerImage
        src={require(`../../../assets/images/FaqsImage1.png`)}
      />
      <h5>{speaker.title}</h5>
      <small>{speaker.subtitle}</small>
      <p>{speaker.text}</p>
    </StyledSpeakerCard>
  );
};
