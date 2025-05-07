import Countdown from "react-countdown";
import React, { FC } from "react";
import LessThanIcon from "../../../../assets/images/MoreThanBlueWhiteIcon.svg";
import SectionWrapper from "../../../../components/SectionWrapper/SectionWrapper";
import { BIGGER_BREAKPOINT } from "../../../../constants/BreakPoints";
import TimeCountDown from "./components/TimeCountdown";
import { useWindowSize } from "react-use";
import {
  StyledBlueSlash,
  StyledBottomSlash,
  StyledDevBcnLogo,
  StyledGreenSlash,
  StyledHomeImage,
  StyledLessThan,
  StyledLogoDiv,
  StyledSubtitle,
  StyledTitle,
  StyledTitleContainer,
  StyledTopSlash,
  StyleHomeContainer,
} from "./Style.Home";
import ActionButtons from "../ActionButtons/ActionButtons";
import { Color } from "../../../../styles/colors";
import InfoButtons from "../InfoButtons/InfoButtons";
import { formatDateRange } from "./DateUtil";
import { Link } from "react-router";
import edition from "../../../../data/2025.json";
import CountDownCompleted from "./components/CountDownCompleted";

const Home: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();

  return (
    <StyledHomeImage>
      <SectionWrapper color="transparent">
        <StyleHomeContainer>
          <StyledLogoDiv>
            <StyledDevBcnLogo src="images/logo.png" alt="DevBcn logo" />
          </StyledLogoDiv>
          <StyledTitleContainer>
            <StyledTitle>
              The Barcelona Developers Conference {edition?.edition}
            </StyledTitle>
            <StyledSubtitle>
              {edition?.trackNumber} tracks with the following topics: <br />
              {edition?.tracks}
            </StyledSubtitle>
            <StyledSubtitle>
              <small>
                Past events: <Link to="/2024">2024 edition</Link> |{" "}
                <Link to="/2023">2023 edition</Link>
              </small>
            </StyledSubtitle>
          </StyledTitleContainer>
          <img
            src="/images/devBcn-sponsorship.png"
            alt="DevBcn sponsorship value"
            width="635"
            height="125"
            style={{ aspectRatio: "127:25", maxWidth: "100%" }}
          />
          <StyledTitleContainer color={Color.LIGHT_BLUE}>
            <StyledSubtitle color={Color.DARK_BLUE}>
              {edition?.startDay &&
                edition.endDay &&
                formatDateRange(
                  new Date(edition.startDay),
                  new Date(edition.endDay),
                )}
            </StyledSubtitle>
            <StyledSubtitle color={Color.DARK_BLUE}>
              La Farga, Hospitalet, Barcelona
            </StyledSubtitle>
          </StyledTitleContainer>
          <Countdown
            date={edition?.startDay}
            onComplete={CountDownCompleted}
            renderer={TimeCountDown}
          />
          {edition?.actionButtons && <ActionButtons />}
          {edition?.showInfoButtons && <InfoButtons />}

          {width > BIGGER_BREAKPOINT && (
            <StyledLessThan alt="Icon" src={LessThanIcon} />
          )}
          {width > BIGGER_BREAKPOINT && (
            <StyledTopSlash
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 4 }}
            >
              <StyledGreenSlash>
                / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
                / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
                / /{" "}
              </StyledGreenSlash>
            </StyledTopSlash>
          )}
          <StyledBottomSlash
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 6 }}
          >
            {width > BIGGER_BREAKPOINT && (
              <StyledBlueSlash>
                / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
                / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
                / /{" "}
              </StyledBlueSlash>
            )}
          </StyledBottomSlash>
        </StyleHomeContainer>
      </SectionWrapper>
    </StyledHomeImage>
  );
};

export default Home;
