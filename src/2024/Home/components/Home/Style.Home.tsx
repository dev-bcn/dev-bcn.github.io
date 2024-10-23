import styled from "styled-components";
import { Color } from "../../../../styles/colors";
import { motion } from "framer-motion";
import {
  BIG_BREAKPOINT,
  BIGGER_BREAKPOINT,
} from "../../../../constants/BreakPoints";

export const StyledHomeImage = styled.div`
  padding: 70px 0 40px;
  background: linear-gradient(-45deg, ${Color.LIGHT_BLUE}, ${Color.MAGENTA}, ${Color.DARK_BLUE}, ${Color.GREEN});
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;
export const StyleHomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledTitleContainer = styled.div`
  background-color: ${(props) => props.color ?? Color.DARK_BLUE};
  border-radius: 10px;
  width: 70%;
  margin-bottom: 1rem;
  padding: 10px 5px;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    width: 80%;
  }
`;

export const StyledTitle = styled.h1`
  padding: 0.5rem 1rem;
  color: ${Color.WHITE};
  font-family: "Square 721 Regular", sans-serif;
`;

export const StyledSubtitle = styled.h2`
  color: ${(props) => props.color ?? Color.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.25rem;
  text-shadow: 1px 1px 1px black;
  padding: 0.25rem;

  a {
    text-decoration: none;
    color: ${Color.LIGHT_BLUE};
  }
`;

export const StyledLessThan = styled(motion.img)`
  height: 7rem;
  position: absolute;
  top: 50%;
  left: 5rem;
  animation: StyledLessThanAnimation 6s infinite linear;

  @keyframes StyledLessThanAnimation {
    0% {
      transform: rotate(0deg) translate(-20px) rotate(0deg);
    }
    80% {
      transform: rotate(360deg) translate(-20px) rotate(-360deg);
    }
    90% {
      transform: translate(-5px);
    }
    100% {
      transform: translate(-20px);
    }
  }
`;

export const StyledBottomSlash = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  height: 2rem;
`;

export const StyledTopSlash = styled(motion.div)`
  position: absolute;
  bottom: 25%;
  right: 0;
  height: 2rem;
  width: 25%;
`;

export const StyledGreenSlash = styled(motion.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${Color.DARK_BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;

export const StyledBlueSlash = styled(motion.p)`
  font-family: "Square 721 Regular", sans-serif;
  color: ${Color.BLUE};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;
export const StyledDevBcnLogo = styled.img`
  margin: 20px;
  height: 20rem;
  aspect-ratio: 800/327;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${BIGGER_BREAKPOINT}px) {
    height: 15rem;
  }
  @media (max-width: ${BIG_BREAKPOINT}px) {
    height: 8rem;
  }
`;
export const StyledKcdLogo = styled.img`
  margin-top: 4em;
  margin-left: 2em;
  height: 13rem;
  transition: height 0.2s ease-in-out;
  aspect-ratio: 800/327;
  @media (max-width: ${BIGGER_BREAKPOINT}px) {
    height: 12rem;
    margin: 0;
  }
  @media (max-width: ${BIG_BREAKPOINT}px) {
    margin-top: 0;
    margin-left: 2.5em;
    margin-right: 2.5em;
    padding: 1em;
    height: 10rem;
  }
`;
export const StyledPlusSign = styled.span`
  color: white;
  font-size: 5em;
  display: block;
  padding-top: 1.5em;
  text-shadow: 3px 3px #000;
  transition: height 0.2s ease-in-out;
  @media (max-width: ${BIGGER_BREAKPOINT}px) {
    margin: 0;
    padding: 0;
    font-size: 3em;
  }
  @media (max-width: ${BIG_BREAKPOINT}px) {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
`;
export const StyledLogoDiv = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;

  @media (max-width: ${BIGGER_BREAKPOINT}px) {
    flex-direction: column;
  }

  @media (max-width: ${BIG_BREAKPOINT}px) {
    flex-direction: column;
  }
`;
