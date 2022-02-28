import { FC } from 'react';
import styled from 'styled-components';
import { BIG_BREAKPOINT, TABLET_BREAKPOINT } from '../../constants/BreakPoints';
import { COLOR_WHITE } from '../../styles/colors';

interface ISectionTitleProps {
  title: string;
  subtitle: string;
  color: string;
}

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: unset;
  }
`;

const StyledTitleBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5rem;
    align-items: center;
  }
  @media (min-width: ${BIG_BREAKPOINT}px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10rem;
    align-items: center;
  }
`;

const StyledTitle = styled.h1`
  color: ${(props) => (props.color ? props.color : COLOR_WHITE)};
  font-family: SpaceGrotesk;
  padding-bottom: 1.5rem;
  text-align: center;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    width: 40%;
    text-align: left;
    padding-bottom: unset;
  }
`;

const StyledSubTitle = styled.p`
  color: ${(props) => (props.color ? props.color : COLOR_WHITE)};
  @media (min-width: 480px) {
    width: 40%;
  }
`;

const TitleSection: FC<ISectionTitleProps> = ({ title, subtitle, color }) => {
  return (
    <StyledTitleContainer>
      <StyledTitleBody>
        <StyledTitle color={color}>/ {title}</StyledTitle>
        <StyledSubTitle color={color}>{subtitle}</StyledSubTitle>
      </StyledTitleBody>
    </StyledTitleContainer>
  );
};

export default TitleSection;
