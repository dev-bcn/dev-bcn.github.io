import styled from "styled-components";
import {
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from "../../../constants/BreakPoints";
import { Color } from "../../../styles/colors";

export const StyledSpeakerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10rem;
  padding: 0 1rem 1rem 1rem;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    width: 12rem;
  }
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 15rem;
  }
`;
export const StyledSpeakerImageContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
export const StyledSpeakerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
`;
export const StyledImageAnimation = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.25s linear;
  background-color: rgba(239, 71, 111, 0.5);

  &:hover {
    opacity: 1;
  }
`;
export const StyledSpeakerTitle = styled.h5`
  font-family: "DejaVu Sans ExtraLight", sans-serif;
  font-weight: bold;
  color: ${Color.LIGHT_BLUE};
  font-size: 1.1em;
  padding: 5px 0 1px;
`;
export const StyledSpeakerText = styled.p`
  color: ${Color.WHITE};
  font-family: "Square 721 Regular", sans-serif;
  text-align: left;
  font-size: 0.9em;
`;
