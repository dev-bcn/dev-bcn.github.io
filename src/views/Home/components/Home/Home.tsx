import Countdown from "react-countdown";
import { FC } from "react";
import data from "../../../../data/2023.json";
import LessThanIcon from "../../../../assets/images/MoreThanBlueWhiteIcon.svg";
import SectionWrapper from "../../../../components/SectionWrapper/SectionWrapper";
import { LARGE_BREAKPOINT } from "../../../../constants/BreakPoints";
import TimeCountDown from "./components/TimeCountdown";
import { useWindowSize } from "react-use";
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
import logo from "../../../../assets/images/logo.png";
import ActionButtons from "../ActionButtons/ActionButtons";
import styled from "styled-components";
import { Color } from "../../../../styles/colors";

const StyledLogo = styled.img`
  margin: 20px;
  width: 600px;
`;
const Home: FC = () => {
  const { width } = useWindowSize();
  const startDay = data.startDay;

  return (
    <StyledHomaImage>
      <SectionWrapper color="transparent">
        <StyleHomeContainer>
          <StyledLogo src={logo} alt="DevBcn logo" />
          <StyledTitleContainer>
            <StyledTitle>The Developers Conference 2023</StyledTitle>
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
            <StyledSubtitle>{data.tracks}</StyledSubtitle>
          </StyledTitleContainer>
          <Countdown date={startDay} renderer={TimeCountDown} />
          {data.actionButtons && <ActionButtons />}

          {width > LARGE_BREAKPOINT && <StyledLessThan src={LessThanIcon} />}
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
