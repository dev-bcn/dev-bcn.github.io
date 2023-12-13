import Countdown from "react-countdown";
import { FC, useState } from "react";
import LessThanIcon from "../../../../assets/images/MoreThanBlueWhiteIcon.svg";
import SectionWrapper from "../../../../components/SectionWrapper/SectionWrapper";
import {
  BIG_BREAKPOINT,
  BIGGER_BREAKPOINT,
  LARGE_BREAKPOINT,
} from "../../../../constants/BreakPoints";
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
import InfoButtons from "../InfoButtons/InfoButtons";
import { formatDateRange } from "./DateUtil";
import { useEventEdition } from "../../UseEventEdition";
import { Edition } from "../../HomeWrapper";
import { Link } from "react-router-dom";
import data from "../../../../data/2023.json";

const StyledDevBcnLogo = styled.img`
  margin: 20px;
  height: 20em;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${BIGGER_BREAKPOINT}px) {
    height: 15rem;
  }
  @media (max-width: ${BIG_BREAKPOINT}px) {
    height: 8rem;
  }
`;
const StyledKcdLogo = styled.img`
  margin-top: 4em;
  margin-left: 2em;
  height: 13rem;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${BIGGER_BREAKPOINT}px) {
    height: 9.5rem;
    margin: 0;
  }
  @media (max-width: ${BIG_BREAKPOINT}px) {
    margin-top: 0;
    margin-left: 2.5em;
    margin-right: 2.5em;
    padding: 1em;
    height: 6em;
  }
`;
const StyledPlusSign = styled.span`
   {
    color: white;
    font-size: 5em;
    display: block;
    padding-top: 1.5em;
    text-shadow: 3px 3px #000;
    transition: height 0.2s ease-in-out;
    @media (max-width: ${BIGGER_BREAKPOINT}px) {
      margin: 0;
      padding: 0;
      font-size: 3em;
    }
    @media (max-width: ${BIG_BREAKPOINT}px) {
      font-size: 1.5rem;
      padding: 0;
      margin: 0;
    }
  }
`;

const StyledLogoDiv = styled.div`
   {
    padding-top: 4rem;
    padding-bottom: 2rem;
    display: flex;

    @media (max-width: ${BIGGER_BREAKPOINT}px) {
      flex-direction: column;
    }

    @media (max-width: ${BIG_BREAKPOINT}px) {
      flex-direction: column;
    }
  }
`;
const Home: FC = () => {
  const { width } = useWindowSize();
  const [edition, setEdition] = useState<Edition>();

  useEventEdition(setEdition);

  return (
    <StyledHomaImage>
      <SectionWrapper color="transparent">
        <StyleHomeContainer>
          <StyledLogoDiv>
            <StyledDevBcnLogo src={logo} alt="DevBcn logo" />
            <StyledPlusSign>+</StyledPlusSign>
            <StyledKcdLogo src="images/KCD-logo-white.png" alt="KCD Days" />
          </StyledLogoDiv>
          <StyledTitleContainer>
            <StyledTitle>
              The Barcelona Developers Conference {edition?.edition}
            </StyledTitle>
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
            <StyledSubtitle>
              <small>
                Past events: <Link to="/2023">2023 edition</Link>
              </small>
            </StyledSubtitle>
          </StyledTitleContainer>
          <StyledTitleContainer color={Color.LIGHT_BLUE}>
            <StyledSubtitle color={Color.DARK_BLUE}>
              {edition?.startDay &&
                edition.endDay &&
                formatDateRange(
                  new Date(edition.startDay),
                  new Date(edition?.endDay)
                )}
            </StyledSubtitle>
            <StyledSubtitle color={Color.DARK_BLUE}>
              La Farga, Hospitalet, Barcelona
            </StyledSubtitle>
          </StyledTitleContainer>
          <StyledTitleContainer color={Color.DARK_BLUE}>
            <StyledSubtitle>
              {edition?.trackNumber} tracks with the following topics: <br />
              {edition?.tracks}
            </StyledSubtitle>
          </StyledTitleContainer>
          {data.showCountdown && (
            <Countdown date={edition?.startDay} renderer={TimeCountDown} />
          )}
          {edition?.actionButtons && <ActionButtons />}
          {edition?.showInfoButtons && <InfoButtons />}

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
