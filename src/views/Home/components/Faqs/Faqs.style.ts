import styled, {keyframes} from "styled-components";
import {Color} from "../../../../styles/colors";
import {motion} from "framer-motion";
import {BIG_BREAKPOINT} from "../../../../constants/BreakPoints";

const revealAnimation = keyframes`
    from {
        opacity: 0;
        translate: 0 100px;
    }
    50% {
        opacity: .5;
    }
    to {
        opacity: 1;
        translate: 0 0;
    }`;

export type FaqCardType = {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
};
export const StyledFaqSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  position: relative;
  @media (min-width: 650px) {
    padding: 3rem 5rem;
  }
`;
export const StyledWaveContainer = styled.div`
  background: ${Color.DARK_BLUE};
  overflow-y: hidden;
  height: 5rem;
  width: 100%;
`;
export const StyleMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 5rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;
export const StyleLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 50%;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;
export const StyledImage = styled.img`
  margin: 3px;
  padding: 5px;
  aspect-ratio: 1.5;
  border: 1px solid ${Color.YELLOW};
  border-radius: 100% 0 100% 0 / 15% 89% 11% 85%;
  animation: linear ${revealAnimation} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    width: 100%;
  }
`;
export const StyledH2 = styled.h2`
  color: white;
  margin-bottom: 10px;
`;
export const StyledP = styled.p`
  color: white;
  margin-bottom: 10px;
`;

export const StyledFaqCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin-bottom: 3rem;
  @media (min-width: 800px) {
    align-items: flex-start;
    max-width: 900px;
    margin-bottom: 4rem;
  }
`;
export const StyledFaqImageContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => !['padding'].includes(prop),
})<{ padding: string }>`
  position: relative;
  @media (min-width: 800px) {
    height: auto;

    padding: ${({ padding }) => {
      return padding;
    }};
  }
`;
export const StyledFaqImage = styled(motion.img)`
  border: 1px solid ${Color.YELLOW};
  display: block;
  height: 242px;
  margin: 3px;
  padding: 5px;
  width: 360px;
  border-radius: 92% 8% 90% 10% / 9% 90% 10% 91%;
  animation: linear ${revealAnimation} both;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    display: none;
  }
`;
export const StyledFaqInfo = styled(motion.div)<{ align: string }>`
  display: flex;
  flex-direction: column;
  color: ${Color.WHITE};
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({ align }) => {
      return align;
    }};
  }
`;
export const StyledFaqTitle = styled.h2`
  padding-top: 1rem;
  color: ${Color.YELLOW};
  font-size: 1.3em;
  @media (min-width: 800px) {
    text-align: left;
    padding-top: unset;
  }
`;
export const StyledFaqText = styled.p`
  padding: 0.5rem 2rem;
  text-align: left;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
  }

  ul {
    margin: 0.5rem 2rem;
  }
`;
export const StyledSummaryLink = styled.a`
  color: ${Color.LIGHT_BLUE};
  text-decoration: none !important;
  transition: all 0.25s ease-in-out;

  &:hover {
    font-weight: bold;
    text-decoration: none;
    color: ${Color.YELLOW};
  }

  &:visited {
    color: ${Color.MAGENTA};
    text-decoration: none;
  }
`;
