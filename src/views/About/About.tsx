import React, { FC } from "react";
import TitleSection from "../../components/SectionTitle/TitleSection";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import LessThanBlueWhiteIcon from "../../assets/images/LessThanBlueWhiteIcon.svg";
import MoreThanBlueWhiteIcon from "../../assets/images/MoreThanBlueWhiteIcon.svg";
import { useWindowSize } from "react-use";
import { aboutData } from "./AboutData";
import { AboutCard } from "./components/AboutCard";
import styled from "styled-components";
import { Color } from "../../styles/colors";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledSpeakersSection,
} from "../Speakers/Speakers.style";
import { StyledMarginBottom } from "../Talks/Talks.style";
import data from "../../data/2023.json";

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

export const About: FC = () => {
  const { width } = useWindowSize();

  React.useEffect(() => {
    document.title = `About us - DevBcn - ${data.edition}`;
  }, []);

  return (
    <>
      <SectionWrapper color={Color.WHITE} marginTop={8}>
        <StyledSpeakersSection>
          <TitleSection
            title="ABOUT US"
            subtitle="The Developers conference - Barcelona edition"
            color={Color.BLUE}
          />
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyledLessIcon src={MoreThanBlueWhiteIcon} />
              <StyledMoreIcon src={LessThanBlueWhiteIcon} />
            </>
          )}
          <StyledUsersWrapper>
            {aboutData.map((person) => (
              <AboutCard person={person} />
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
    </>
  );
};
