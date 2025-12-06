import React, {FC} from "react";
import {
    StyledTimerContainer,
    StyledTimerLetters,
    StyleLine,
    TimeCountDownContainer
} from "./countdown.style";

const CountDownCompleted: FC = () => {
    return <TimeCountDownContainer id="countdown-completed">
        <StyledTimerContainer>
            <p>0</p>
            <StyledTimerLetters>DAYS</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine/>
        <StyledTimerContainer>
            <p>0</p>
            <StyledTimerLetters>HOURS</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine/>
        <StyledTimerContainer>
            <p>0</p>
            <StyledTimerLetters>MINUTES</StyledTimerLetters>
        </StyledTimerContainer>
        <StyleLine/>
        <StyledTimerContainer>
            <p>0</p>
            <StyledTimerLetters>SECONDS</StyledTimerLetters>
        </StyledTimerContainer>
    </TimeCountDownContainer>;
};

export default CountDownCompleted;