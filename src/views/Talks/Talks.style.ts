import { styled } from "styled-components";
import { Color } from "@styles/colors";
import { motion } from "motion/react";
import {
  BIG_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "@constants/BreakPoints";
import { Link } from "react-router";

export const StyledTitleContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const StyledTitleIcon = styled.img`
  width: 8%;
  display: none;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
  }
`;
export const StyledSpeakersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem 1rem;
`;
export const StyledWaveContainer = styled.div`
  background: ${Color.DARK_BLUE};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    height: 10rem;
  }
`;
export const StyledMarginBottom = styled.div`
  margin-bottom: 20rem;
`;
export const StyledSessionText = styled.div`
  color: ${Color.WHITE};
  padding: 0.3rem 0;
  font-size: 0.8em;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
    text-align: left;
  }
`;
export const StyledSessionCard = styled(motion.div)`
  align-items: center;
  margin: 0.3rem 1rem 1rem;
  flex-grow: 4;
  background-color: ${Color.DARK_BLUE};
  background-size: 200% 200%;
  border-radius: 10px;
  padding: 15px;
  @media (min-width: 800px) {
    text-align: left;
    max-width: 359px;
    margin-bottom: 1.5rem;
  }
`;
export const StyledTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`;
export const StyledTalkTitle = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: ${Color.YELLOW};
  padding: 5px 7px;
  transition-duration: 0.5s;
  margin-bottom: 10px;

  :hover,
  :focus,
  :active {
    color: ${Color.WHITE};
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }
`;
export const StyledTrackInfo = styled.h2`
  color: ${Color.DARK_BLUE};
  margin-top: 2rem;
  margin-left: 40px;
  margin-bottom: 1rem;
`;
export const StyledSessionSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 90%;
`;
export const StyledAgenda = styled.div`
  display: flex;
  margin: 1rem;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
  }
`;
export const StyledTalkSpeaker = styled.p`
  font-size: 1em;

  a:before {
    content: "🧑🏻‍💻 ";
  }

  a {
    text-decoration: none;
    transition: color ease-in-out 200ms;
    color: ${Color.WHITE};
  }

  a:hover {
    color: ${Color.LIGHT_BLUE};
  }
`;
export const StyledMain = styled.main`
  padding-left: 2rem;
  padding-top: 4rem;
  padding-bottom: 7rem;

  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    padding-bottom: 40rem;
    padding-left: 1rem;
  }

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    padding-bottom: 20rem;
    padding-left: 1rem;
  }
`;
