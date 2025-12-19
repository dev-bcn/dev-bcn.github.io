import { motion } from "motion/react";
import { Link } from "react-router";
// @ts-expect-error some quirky import
import { styled } from "styled-components";

import { TABLET_BREAKPOINT } from "@constants/BreakPoints";
import { Color } from "@styles/colors";

import SpeakerSwiper from "./SpeakerSwiper";
import TitleSection from "../SectionTitle/TitleSection";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

import type { FC } from "react";

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
            subtitle="Get inspired by industry leaders, innovative thinkers, and expert developers who will share their knowledge and experiences at Barcelona Developers Conference. Our diverse lineup of speakers brings cutting-edge insights and practical expertise across multiple technology domains."
            color={Color.WHITE}
          />
        </StyledTitleWrapper>
        <SpeakerSwiper url={sessionizeUrl} isEnabled={isEnabled} />
        <StyledLink>
          <Link to={speakersLink} className="link--text">
            <StyledSubtitle> View all speakers</StyledSubtitle>
            <StyledLessThanRed src="/images/LessThanBlueIcon.svg" />
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
