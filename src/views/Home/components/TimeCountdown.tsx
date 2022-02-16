import { FC } from "react";
import styled from "styled-components";
import { COLOR_WHITE, COLOR_YELLOW } from "../../../styles/colors";

const TimeCountDownContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
`;

const StyledTimerContainer = styled.div`
  border-radius: 3rem;
  border: 1.5px solid ${COLOR_YELLOW};
  height: 2.875rem;
  width: 2.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: SpaceGrotesk-Light;
  color: ${COLOR_WHITE};
`;

const StyleLine = styled.div`
  width: .75rem;
  background: ${COLOR_YELLOW};
  height: 1.5px;
`;

const StyledTimerNumber = styled.p`
  font-size: 14px;
`;

const StyledTimerLetters = styled.p`
  font-size: 8px;
`;

type TimeCountDownProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

const TimeCountDown: FC<TimeCountDownProps> = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {

  if (completed) {
    // los estilos pero con todo Oeros
    return (
      <TimeCountDownContainer>
        <StyledTimerContainer>
          <StyledTimerNumber>0</StyledTimerNumber>
          <StyledTimerLetters>DAYS</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <StyledTimerNumber>0</StyledTimerNumber>
          <StyledTimerLetters>HOURS</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <StyledTimerNumber>0</StyledTimerNumber>
          <StyledTimerLetters>MINUTES</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <StyledTimerNumber>0</StyledTimerNumber>
          <StyledTimerLetters>SECONDS</StyledTimerLetters>
        </StyledTimerContainer>
      </TimeCountDownContainer>
    )
  } else {
    // Render a countdown
    
    return (
      // aqiu le pongo los estilos
      <TimeCountDownContainer>
        <StyledTimerContainer>
          <StyledTimerNumber>{days}</StyledTimerNumber>
          <StyledTimerLetters>DAYS</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <StyledTimerNumber>{hours}</StyledTimerNumber>
          <StyledTimerLetters>HOURS</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <StyledTimerNumber>{minutes}</StyledTimerNumber>
          <StyledTimerLetters>MINUTES</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <StyledTimerNumber>{seconds}</StyledTimerNumber>
          <StyledTimerLetters>SECONDS</StyledTimerLetters>
        </StyledTimerContainer>
      </TimeCountDownContainer>
    );
  }
};

export default TimeCountDown;
