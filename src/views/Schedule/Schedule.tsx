import { BIG_BREAKPOINT, MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";
import React, { FC } from "react";
import LessThanBlueWhiteIcon from "../../assets/images/MoreThanBlueWhiteIcon.svg";
import { Link } from "react-router-dom";
import MoreThanBlueWhiteIcon from "../../assets/images/LessThanBlueWhiteIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import TitleSection from "../../components/SectionTitle/TitleSection";
import { useWindowSize } from "react-use";
import data from "../../data/2023.json";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledPlanningImage,
  StyledScheduleContainer,
  StyledScheduleSection,
  StyledTrack,
  StyledTracksContainer,
  StyledWelcomerImage,
  StyledWelcomerText,
  StyledWelcomerTextContainer,
  StyledWelcomerTextLink,
} from "./Schedule.style";

const Schedule: FC = () => {
  const { width } = useWindowSize();

  const meetingDetailUrl = "grace-jansen";
  const speakerDetailUrl = "grace-jansen";

  React.useEffect(() => {
    document.title = `Schedule - DevBcn - ${data.edition}`;
  }, []);

  return (
    <SectionWrapper color={Color.WHITE} marginTop={6}>
      <StyledScheduleSection>
        <TitleSection
          title="SCHEDULE"
          subtitle="Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP."
          color={Color.BLUE}
        />
        {width > MOBILE_BREAKPOINT && (
          <>
            <StyledLessIcon src={LessThanBlueWhiteIcon} />
            <StyledMoreIcon src={MoreThanBlueWhiteIcon} />
          </>
        )}
        {!data.schedule.enabled && (
          <p style={{ color: Color.DARK_BLUE }}>
            Schedule is not available yet. Keep in touch on social media as we
            announce the speakers and their talks/workshops
          </p>
        )}
        {data.schedule.enabled && (
          <StyledScheduleContainer>
            <StyledTracksContainer>
              <StyledTrack
                width={width < BIG_BREAKPOINT ? "100%" : "30%"}
                background={Color.DARK_BLUE}
                color={Color.WHITE}
              >
                TRACK 1
              </StyledTrack>
              <StyledTrack
                width={width < BIG_BREAKPOINT ? "100%" : "30%"}
                background={Color.YELLOW}
                color={Color.BLUE}
              >
                TRACK 2
              </StyledTrack>
              <StyledTrack
                width={width < BIG_BREAKPOINT ? "100%" : "30%"}
                background={Color.DARK_BLUE}
                color={Color.BLACK_BLUE}
              >
                TRACK 3
              </StyledTrack>
            </StyledTracksContainer>
            <StyledWelcomerImage>
              <StyledWelcomerTextContainer>
                <StyledWelcomerText color={Color.YELLOW}>
                  WELCOME ALL!
                </StyledWelcomerText>
                <StyledWelcomerText color={Color.DARK_BLUE}>
                  08:40 - 09:00
                </StyledWelcomerText>
              </StyledWelcomerTextContainer>
            </StyledWelcomerImage>
            <StyledPlanningImage>
              <StyledWelcomerTextContainer>
                <Link to={meetingDetailUrl} className="link--text">
                  <StyledWelcomerTextLink color={Color.BLUE}>
                    THE FUTURE IS <br />
                    KUBERNETES-NATIVE
                  </StyledWelcomerTextLink>
                </Link>
                <Link to={speakerDetailUrl} className="link--text">
                  <StyledWelcomerTextLink color={Color.DARK_BLUE}>
                    Grace Jansen
                  </StyledWelcomerTextLink>
                </Link>
                <StyledWelcomerText color={Color.BLUE}>
                  08:40 - 09:00
                </StyledWelcomerText>
              </StyledWelcomerTextContainer>
            </StyledPlanningImage>

            <StyledTrack
              width={"100%"}
              background={Color.DARK_BLUE}
              color={Color.BLACK_BLUE}
            >
              BREAK
            </StyledTrack>

            <StyledTrack
              width={"100%"}
              background={Color.YELLOW}
              color={Color.BLUE}
            >
              BREAK
            </StyledTrack>

            <StyledTrack
              width={"100%"}
              background={Color.DARK_BLUE}
              color={Color.WHITE}
            >
              LUNCH BREAK
            </StyledTrack>

            <StyledTrack
              width={"100%"}
              background={Color.DARK_BLUE}
              color={Color.BLACK_BLUE}
            >
              AFTERNOON BREAK
            </StyledTrack>

            <StyledPlanningImage>
              <StyledWelcomerTextContainer>
                <Link to={meetingDetailUrl} className="link--text">
                  <StyledWelcomerTextLink color={Color.BLUE}>
                    THE FUTURE IS <br />
                    KUBERNETES-NATIVE
                  </StyledWelcomerTextLink>
                </Link>
                <Link to={speakerDetailUrl} className="link--text">
                  <StyledWelcomerTextLink color={Color.DARK_BLUE}>
                    Grace Jansen
                  </StyledWelcomerTextLink>
                </Link>
                <StyledWelcomerText color={Color.BLUE}>
                  08:40 - 09:00
                </StyledWelcomerText>
              </StyledWelcomerTextContainer>
            </StyledPlanningImage>

            <StyledTrack
              width={"100%"}
              background={Color.DARK_BLUE}
              color={Color.BLACK_BLUE}
            >
              BREAK
            </StyledTrack>

            <StyledTrack
              width={"100%"}
              background={Color.YELLOW}
              color={Color.BLUE}
            >
              BREAK
            </StyledTrack>

            <StyledTrack
              width={"100%"}
              background={Color.DARK_BLUE}
              color={Color.WHITE}
            >
              LUNCH BREAK
            </StyledTrack>

            <StyledTrack
              width={"100%"}
              background={Color.DARK_BLUE}
              color={Color.WHITE}
            >
              BREAK
            </StyledTrack>

            <StyledTrack
              width={"100%"}
              background={Color.DARK_BLUE}
              color={Color.BLACK_BLUE}
            >
              CLOSING CEREMONY
            </StyledTrack>
          </StyledScheduleContainer>
        )}
      </StyledScheduleSection>
    </SectionWrapper>
  );
};

export default Schedule;
