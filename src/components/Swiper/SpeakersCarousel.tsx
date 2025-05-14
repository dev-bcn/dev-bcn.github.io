import { FC } from "react";
import { Link } from "react-router";
import LessThanBlueWhiteIcon from "@assets/images/LessThanBlueIcon.svg";
import { motion } from "motion/react";
import { styled } from "styled-components";
import SpeakerSwiper from "./SpeakerSwiper";
import { Color } from "@styles/colors";
import { TABLET_BREAKPOINT } from "@constants/BreakPoints";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import TitleSection from "../SectionTitle/TitleSection";

const StyledSpeakersContainer = styled.section`
  background-color: ${Color.LIGHT_BLUE};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitleWrapper = styled.div`
  max-width: 1280px;
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    justify-content: flex-end;
    padding-right: 10rem;
  }
`;

const StyledSubtitle = styled.h2`
  color: ${Color.DARK_BLUE};
  padding-right: 0.75rem;
`;

const StyledLessThanRed = styled.img`
  height: 1.5rem;
`;

export const StyledBottomSlash = styled(motion.div)`
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40%;
  height: 2rem;
`;

const StyledBlueSlash = styled(motion.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${Color.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;

interface Props {
  speakersLink: string;
  sessionizeUrl: string;
  isEnabled: boolean;
}

const SpeakersCarousel: FC<React.PropsWithChildren<Props>> = ({
  speakersLink,
  sessionizeUrl,
  isEnabled,
}) => {
  return (
    <SectionWrapper color={Color.LIGHT_BLUE}>
      <StyledSpeakersContainer>
        <StyledTitleWrapper>
          <TitleSection
            title="SPEAKERS"
            subtitle="Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first Barcelona Developers Conference in Spain, to pr mote your company
        and to support technological communities."
            color={Color.WHITE}
          />
        </StyledTitleWrapper>
        <SpeakerSwiper url={sessionizeUrl} isEnabled={isEnabled} />
        <StyledLink>
          <Link to={speakersLink} className="link--text">
            <StyledSubtitle> View all speakers</StyledSubtitle>
            <StyledLessThanRed src={LessThanBlueWhiteIcon} />
          </Link>
        </StyledLink>
        <StyledBottomSlash
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 6 }}
        >
          <StyledBlueSlash>
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
            / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
          </StyledBlueSlash>
        </StyledBottomSlash>
      </StyledSpeakersContainer>
    </SectionWrapper>
  );
};

export default SpeakersCarousel;
