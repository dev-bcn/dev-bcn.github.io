import styled from "styled-components";
import { BIG_BREAKPOINT, TABLET_BREAKPOINT } from "../../constants/BreakPoints";

export const StyledWrapperSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;
export const StyledTitleContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 0 5rem;
  }
  @media (min-width: ${BIG_BREAKPOINT}px) {
    padding: 0 10rem;
  }
`;
export const StyledLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 2rem;
  height: 5rem;
  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 10rem;
    top: 0;
  }
`;
export const StyledMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;
  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 10rem;
    top: 0;
  }
`;
