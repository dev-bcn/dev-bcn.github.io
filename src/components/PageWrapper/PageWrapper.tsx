import { BIG_BREAKPOINT } from '../../constants/BreakPoints';
import { FC } from 'react';
import styled from 'styled-components';

const StyledPageWrapper = styled.div`
  padding-bottom: 20rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 10rem;
  }
`;

interface IPageWrapperProps {}

const PageWrapper: FC<IPageWrapperProps> = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
