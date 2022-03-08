import { FC } from "react";
import TitleSection from "../../components/SectionTitle/TitleSection";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import {
  COLOR_BLACK_BLUE,
  COLOR_GREEN,
  COLOR_YELLOW,
} from "../../styles/colors";
import LessThanBlueIcon from "../../assets/images/LessThanBlueIcon.svg";
import MoreThanBlueIcon from "../../assets/images/MoreThanBlueIcon.svg";
import {
  StyledLessIcon,
  StyledMoreIcon,
} from "../Speakers/Speakers";
import {
  BIG_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../constants/BreakPoints";
import { useWindowSize } from "react-use";
import styled from "styled-components";
import { talksData } from "./TalksData";
import { TalkCard } from "./components/TalkCard";
import { StyledWrapperSection } from "../JobOffers/JobOffers";

const StyledSpeakersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  padding-bottom: 20rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 10rem;
  }
`;

const StyledWaveContainer = styled.div`
  background: ${COLOR_GREEN};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    height: 10rem;
  }
`;

export const Talks: FC = () => {
  const { width } = useWindowSize();

  return (
    <>
      <SectionWrapper color={COLOR_GREEN} marginTop={5}>
        <StyledSpeakersSection>
          <TitleSection
            title="SPEAKERS"
            subtitle="Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP."
            color={COLOR_BLACK_BLUE}
          />
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyledLessIcon src={LessThanBlueIcon} />
              <StyledMoreIcon src={MoreThanBlueIcon} />
            </>
          )}
        </StyledSpeakersSection>
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#ffd166" }}
          ></path>
        </svg>
      </StyledWaveContainer>
      <SectionWrapper color={COLOR_YELLOW} marginTop={1}>
        <StyledWrapperSection>
          {talksData.map((talk, index) => (
            <TalkCard talk={talk} index={index} />
          ))}
        </StyledWrapperSection>
      </SectionWrapper>
    </>
  );
};
