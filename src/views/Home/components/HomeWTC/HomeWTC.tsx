import { motion } from "motion/react";
import React from "react";
import Countdown from "react-countdown";
import { Link } from "react-router";

import {
  CountDownCompleted,
  TimeCountDown,
} from "@components/common/countdown";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import edition from "@data/2026.json";
import { useDateInterval } from "@hooks/useDateInterval";

// @ts-expect-error some quirky import

import { Color } from "@styles/colors";
import { formatDateRange } from "@utils/dateUtils";

import ActionButtons from "../ActionButtons/ActionButtons";
import InfoButtons from "../InfoButtons/InfoButtons";
import {
  StyledDevBcnLogo,
  StyledHomeImage,
  StyledLogoDiv,
  StyledSubtitle,
  StyledTitle,
  StyledTitleContainer,
  StyleHomeContainer,
} from "./Style.Home";

import type { FC } from "react";

const HomeWTC: FC<React.PropsWithChildren<unknown>> = () => {
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
            <StyledDevBcnLogo src="images/logo.webp" alt="DevBcn logo" />
          </StyledLogoDiv>
          <StyledTitleContainer
            color={Color.TRANSPARENT}
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
              fontWeight={700}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {edition?.startDay &&
                edition.endDay &&
                formatDateRange(
                  new Date(edition.startDay),
                  new Date(edition.endDay),
                )}
            </StyledSubtitle>
            <StyledSubtitle
              fontWeight={700}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              World Trade Center, Barcelona
            </StyledSubtitle>
          </StyledTitleContainer>
          <motion.img
            src="/images/devBcn-sponsorship.webp"
            alt="DevBcn sponsorship value"
            style={{ maxWidth: "100%", marginTop: "8rem" }}
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
            <StyledSubtitle fontWeight={700}>
              {edition?.trackNumber} tracks with the following topics:
            </StyledSubtitle>
            <StyledSubtitle fontWeight={600}>
              {edition?.tracks}
            </StyledSubtitle>
          </StyledTitleContainer>
          <StyledTitleContainer
            color={Color.TRANSPARENT}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <StyledSubtitle shadow={true}>
              <small>
                Past events: <Link to="/2025">2025 edition</Link> |{" "}
                <Link to="/2024">2024 edition</Link> |{" "}
                <Link to="/2023">2023 edition</Link>
              </small>
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
