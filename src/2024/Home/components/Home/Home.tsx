import Countdown from "react-countdown";
import React, {FC} from "react";
import SectionWrapper from "src/components/SectionWrapper/SectionWrapper";
import {BIGGER_BREAKPOINT} from "src/constants/BreakPoints";
import TimeCountDown from "./components/TimeCountdown";
import {useWindowSize} from "react-use";
import {Color} from "src/styles/colors";
import {formatDateRange} from "./DateUtil";
import {Link} from "react-router-dom";
import {edition} from "src/data/2023";
import ActionButtons
  from "src/2023/Home/components/ActionButtons/ActionButtons";
import InfoButtons from "src/2023/Home/components/InfoButtons/InfoButtons";
import {
  StyledBlueSlash,
  StyledBottomSlash,
  StyledDevBcnLogo,
  StyledGreenSlash,
  StyledHomeImage,
  StyledKcdLogo,
  StyledLessThan,
  StyledLogoDiv,
  StyledPlusSign,
  StyledSubtitle,
  StyledTitle,
  StyledTitleContainer,
  StyledTopSlash,
  StyleHomeContainer
} from "../../../../views/Home/components/Home/Style.Home";

const Home: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();

  return (
    <StyledHomeImage>
      <SectionWrapper color="transparent">
        <StyleHomeContainer>
          <StyledLogoDiv>
            <StyledDevBcnLogo src="images/logo.png" alt="DevBcn logo" />
            <StyledPlusSign>+</StyledPlusSign>
            <StyledKcdLogo
              src="images/KCD-logo-white.png"
              alt="KCD Barcelona"
            />
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
                Past events: <Link to="/2023">2023 edition</Link>,{" "}
                <Link to="/2024">2024 edition</Link>
              </small>
            </StyledSubtitle>
          </StyledTitleContainer>
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
          <StyledTitleContainer color={Color.DARK_BLUE}>
            <StyledSubtitle>
              {edition?.trackNumber} tracks with the following topics: <br />
              {edition?.tracks}
            </StyledSubtitle>
          </StyledTitleContainer>
          {edition.showCountdown && (
            <Countdown date={edition?.startDay} renderer={TimeCountDown} />
          )}
          {edition?.actionButtons && <ActionButtons />}
          {edition?.showInfoButtons && <InfoButtons />}

          {width > BIGGER_BREAKPOINT && (
              <StyledLessThan alt="Icon" src="images/LessThanBlueIcon.svg"/>
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
