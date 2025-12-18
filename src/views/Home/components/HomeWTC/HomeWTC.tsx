import Countdown from "react-countdown";
import React, { FC } from "react";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import TimeCountDown from "./components/TimeCountdown";
import { useWindowSize } from "react-use";
import { useDateInterval } from "@hooks/useDateInterval";
// @ts-expect-error some quirky import
import { motion } from "motion/react";
import {
  StyledDevBcnLogo,
  StyledHomeImage,
  StyledLogoDiv,
  StyledSubtitle,
  StyledTitle,
  StyledTitleContainer,
  StyleHomeContainer,
} from "./Style.Home";
import ActionButtons from "../ActionButtons/ActionButtons";
import { Color } from "@styles/colors";
import InfoButtons from "../InfoButtons/InfoButtons";
import { formatDateRange } from "./DateUtil";
import { Link } from "react-router";
import edition from "@data/2026.json";
import CountDownCompleted from "./components/CountDownCompleted";

const HomeWTC: FC<React.PropsWithChildren<unknown>> = () => {
  useWindowSize();
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
          <StyledTitleContainer color={Color.TRANSPARENT}
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
            <StyledSubtitle fontWeight={600}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {edition?.trackNumber} tracks with the following topics: <br />
              {edition?.tracks}
            </StyledSubtitle>
            <StyledSubtitle shadow={true}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <small>
                Past events: <Link to="/2025">2025 edition</Link> |{" "}
                <Link to="/2024">2024 edition</Link> |{" "}
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
            color={Color.TRANSPARENT}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <StyledSubtitle fontWeight={600}>
              {edition?.startDay &&
                edition.endDay &&
                formatDateRange(
                  new Date(edition.startDay),
                  new Date(edition.endDay),
                )}
            </StyledSubtitle>
            <StyledSubtitle fontWeight={600}>
              World Trade Center, Barcelona
            </StyledSubtitle>
          </StyledTitleContainer>
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
        </StyleHomeContainer>
      </SectionWrapper>
    </StyledHomeImage>
  );
};

export default HomeWTC;
