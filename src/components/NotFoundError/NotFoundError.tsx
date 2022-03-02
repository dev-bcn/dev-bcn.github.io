import { COLOR_GREEN, COLOR_WHITE } from '../../styles/colors';

import { FC } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  background: ${COLOR_GREEN};
  font-weight: 600;
`;

interface INotFoundErrorProps {
  message: string;
}

const NotFoundError: FC<INotFoundErrorProps> = ({ message }) => {
  return (
    <SectionWrapper color={COLOR_WHITE}>
      <StyledContainer>
        <StyledTitle>Error 404. {message} not found</StyledTitle>
        <StyledLink to={'/'}>Back to home</StyledLink>
      </StyledContainer>
    </SectionWrapper>
  );
};

export default NotFoundError;
