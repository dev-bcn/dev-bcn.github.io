import Countdown from "react-countdown";
import { FC } from "react";
import data from "@data/2023.json";
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
import { useWindowSize } from "react-use";
import { useDateInterval } from "@hooks/useDateInterval";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import ActionButtons from "@views/Home/components/ActionButtons/ActionButtons";
import { styled } from "styled-components";
import { Color } from "@styles/colors";
import InfoButtons from "../InfoButtons/InfoButtons";
import MultimediaInfoButtons from "../MultimediaInfoButtons/MultimediaInfoButtons";
import CountDownCompleted from "@views/Home/components/Home/components/CountDownCompleted";
import TimeCountDown from "@views/Home/components/Home/components/TimeCountdown";
import { BIG_BREAKPOINT, LARGE_BREAKPOINT } from "@constants/BreakPoints";

const StyledLogo = styled.img`
  margin: 20px;
  width: 600px;
  @media (max-width: ${BIG_BREAKPOINT}px) {
    width: 80%;
  }
`;
const Home: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  const { isTicketsDisabled, isSponsorDisabled, isCfpDisabled } =
    useDateInterval(new Date(), data);
  const startDay = data.startDay;

  return (
    <StyledHomaImage>
      <SectionWrapper color="transparent">
        <StyleHomeContainer>
          <StyledLogo src="/images/logo.png" alt="DevBcn logo" />
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
              {data.tracks}
            </StyledSubtitle>
          </StyledTitleContainer>
          {data.showCountdown && (
            <Countdown
              date={startDay}
              onComplete={CountDownCompleted}
              renderer={TimeCountDown}
            />
          )}
          {data.actionButtons && (
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
          {data.showInfoButtons && <InfoButtons />}
          <h2 style={{ color: Color.LIGHT_BLUE, textShadow: "1px 1px #000" }}>
            DevBcn 2023 edition resources
          </h2>
          <MultimediaInfoButtons />
          {width > LARGE_BREAKPOINT && (
            <StyledLessThan src={"/images/MoreThanBlueWhiteIcon.svg"} />
          )}
          <StyledTopSlash
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
          >
            <StyledGreenSlash>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              /{" "}
            </StyledGreenSlash>
          </StyledTopSlash>
          <StyledBottomSlash
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 6 }}
          >
            <StyledBlueSlash>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              /{" "}
            </StyledBlueSlash>
          </StyledBottomSlash>
        </StyleHomeContainer>
      </SectionWrapper>
    </StyledHomaImage>
  );
};

export default Home;
