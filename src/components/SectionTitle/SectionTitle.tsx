import { FC } from 'react';
import styled from 'styled-components';
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
`;

const StyledTitleBody = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 56.25rem;
  }
`;

const StyledTitle = styled.h1`
  color: ${(props) => (props.color ? props.color : COLOR_WHITE)};
  font-family: SpaceGrotesk;
  padding-bottom: 1.5rem;
  @media (min-width: 480px) {
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

const SectionHeader: FC<ISectionTitleProps> = ({ title, subtitle, color }) => {
  return (
    <StyledTitleContainer>
      <StyledTitleBody>
        <StyledTitle color={color}>/ {title}</StyledTitle>
        <StyledSubTitle>{subtitle}</StyledSubTitle>
      </StyledTitleBody>
    </StyledTitleContainer>
  );
};

export default SectionHeader;
