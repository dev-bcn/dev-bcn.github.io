import { styled } from "styled-components";
import { Color } from "@styles/colors";
// @ts-expect-error some quirky import
import { motion } from "motion/react";
import { BIG_BREAKPOINT, BIGGER_BREAKPOINT } from "@constants/BreakPoints";

// By © Alice Wiegand / CC-BY-SA-3.0 (via Wikimedia Commons), CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=30463612
// By © Felix König / CC-BY-3.0 (via Wikimedia Commons), CC BY-SA 3.0, https://commons.wikimedia.org/wiki/File:World_Trade_Center_Barcelona_2013_1.jpg
// By © Felix König / CC-BY-SA-3.0 (via Wikimedia Commons), CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:015_Port_Vell_%28Barcelona%29,_World_Trade_Center,_torre_de_Jaume_I_i_cobert_de_l%27America%27s_Cup.jpg

const images = [
  "/images/wtc-gemini-2.webp",
  "/images/wtc-gemini-1.webp",
  "/images/wtc-gemini-3.webp",
];

export const StyledHomeImage = styled.div`
  padding: 70px 0 40px;
  background-image: 
    linear-gradient(-45deg, ${Color.LIGHT_BLUE}70, ${Color.MAGENTA}70, ${Color.DARK_BLUE}70, ${Color.GREEN}70),
    url(${images[Math.floor(Math.random() * images.length)]});
  background-size: 400% 400%, cover;
  background-position: 0 50%, center;
  background-repeat: no-repeat;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0 50%, center;
    }
    50% {
      background-position: 100% 50%, center;
    }
    100% {
      background-position: 0 50%, center;
    }
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

export const StyledTitleContainer = styled(motion.div)`
  background-color: ${(props) => props.color ?? Color.DARK_BLUE}95;
  border-radius: 10px;
  width: 70%;
  margin-bottom: 1rem;
  padding: 10px 5px;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    width: 80%;
  }
`;

export const StyledTitle = styled(motion.h1)`
  padding: 0.5rem 1rem;
  color: ${Color.WHITE};
  font-family: "Square 721 Regular", sans-serif;
`;

export const StyledSubtitle = styled(motion.h2)`
  color: ${(props: { color: string }) => props.color ?? Color.WHITE};
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-size: 1.25rem;
  font-weight: ${(props: { fontWeight: number }) => props.fontWeight ?? 400};
  text-shadow: ${(props: { shadow: boolean }) => props.shadow ? '2px 2px 2px rgba(0, 0, 0, 0.5)' : 'none'};

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
  height: 13rem;
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
export const StyledLogoDiv = styled(motion.div)`
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
