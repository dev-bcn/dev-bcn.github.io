import styled from "styled-components";
import {motion} from "framer-motion";
import {BIG_BREAKPOINT, TABLET_BREAKPOINT} from "../../../constants/BreakPoints";
import {Color} from "../../../styles/colors";

export const StyledSpeakersSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    @media (min-width: ${TABLET_BREAKPOINT}px) {
        padding: 0 5rem;
    }
    @media (min-width: ${BIG_BREAKPOINT}px) {
        padding: 0 10rem;
    }
`;
export const StyledLessIcon = styled.img`
    position: absolute;
    left: -1rem;
    top: 2rem;
    height: 5rem;

    @media (min-width: ${BIG_BREAKPOINT}px) {
        height: 10rem;
    }
`;
export const StyledMoreIcon = styled.img`
    position: absolute;
    right: -1rem;
    top: 2rem;
    height: 5rem;

    @media (min-width: ${BIG_BREAKPOINT}px) {
        height: 10rem;
    }
`;
export const StyledContainerLeftSlash = styled(motion.div)<{
    positionPercentage: string;
}>`
    position: absolute;
    top: ${({positionPercentage}) => {
        return positionPercentage;
    }};
    left: 0;
    height: 2rem;
    width: 50%;
    opacity: 0.2;
`;
export const StyledContainerRightSlash = styled(motion.div)<{
    positionPercentage: string;
}>`
    position: absolute;
    top: ${({positionPercentage}) => {
        return positionPercentage;
    }};
    right: 0;
    height: 2rem;
    width: 50%;
    opacity: 0.2;
`;
export const StyledSlash = styled(motion.p)<{ color: string }>`
    font-family: "Square 721 Regular", sans-serif;
    color: ${({color}) => {
        return color;
    }};
    font-size: 2rem;
    overflow-y: hidden;
    height: 100%;
`;
export const StyledWaveContainer = styled.div`
    background: ${Color.WHITE};
    overflow-y: hidden;
    height: 8rem;
    width: 100%;
    @media (min-width: ${TABLET_BREAKPOINT}px) {
        height: 16rem;
    }
`;
export const SpeakersCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 3rem 0;
    justify-content: center;
    z-index: 1;
    @media (min-width: ${TABLET_BREAKPOINT}px) {
        padding: 5rem 0;
    }
`;