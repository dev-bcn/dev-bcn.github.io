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
`;

const StyleLine = styled.div`
  width: .75rem;
  background: ${COLOR_YELLOW};
  height: 1.5px;
`;

const StyledTimerNumber = styled.p`
  color: ${COLOR_WHITE};
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
  const Completionist = () => <span>You are good to go!</span>;

  if (completed) {
    // los estilos pero con todo Oeros
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      // aqiu le pongo los estilos
      <TimeCountDownContainer>
        <StyledTimerContainer>
          <StyledTimerNumber>{days}</StyledTimerNumber>
          <StyledTimerNumber>DAYS</StyledTimerNumber>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <StyledTimerNumber>{hours}</StyledTimerNumber>
          <StyledTimerNumber>HOURS</StyledTimerNumber>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <StyledTimerNumber>{minutes}</StyledTimerNumber>
          <StyledTimerNumber>MINUTES</StyledTimerNumber>
        </StyledTimerContainer>
        <StyleLine />
        <StyledTimerContainer>
          <StyledTimerNumber>{seconds}</StyledTimerNumber>
          <StyledTimerNumber>SECONDS</StyledTimerNumber>
        </StyledTimerContainer>
      </TimeCountDownContainer>
    );
  }
};

export default TimeCountDown;
