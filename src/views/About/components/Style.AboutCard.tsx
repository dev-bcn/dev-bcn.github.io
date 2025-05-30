import { styled, keyframes } from "styled-components";

const revealAnimation = keyframes`
  from {
    opacity: 0;
    translate: 0 100px;
  }
  50% {
    opacity: .5;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }`;

export const StyledAboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 1rem 0 1rem;
`;
export const StyledAboutImage = styled.img`
  width: 100%;
  max-height: 20rem;
  aspect-ratio: 1/1;
  border-radius: 30% 70% 70% 30% / 30% 29% 71% 70%;
  animation: ${revealAnimation} 0.2s ease-in-out;
  animation-timeline: view();
  animation-range: entry 5% cover 30%;
`;
export const StyledAboutName = styled.h4<{ color: string }>`
  padding-top: 0.25rem;
  color: ${({ color }) => {
    return color;
  }};
`;
export const StyledAboutJob = styled.p<{ color: string }>`
  color: ${({ color }) => {
    return color;
  }};
  font-size: 0.75rem;
`;
export const StyledSocialIconsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.25rem 0;
`;
