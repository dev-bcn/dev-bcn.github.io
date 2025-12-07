import Countdown from "react-countdown";
import React, { FC } from "react";
import { useWindowSize } from "react-use";
import { useDateInterval } from "@hooks/useDateInterval";
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
  StyleHomeContainer,
} from "./Style.Home";
import { formatDateRange } from "./DateUtil";
import { Link } from "react-router";
import data from "@data/2024.json";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { Color } from "@styles/colors";

import ActionButtons from "@views/Home/components/ActionButtons/ActionButtons";
import InfoButtons from "@views/Home/components/InfoButtons/InfoButtons";
import { BIGGER_BREAKPOINT } from "@constants/BreakPoints";
import CountDownCompleted from "@views/Home/components/Home/components/CountDownCompleted";
import TimeCountDown from "@views/Home/components/Home/components/TimeCountdown";

const Home: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  const { isTicketsDisabled, isSponsorDisabled, isCfpDisabled } =
    useDateInterval(new Date(), data);

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
              The Barcelona Developers Conference {data?.edition}
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
              {data?.startDay &&
                data.endDay &&
                formatDateRange(new Date(data.startDay), new Date(data.endDay))}
            </StyledSubtitle>
            <StyledSubtitle color={Color.DARK_BLUE}>
              La Farga, Hospitalet, Barcelona
            </StyledSubtitle>
          </StyledTitleContainer>
          <StyledTitleContainer color={Color.DARK_BLUE}>
            <StyledSubtitle>
              {data?.trackNumber} tracks with the following topics: <br />
              {data?.tracks}
            </StyledSubtitle>
          </StyledTitleContainer>
          {data.showCountdown && (
            <Countdown
              date={data?.startDay}
              onComplete={CountDownCompleted}
              renderer={TimeCountDown}
            />
          )}
          {data?.actionButtons && (
            <ActionButtons
              isTicketsDisabled={isTicketsDisabled}
              isCfpDisabled={isCfpDisabled}
              isSponsorDisabled={isSponsorDisabled}
              ticketsStartDay={data.tickets.startDay}
              cfpStartDay={data.cfp.startDay}
              cfpLink={data.cfp.link}
              edition={data.edition}
            />
          )}
          {data?.showInfoButtons && <InfoButtons />}

          {width > BIGGER_BREAKPOINT && (
            <StyledLessThan
              alt="Icon"
              src="/images/MoreThanBlueWhiteIcon.svg"
            />
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
