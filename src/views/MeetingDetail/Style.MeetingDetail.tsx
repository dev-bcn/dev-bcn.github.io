import styled from "styled-components";
import { BIG_BREAKPOINT, LARGE_BREAKPOINT } from "../../constants/BreakPoints";
import { motion } from "framer-motion";
import { Color } from "../../styles/colors";

export const StyledContainer = styled.div`
  padding-top: 2rem;
`;

export const StyledMeetingTitleContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: space-between;
  }
`;

export const StyledTitleImg = styled(motion.img)`
  display: none;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    width: 10%;
    display: flex;
    align-items: end;
  }
`;

export const StyledTitle = styled(motion.h1)`
  font-weight: 600;
  font-size: 2rem;
  color: ${Color.DARK_BLUE};
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    text-align: left;
  }
`;

export const StyledDescription = styled.p`
  color: ${Color.DARK_BLUE};
  text-align: left;
  width: 100%;
  padding-top: 10px;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    padding-left: 10px;
  }
`;

export const StyledExtraInfo = styled.p`
   {
    margin-top: 10px;
    color: ${Color.LIGHT_BLUE};
  }
  & strong {
    color: ${Color.DARK_BLUE};
  }
`;

export const StyledFlexCol = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    align-items: start;
    padding: 0 4rem;
  }
`;

export const StyledVideoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  margin-bottom: 2rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    align-items: start;
    padding: 0 calc(10% + 4rem);
  }
`;

export const StyledVideoTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const StyledSpeakerDetailContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${Color.DARK_BLUE};
  color: ${Color.WHITE};
  width: 100%;
  padding: 1.5rem 1.5rem 3rem;

  margin-bottom: 2rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: start;
    align-items: start;
    padding: 0;
  }

  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    margin-bottom: 25rem;
  }
`;

export const StyledLessThan = styled.img`
  display: none;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
    width: 10%;
  }
`;

export const StyledDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    flex-direction: row;
    padding: 3rem 0 3rem 3rem;
  }
`;

export const StyledImageContainer = styled.div`
  flex-direction: column;
  width: 25%;
  padding: 0 1rem;
  display: none;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
  }
`;

export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`;

export const StyledNameContainer = styled.div`
   {
    width: 50%;
    text-align: center;
  }
  & a {
    text-decoration: none;
    color: ${Color.LIGHT_BLUE};
  }

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    margin-bottom: 1rem;
  }
`;

export const StyledName = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    margin-bottom: 0;
  }
`;

export const StyledSpeakerImgBorder = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 0.75rem;
  padding: 0.3rem;
  border: 1px solid ${Color.YELLOW};

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    padding: 0.2rem;
    height: 200px;
  }

  @media only screen and (min-width: ${LARGE_BREAKPOINT}px) {
    padding: 0.2rem;
    height: 275px;
  }
`;

export const StyledSpeakerImg = styled.div<{ photo: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ photo }) => photo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const StyledSlashes = styled.img`
  width: 80%;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    margin-bottom: 0;
    width: 75%;
  }
`;

export const StyledSpeakerTitle = styled.h4`
  font-size: 1.15rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    text-align: left;
  }
`;

export const StyledSocialMediaContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 0.75rem;
`;

export const StyledSpeakerDescription = styled.p`
  text-align: justify;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    padding-right: 4rem;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${Color.WHITE};
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const StyledSocialMediaIcon = styled.img<{ noMargin?: boolean }>`
  height: 1.5rem;
  margin-right: ${({ noMargin }) => (noMargin ? "0" : "0.75rem")};

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    margin-right: ${({ noMargin }) => (noMargin ? "0" : "0.5rem")};
  }
`;

export const StyledAbsoluteSlashes = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  color: ${Color.DARK_BLUE};
  font-size: 2rem;
  height: 2rem;
  font-weight: 900;
  bottom: -0.65rem;
  left: 0;
`;
