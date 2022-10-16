import styled from "styled-components";

export const StyledAboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 1rem 0 1rem;
`;
export const StyledAboutImage = styled.img`
  width: 100%;
  max-height: 20rem;
`;
export const StyledAboutName = styled.h4<{ color: string }>`
  padding-top: 0.25rem;
  color: ${({color}) => {
    return color;
}};
`;
export const StyledAboutJob = styled.p<{ color: string }>`
  color: ${({color}) => {
    return color;
}};
  font-size: 0.75rem;
`;
export const StyledSocialIconsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.25rem 0;
`;
