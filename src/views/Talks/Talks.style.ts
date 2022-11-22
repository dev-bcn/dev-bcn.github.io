import styled from "styled-components";
import {Color} from "../../styles/colors";
import {BIG_BREAKPOINT, TABLET_BREAKPOINT} from "../../constants/BreakPoints";

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
