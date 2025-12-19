import { styled } from "styled-components";

import { BIG_BREAKPOINT } from "../../constants/BreakPoints";

import type { FC, ReactNode } from "react";

const StyledPageWrapper = styled.div`
  padding-bottom: 20rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    padding-bottom: 10rem;
  }
`;

interface IPageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<React.PropsWithChildren<IPageWrapperProps>> = ({
  children,
}) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
