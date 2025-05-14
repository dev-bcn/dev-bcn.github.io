import { styled } from "styled-components";
import { BIG_BREAKPOINT } from "@constants/BreakPoints";
import { motion } from "motion/react";
import { Color } from "@styles/colors";

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
  margin-top: 10px;
  color: ${Color.LIGHT_BLUE};

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
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    align-items: start;
    padding: 0 calc(10% + 2rem);
  }
`;

export const StyledVideoTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
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
    padding: 3rem 0 4rem 3rem;
  }
`;
export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`;

export const StyledNameContainer = styled.div`
  width: 50%;
  text-align: center;

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
