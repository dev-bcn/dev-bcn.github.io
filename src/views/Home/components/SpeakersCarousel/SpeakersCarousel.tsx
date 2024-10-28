import {Color} from "src/styles/colors";

import React, {FC} from "react";
import {Link} from "react-router-dom";
import SectionWrapper from "src/components/SectionWrapper/SectionWrapper";
import {BIGGER_BREAKPOINT, TABLET_BREAKPOINT,} from "src/constants/BreakPoints";
import TitleSection from "src/components/SectionTitle/TitleSection";
import {motion} from "framer-motion";
import styled from "styled-components";
import {ROUTE_SPEAKERS_PARAMETERIZED} from "src/constants/routes";
import SpeakerSwiper from "./SpeakerSwiper";
import {useWindowSize} from "react-use";

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
    edition: string;
    carrouselEnabled: boolean;
    apiUrl: string;
}

const SpeakersCarousel: FC<React.PropsWithChildren<Props>> = ({
                                                                  edition,
                                                                  carrouselEnabled,
                                                                  apiUrl
}) => {
  const { width } = useWindowSize();
  return (
    <SectionWrapper color={Color.LIGHT_BLUE}>
      <StyledSpeakersContainer>
        <StyledTitleWrapper>
          <TitleSection
            title="SPEAKERS"
            subtitle="Are you passionate about tech and love sharing ideas? Don't miss out on DevBcn! It's a fantastic chance to connect with like-minded techies, showcase your expertise, and contribute to the vibrant tech community. Join us as a speaker and make an impact! Let's innovate and inspire together at this exciting event"
            color={Color.WHITE}
          />
        </StyledTitleWrapper>
          <SpeakerSwiper apiUrl={apiUrl} carrouselEnabled={carrouselEnabled}/>
        <StyledLink>
          <Link
            to={ROUTE_SPEAKERS_PARAMETERIZED.replace(":year", edition)}
            className="link--text"
          >
            <StyledSubtitle> View all speakers</StyledSubtitle>
            <StyledLessThanRed
              alt="view speakers"
              src="images/MoreThanBlueWhiteIcon.svg"
            />
          </Link>
        </StyledLink>
        <StyledBottomSlash
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 6 }}
        >
          {width > BIGGER_BREAKPOINT && (
            <StyledBlueSlash>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{" "}
            </StyledBlueSlash>
          )}
        </StyledBottomSlash>
      </StyledSpeakersContainer>
    </SectionWrapper>
  );
};

export default SpeakersCarousel;
