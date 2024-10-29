import Countdown from "react-countdown";
import React, {FC} from "react";
import SectionWrapper from "src/components/SectionWrapper/SectionWrapper";
import {edition} from "src/data/2023";
import {BIG_BREAKPOINT, LARGE_BREAKPOINT,} from "src/constants/BreakPoints";
import TimeCountDown from "./components/TimeCountdown";
import {useWindowSize} from "react-use";
import {
  StyledBlueSlash,
  StyledBottomSlash,
  StyledGreenSlash,
  StyledHomaImage,
  StyledLessThan,
  StyledSubtitle,
  StyledTitle,
  StyledTitleContainer,
  StyledTopSlash,
  StyleHomeContainer,
} from "./Style.Home";
import ActionButtons from "../ActionButtons/ActionButtons";
import styled from "styled-components";
import {Color} from "src/styles/colors";
import InfoButtons from "../InfoButtons/InfoButtons";
import MultimediaInfoButtons
  from "../MultimediaInfoButtons/MultimediaInfoButtons";

const StyledLogo = styled.img`
  margin: 20px;
  width: 600px;
  @media (max-width: ${BIG_BREAKPOINT}px) {
    width: 80%;
  }
`;
const Home: FC<React.PropsWithChildren> = () => {
  const { width } = useWindowSize();
  const startDay = edition.startDay;

  return (
    <StyledHomaImage>
      <SectionWrapper color="transparent">
        <StyleHomeContainer>
          <StyledLogo src="images/logo.svg" alt="DevBcn logo"/>
          <StyledTitleContainer>
            <StyledTitle>The Barcelona Developers Conference 2023</StyledTitle>
            <StyledSubtitle>
              Former{" "}
              <a
                href="https://www.jbcnconf.com/2022/"
                target="_blank"
                rel="noreferrer"
              >
                JBCNConf
              </a>{" "}
            </StyledSubtitle>
            <StyledSubtitle>
              Multidisciplinary conference made for Developers and by
              Developers, to learn and share on the different modern software
              technologies used across the companies
            </StyledSubtitle>
          </StyledTitleContainer>
          <StyledTitleContainer color={Color.LIGHT_BLUE}>
            <StyledSubtitle color={Color.DARK_BLUE}>
              July 3rd-5th, 2023
            </StyledSubtitle>
            <StyledSubtitle color={Color.DARK_BLUE}>
              La Farga, Hospitalet, Barcelona
            </StyledSubtitle>
          </StyledTitleContainer>
          <StyledTitleContainer color={Color.DARK_BLUE}>
            <StyledSubtitle>
              7 tracks with the following topics: <br />
              {edition.tracks}
            </StyledSubtitle>
          </StyledTitleContainer>
          {edition.showCountdown && (
            <Countdown date={startDay} renderer={TimeCountDown} />
          )}
          {edition.actionButtons && <ActionButtons/>}
          {edition.showInfoButtons && <InfoButtons/>}
          <h2 style={{ color: Color.LIGHT_BLUE, textShadow: "1px 1px #000" }}>
            DevBcn 2023 edition resources
          </h2>
          <MultimediaInfoButtons />
          {width > LARGE_BREAKPOINT &&
              <StyledLessThan src="images/LessThanBlueIcon.svg"/>}
          <StyledTopSlash
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
          >
            <StyledGreenSlash>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
            </StyledGreenSlash>
          </StyledTopSlash>
          <StyledBottomSlash
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 6 }}
          >
            <StyledBlueSlash>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
            </StyledBlueSlash>
          </StyledBottomSlash>
        </StyleHomeContainer>
      </SectionWrapper>
    </StyledHomaImage>
  );
};

export default Home;
