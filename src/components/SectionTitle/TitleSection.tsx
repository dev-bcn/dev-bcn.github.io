import { BIG_BREAKPOINT, LARGE_BREAKPOINT } from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";
import { FC } from "react";
import styled from "styled-components";

interface ISectionTitleProps {
  title: string;
  subtitle: string;
  color: string;
}

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    flex-direction: row;
    justify-content: space-between;
    height: 10rem;
    padding: 0 2rem;
  }

  @media (min-width: ${LARGE_BREAKPOINT}px) {
    flex-direction: row;
    justify-content: space-between;
    height: 10rem;
    padding: 0 5rem;
  }
`;

const StyledTitle = styled.h1`
  color: ${(props) => (props.color ? props.color : Color.WHITE)};
  font-family: "Square 721 Regular", sans-serif;
  padding-bottom: 1.5rem;
  text-align: center;
  @media (min-width: ${BIG_BREAKPOINT}px) {
    width: 40%;
    text-align: left;
    padding-bottom: unset;
  }
`;

const StyledSubTitle = styled.p`
  color: ${(props) => (props.color ? props.color : Color.WHITE)};
  @media (min-width: 480px) {
    width: 70%;
  }
`;

const TitleSection: FC<ISectionTitleProps> = ({ title, subtitle, color }) => {
  return (
    <StyledTitleContainer>
      <StyledTitle color={color}>/ {title}</StyledTitle>
      <StyledSubTitle color={color}>{subtitle}</StyledSubTitle>
    </StyledTitleContainer>
  );
};

export default TitleSection;
