import styled from "styled-components";
import { BIG_BREAKPOINT, TABLET_BREAKPOINT } from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";

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
export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 1rem 2rem;
  width: 90%;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 15rem;
  }

  svg {
    max-width: 18px;
    max-height: 18px;
  }
`;
export const CompanyLogo = styled.img`
  width: 100%;
  margin: 0 auto 1.5rem;
  text-align: center;
  border-radius: 2rem;
  padding-top: 0.5rem;

  @media (min-width: 768px) {
    max-width: none;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;
export const CompanyName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem;
`;
export const CompanyNameLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  padding-left: 1rem;
  color: ${Color.MAGENTA};
  font-weight: bold;
`;
export const CompanyDescription = styled.p`
  margin: 0.8rem 1rem;
  text-align: left;
  color: ${Color.DARK_BLUE};
`;
export const OfferTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${Color.DARK_GREEN};
`;
export const OfferText = styled.p`
  margin-bottom: 1rem;
  color: ${Color.DARK_BLUE};
  text-align: left;

  p {
    margin: initial;
    padding: 0.2rem 1rem;
  }

  ul {
    margin-bottom: 1rem;
    margin-left: 2rem;
    padding-left: 2rem;
  }
`;
export const OfferLocation = styled.p`
  margin-bottom: 1rem;
  color: ${Color.GREEN};
`;
export const OfferLink = styled.a`
  color: ${Color.MAGENTA};
  font-weight: bold;
`;
export const Companies = styled.div`
   {
    padding: 1.5rem;
    position: sticky;
    top: 64px;
    text-align: center;
    background-color: ${Color.WHITE};
  }

  @media (max-width: ${BIG_BREAKPOINT}px) {
    background-color: ${Color.YELLOW};
    top: 49px;
  }
`;
