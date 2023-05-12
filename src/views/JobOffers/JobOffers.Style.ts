import styled from "styled-components";
import { BIG_BREAKPOINT, TABLET_BREAKPOINT } from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";

export const StyledWrapperSection = styled.section`
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
export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding-bottom: 15rem;
  margin: 1rem 2rem;
  width: 90%;
  border-bottom: 1px dotted ${Color.DARK_BLUE};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  svg {
    max-width: 18px;
    max-height: 18px;
  }
`;
export const CompanyLogo = styled.img`
  width: 50%;
  max-width: 10rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    max-width: none;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;
export const CompanyName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
export const CompanyDescription = styled.p`
  margin: 0.8rem 0;
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
    padding: 0.2rem;
  }

  ul {
    margin-bottom: 1rem;
    margin-left: 2rem;
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
