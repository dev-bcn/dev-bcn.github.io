import styled from "styled-components";
import {Color} from "src/styles/colors";
import {BIG_BREAKPOINT} from "src/constants/BreakPoints";

export const StyledFooterAbsoluteContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const StyledFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${Color.DARK_BLUE};
  position: relative;
  overflow: hidden;
  color: ${Color.WHITE};

  @media only screen and (min-width: 1100px) {
    padding: 1rem 2rem;
    flex-direction: row;
    justify-content: space-between;
    height: 7rem;
  }
`;

export const StyledFooterItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
    width: 20%;
    height: 100%;
    margin-bottom: 0;
  }
`;

export const StyledAbsoluteImg = styled.img`
  display: none;
  height: 9rem;
  position: absolute;
  left: 2rem;
  bottom: -2.5rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
  }
`;

export const StyledFlexCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledFlexRow = styled.div.withConfig({shouldForwardProp: (prop) => !["justify"].includes(prop)})<{ justify?: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  justify-content: center;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: ${({ justify }) =>
      justify === "center" ? "center" : "start"};
    margin-bottom: 0.25rem;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const StyledFooterIcon = styled.img<{ noMargin?: boolean }>`
  height: 24px;
  width: 24px;
  margin-right: ${({ noMargin }) => (noMargin ? "0" : "0.75rem")};

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    margin-right: ${({ noMargin }) => (noMargin ? "0" : "0.5rem")};
  }
`;

export const StyledImg = styled.img`
  height: 4.5rem;
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  font-weight: 600;
`;
