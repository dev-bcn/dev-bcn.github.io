import { styled } from "styled-components";

import { BIG_BREAKPOINT, TABLET_BREAKPOINT } from "@constants/BreakPoints";

export const StyledScheduleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 2rem 0 2rem;
  margin-bottom: 5rem;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 0 5rem 0 2rem;
    margin-bottom: 10rem;
  }
  @media (min-width: ${BIG_BREAKPOINT}px) {
    padding: 0 10rem 0 10rem;
  }
`;
export const StyledLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 0;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;
export const StyledMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 0;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;
