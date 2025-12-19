import { motion } from "motion/react";
import React from "react";
import Countdown from "react-countdown";
import { Link } from "react-router";
import { useWindowSize } from "react-use";

import {
  TimeCountDown,
  CountDownCompleted,
} from "@components/common/countdown";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { BIGGER_BREAKPOINT } from "@constants/BreakPoints";
import edition from "@data/2025.json";
import { useDateInterval } from "@hooks/useDateInterval";

// @ts-expect-error some quirky import

import { Color } from "@styles/colors";
import { formatDateRange } from "@utils/dateUtils";
import ActionButtons from "@views/Home/components/ActionButtons/ActionButtons";

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
import InfoButtons from "../InfoButtons/InfoButtons";

import type { FC } from "react";

const Home: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  const { isTicketsDisabled, isSponsorDisabled, isCfpDisabled } =
    useDateInterval(new Date(), edition);

  return (
    <StyledHomeImage>
      <SectionWrapper color="transparent">
        <StyleHomeContainer>
          <StyledLogoDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <StyledDevBcnLogo src="images/logo.png" alt="DevBcn logo" />
          </StyledLogoDiv>
          <StyledTitleContainer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <StyledTitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              The Barcelona Developers Conference {edition?.edition}
            </StyledTitle>
            <StyledSubtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {edition?.trackNumber} tracks with the following topics: <br />
              {edition?.tracks}
            </StyledSubtitle>
            <StyledSubtitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <small>
                Past events: <Link to="/2024">2024 edition</Link> |{" "}
                <Link to="/2023">2023 edition</Link>
              </small>
            </StyledSubtitle>
          </StyledTitleContainer>
          <motion.img
            src="/images/devBcn-sponsorship.png"
            alt="DevBcn sponsorship value"
            width="635"
            height="125"
            style={{ aspectRatio: "127:25", maxWidth: "100%" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          />
          <StyledTitleContainer
            color={Color.LIGHT_BLUE}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
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
          {edition?.showCountdown && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <Countdown
                date={edition?.startDay}
                onComplete={CountDownCompleted}
                renderer={TimeCountDown}
              />
            </motion.div>
          )}
          {edition?.actionButtons && (
            <ActionButtons
              isTicketsDisabled={isTicketsDisabled}
              isCfpDisabled={isCfpDisabled}
              isSponsorDisabled={isSponsorDisabled}
              ticketsStartDay={edition.tickets.startDay}
              cfpStartDay={edition.cfp.startDay}
              cfpLink={edition.cfp.link}
              edition={edition.edition}
            />
          )}
          {edition?.showInfoButtons && <InfoButtons />}

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
