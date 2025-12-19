import { motion } from "motion/react";
import { styled } from "styled-components";

import {
  BIG_BREAKPOINT,
  LARGE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "@constants/BreakPoints";
import { Color } from "@styles/colors";

export const StyledContainer = styled.div`
  background-color: ${Color.BLUE};
`;
export const StyledWaveContainer = styled.div`
  background: ${Color.WHITE};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    height: 10rem;
  }
`;
export const StyledSpeakerDetailContainer = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${Color.BLUE};
  color: ${Color.WHITE};
  width: 100%;
  padding: 1.5rem 1.5rem 3rem;

  margin-bottom: 8rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: start;
    align-items: start;
    padding: 0;
    margin-bottom: 2rem;
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
export const StyledImageContainer = styled(motion.div)`
  flex-direction: column;
  width: 25%;
  padding: 0 1rem;
  display: flex;
`;
export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const StyledInfoContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const StyledFlexCol = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    align-items: flex-start;
  }
`;
export const StyledMoreThanIconContainer = styled.div`
  display: none;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
    align-items: flex-end;
    padding-bottom: 2.5rem;
    width: 18%;
  }

  @media only screen and (min-width: ${LARGE_BREAKPOINT}px) {
    padding-bottom: 1.5rem;
  }
`;
export const StyledMoreThanIcon = styled.img`
  display: none;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
    width: 100%;
  }
`;
export const StyledNameContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`;
export const StyledName = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    width: 25%;
    margin-bottom: 0;
    text-align: left;
  }
`;

export const StyledSpeakerImg = styled.img`
  border-radius: 10px;
  padding: 5px;
  border: 1px solid ${Color.YELLOW};
  margin-bottom: 15px;

  @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
    width: 80%;
  }
`;
export const StyledSlashes = styled(motion.img)`
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
  margin-bottom: 1.5rem;

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
