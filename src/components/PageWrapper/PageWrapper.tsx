import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import { FC, ReactNode } from "react";
import { styled } from "styled-components";

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
