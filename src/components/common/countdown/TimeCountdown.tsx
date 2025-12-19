import React from "react";

import {
  StyledTimerContainer,
  StyledTimerNumber,
  StyledTimerLetters,
  StyleLine,
  TimeCountDownContainer,
} from "./countdown.style";

import type { FC } from "react";

interface TimeCountDownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeCountDown: FC<React.PropsWithChildren<TimeCountDownProps>> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <TimeCountDownContainer id="countdown-ongoing">
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
};

export default TimeCountDown;
