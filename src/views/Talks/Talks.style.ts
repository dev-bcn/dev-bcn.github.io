import styled from "styled-components";
import { Color } from "../../styles/colors";
import { BIG_BREAKPOINT, TABLET_BREAKPOINT } from "../../constants/BreakPoints";
import { Link } from "react-router-dom";

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
export const StyledSessionText = styled.div`
  color: ${Color.WHITE};
  padding: 0.5rem 0;
  font-size: 0.9em;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
    text-align: left;
  }
`;
export const StyledSessionCard = styled.div`
  align-items: center;
  /*min-width: 20%;
  max-width: 50%;*/
  margin: 5px 3rem 3rem;
  flex-grow: 2;
  background: linear-gradient(
    90deg,
    rgba(0, 36, 84, 0.2) 0%,
    rgba(71, 152, 202, 0.2) 100%
  );
  border-radius: 10px;
  padding: 15px;
  @media (min-width: 800px) {
    text-align: left;
    max-width: 900px;
    margin-bottom: 1.5rem;
  }
`;
export const StyledTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`;
export const StyledTalkTitle = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: ${Color.YELLOW};
  padding: 5px 7px;
  transition-duration: 0.5s;
  margin-bottom: 10px;

  :hover,
  :focus,
  :active {
    color: ${Color.WHITE};
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }
`;
export const StyledTrackInfo = styled.h2`
   {
    color: ${Color.DARK_BLUE};
    margin-top: 50px;
    margin-left: 40px;
    margin-bottom: 20px;
  }
`;
export const StyledSessionSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
`;

export const StyledTalkSpeaker = styled.p`
  font-size: 1em;
  a:before {
    content: "🧑🏻‍💻 ";
  }
  a {
    text-decoration: none;
    color: ${Color.WHITE};
  }
  a:hover {
    color: ${Color.DARK_BLUE};
  }
`;
