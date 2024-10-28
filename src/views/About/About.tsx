import React, {FC} from "react";
import TitleSection from "src/components/SectionTitle/TitleSection";
import SectionWrapper from "src/components/SectionWrapper/SectionWrapper";
import {MOBILE_BREAKPOINT} from "src/constants/BreakPoints";
import {useWindowSize} from "react-use";
import {aboutData} from "./AboutData";
import {AboutCard} from "./components/AboutCard";
import styled from "styled-components";
import {Color} from "src/styles/colors";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledSpeakersSection,
} from "../Speakers/Speakers.style";
import {StyledMarginBottom} from "../Talks/Talks.style";
import {useEventEdition} from "../Home/UseEventEdition";

const StyledUsersWrapper = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledLink = styled.a`
  display: block;
  background-color: ${Color.DARK_BLUE};
  color: ${Color.LIGHT_BLUE};
  text-decoration: none;
  font-weight: bold;
  margin-top: 50px;
  padding: 10px 20px;
  border-radius: 20px;

  &:hover {
    color: ${Color.MAGENTA};
  }
`;

const About: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  const {edition} = useEventEdition();

  React.useEffect(() => {
    if (edition) {
      document.title = `About us — ${edition.title} — ${edition.edition}`;
    }
  }, [edition]);

  return (
    <SectionWrapper color={Color.WHITE} marginTop={8}>
      <StyledSpeakersSection>
        <TitleSection
          title="ABOUT US"
          subtitle="The Barcelona Developers Conference - DevBcn"
          color={Color.BLUE}
        />
        {width > MOBILE_BREAKPOINT && (
          <>
            <StyledLessIcon src="images/MoreThanBlueWhiteIcon.svg"/>
            <StyledMoreIcon src="images/LessThanBlueWhiteIcon.svg"/>
          </>
        )}
        <StyledUsersWrapper>
          {aboutData.map((organizer) => (
            <AboutCard person={organizer} key={organizer.id} />
          ))}
        </StyledUsersWrapper>
        <p>
          <StyledLink
            href="https://eepurl.com/ifxXl9"
            rel="noreferrer"
            target="_blank"
          >
            📨 Subscribe to our news here
          </StyledLink>
        </p>
        <StyledMarginBottom />
      </StyledSpeakersSection>
    </SectionWrapper>
  );
};

export default About;
