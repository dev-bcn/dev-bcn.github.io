import React, {FC} from 'react';
import {
    StyledTimerContainer,
    StyledTimerLetters,
    StyleLine,
    TimeCountDownContainer
} from "./countdown.style";

type TimeCountDownProps = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const TimeCountDown: FC<React.PropsWithChildren<TimeCountDownProps>> = ({
                                                                            days,
                                                                            hours,
                                                                            minutes,
                                                                            seconds,
                                                                        }) => {
    return (
        <TimeCountDownContainer id="countdown-ongoing">
            <StyledTimerContainer>
                <p>{days}</p>
                <StyledTimerLetters>DAYS</StyledTimerLetters>
            </StyledTimerContainer>
            <StyleLine/>
            <StyledTimerContainer>
                <p>{hours}</p>
                <StyledTimerLetters>HOURS</StyledTimerLetters>
            </StyledTimerContainer>
            <StyleLine/>
            <StyledTimerContainer>
                <p>{minutes}</p>
                <StyledTimerLetters>MINUTES</StyledTimerLetters>
            </StyledTimerContainer>
            <StyleLine/>
            <StyledTimerContainer>
                <p>{seconds}</p>
                <StyledTimerLetters>SECONDS</StyledTimerLetters>
            </StyledTimerContainer>
        </TimeCountDownContainer>
    );
};

export default TimeCountDown;
