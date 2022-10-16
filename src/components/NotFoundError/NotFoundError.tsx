import { Color } from '../../styles/colors';

import { FC } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 3rem;
`;

const StyledTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 1rem;
  background: ${Color.GREEN};
  font-weight: 600;
  width: fit-content;
`;

interface INotFoundErrorProps {
  message: string;
}

const NotFoundError: FC<INotFoundErrorProps> = ({ message }) => {
  return (
    <SectionWrapper color={Color.WHITE}>
      <StyledContainer className='Error404'>
        <StyledTitle>Error 404. {message} not found</StyledTitle>
        <StyledLink to={'/'}>Back to home</StyledLink>
      </StyledContainer>
    </SectionWrapper>
  );
};

export default NotFoundError;
