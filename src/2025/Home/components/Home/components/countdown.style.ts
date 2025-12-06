import { styled } from "styled-components";
import { Color } from "../../../../../styles/colors";

export const TimeCountDownContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.2rem;
`;
export const StyledTimerContainer = styled.div`
  align-items: center;
  background-color: rgba(50, 50, 50, 0.5);
  border-radius: 3rem;
  border: 1.5px solid ${Color.DARK_BLUE};
  box-shadow: 1px 1px 1px ${Color.LIGHT_BLUE};
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Square 721 Regular", sans-serif;
  font-size: 1.5em;
  height: 5rem;
  justify-content: center;
  width: 5rem;
`;
export const StyleLine = styled.div`
  width: 0.75rem;
  background: ${Color.DARK_BLUE};
  height: 1.5px;
`;
export const StyledTimerLetters = styled.p`
  font-size: 0.75rem;
`;
