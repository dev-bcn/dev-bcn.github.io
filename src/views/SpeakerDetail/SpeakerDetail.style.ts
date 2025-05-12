import { styled } from "styled-components";
import { motion } from "framer-motion";
import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";
import { Link } from "react-router";

/* eslint-disable @typescript-eslint/no-unused-expressions*/
export const StyledTalkDescription = styled(Link)`
  text-decoration: none;
  color: ${Color.DARK_BLUE};
  transition: color 0.2s ease-in-out;

  :hover {
    color: white;
  }
`;

styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${Color.BLUE};
  color: ${Color.WHITE};
  width: 100%;
  padding: 1.5rem 1.5rem 3rem;

  margin-bottom: 2rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: start;
    align-items: start;
    padding: 0;
  }
`;
styled(motion.div)`
  flex-direction: column;
  width: 25%;
  padding: 0 1rem;
  display: none;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
  }
`;
styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    align-items: flex-start;
  }
`;
styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`;
styled(motion.img)`
  width: 80%;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    margin-bottom: 0;
    width: 75%;
  }
`;
export const StyledLink = styled.a`
  text-decoration: none;
  color: ${Color.WHITE};
  cursor: pointer;
  display: flex;
  align-items: center;
`;
