import styled from "styled-components";
import {BIG_BREAKPOINT, TABLET_BREAKPOINT} from "../../constants/BreakPoints";

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
export const StyledScheduleContainer = styled.div`
  padding-top: 3rem;
  width: 100%;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding-top: 5rem;
  }
`;
export const StyledTracksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;
export const StyledTrack = styled.div<{
  background: string;
  color: string;
  width: string;
}>`
  width: ${({ width }) => {
    return width;
  }};
  padding: 0.5rem 0;
  background: ${({ background }) => {
    return background;
  }};
  color: ${({ color }) => {
    return color;
  }};
  font-family: "Square 721 Regular", sans-serif;
  margin-top: 1rem;
`;
export const StyledWelcomerImage = styled.div`
  width: 100%;
  height: 5rem;
    background-image: url("/images/SpeakersWelcomer.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
  margin-top: 1rem;
`;
export const StyledWelcomerTextContainer = styled.div`
  position: absolute;
  bottom: 0.25rem;
  left: 0.5rem;
`;
export const StyledWelcomerText = styled.p<{ color: string }>`
  color: ${({ color }) => {
    return color;
  }};
  font-family: "Square 721 Regular", sans-serif;
  text-align: start;
`;
export const StyledWelcomerTextLink = styled.p<{ color: string }>`
  color: ${({ color }) => {
    return color;
  }};
  font-family: "Square 721 Regular", sans-serif;
  text-align: start;

  &:hover {
    text-decoration: underline;
  }
`;
export const StyledPlanningImage = styled.div`
  width: 100%;
  height: 10rem;
    background-image: url("/images/SpeakersPlanning.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
  margin-top: 1rem;
`;
export const StyledAvatarContainer = styled.div`
  width: 80%;
  margin-top: 1rem;
  position: relative;

  @media only screen and (min-width: ${TABLET_BREAKPOINT}px) {
    width: 30%;

    position: relative;
  }
`;
export const StyledAvatarImage = styled.img`
  width: 100%;
  height: auto;
`;
