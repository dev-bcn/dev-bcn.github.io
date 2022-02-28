import { FC } from "react";
import TitleSection from "../../components/SectionTitle/TitleSection";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { COLOR_BLUE, COLOR_GREEN, COLOR_PINK, COLOR_WHITE, COLOR_YELLOW } from "../../styles/colors";
import styled from "styled-components";
import LessThanBlueIcon from "../../assets/images/LessThanBlueIcon.svg";
import MoreThanBlueIcon from "../../assets/images/MoreThanBlueIcon.svg";
import { useWindowSize } from "react-use";
import {
  BIG_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../constants/BreakPoints";
import { speakersData } from "./SpeakersData";
import { SpeakerCard } from "./components/SpeakersCard";
import { motion } from "framer-motion";

const StyledSpeakersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 0 5rem;
  }
  @media (min-width: ${BIG_BREAKPOINT}px) {
    padding: 0 10rem;
  }
`;

const StyledLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 0;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const StyledMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 0;
  height: 5rem;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    height: 10rem;
  }
`;

const SpeakersCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 3rem;
  justify-content: center;
  z-index: 1;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding-top: 5rem;
  }
`;

const StyledContainerLeftSlash = styled(motion.div)<{
  positionPercentage: string;
}>`
  position: absolute;
  top: ${({ positionPercentage }) => {
    return positionPercentage;
  }};
  left: 0;
  height: 2rem;
  width: 50%;
`;

const StyledContainerRightSlash = styled(motion.div)<{
  positionPercentage: string;
}>`
  position: absolute;
  top: ${({ positionPercentage }) => {
    return positionPercentage;
  }};
  right: 0;
  height: 2rem;
  width: 50%;
`;

const StyledSlash = styled(motion.p)<{ color: string }>`
  font-family: "SpaceGrotesk-Bold";
  color: ${({ color }) => {
    return color;
  }};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;

const Speakers: FC = () => {
  const { width } = useWindowSize();

  return (
    <SectionWrapper color={COLOR_GREEN} marginTop={8}>
      <StyledSpeakersSection>
        <TitleSection
          title="SPEAKERS"
          subtitle="Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP."
          color={COLOR_WHITE}
        />
        {width > MOBILE_BREAKPOINT && (
          <>
            <StyledLessIcon src={LessThanBlueIcon} />
            <StyledMoreIcon src={MoreThanBlueIcon} />
          </>
        )}
        <SpeakersCardsContainer>
          {speakersData.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </SpeakersCardsContainer>
        <StyledContainerRightSlash 
         initial={{ x: '100%' }}
         animate={{ x: 0 }}
         transition={{ duration: 4 }}
         positionPercentage={"20%"}>
          <StyledSlash color={COLOR_YELLOW}>
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
          </StyledSlash>
        </StyledContainerRightSlash>

        <StyledContainerLeftSlash 
         initial={{ x: '-100%' }}
         animate={{ x: 0 }}
         transition={{ duration: 4 }}
         positionPercentage={"40%"}>
          <StyledSlash color={COLOR_PINK}>
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
          </StyledSlash>
          </StyledContainerLeftSlash>
        
          <StyledContainerRightSlash 
         initial={{ x: '100%' }}
         animate={{ x: 0 }}
         transition={{ duration: 4 }}
         positionPercentage={"60%"}>
          <StyledSlash color={COLOR_BLUE}>
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
          </StyledSlash>
        </StyledContainerRightSlash>


        <StyledContainerLeftSlash 
         initial={{ x: '-100%' }}
         animate={{ x: 0 }}
         transition={{ duration: 4 }}
         positionPercentage={"80%"}>
          <StyledSlash color={COLOR_YELLOW}>
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
          </StyledSlash>
        </StyledContainerLeftSlash>
      </StyledSpeakersSection>
    </SectionWrapper>
  );
};

export default Speakers;
