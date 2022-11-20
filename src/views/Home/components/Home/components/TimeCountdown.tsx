import { FC } from 'react';
import styled from 'styled-components';
import { Color,  } from '../../../../../styles/colors';

const TimeCountDownContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
`;

const StyledTimerContainer = styled.div`
  border-radius: 3rem;
  border: 1.5px solid ${Color.DARK_BLUE};
  height: 4.5rem;
  width: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: SpaceGrotesk-Light,sans-serif;
  box-shadow: 1px 1px 1px ${Color.LIGHT_BLUE};
  color: ${Color.WHITE};
`;

const StyleLine = styled.div`
  width: 0.75rem;
  background: ${Color.DARK_BLUE};
  height: 1.5px;
`;

const StyledTimerLetters = styled.p`
  font-size: 0.75rem;
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
    return (
      <TimeCountDownContainer>
        <StyledTimerContainer>
          <p>0</p>
          <StyledTimerLetters>DAYS</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <p>0</p>
          <StyledTimerLetters>HOURS</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <p>0</p>
          <StyledTimerLetters>MINUTES</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <p>0</p>
          <StyledTimerLetters>SECONDS</StyledTimerLetters>
        </StyledTimerContainer>
      </TimeCountDownContainer>
    );
  } else {
    return (
      <TimeCountDownContainer>
        <StyledTimerContainer>
          <p>{days}</p>
          <StyledTimerLetters>DAYS</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <p>{hours}</p>
          <StyledTimerLetters>HOURS</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <p>{minutes}</p>
          <StyledTimerLetters>MINUTES</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <p>{seconds}</p>
          <StyledTimerLetters>SECONDS</StyledTimerLetters>
        </StyledTimerContainer>
      </TimeCountDownContainer>
    );
  }
};

export default TimeCountDown;
