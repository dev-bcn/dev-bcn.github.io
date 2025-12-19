import { styled } from "styled-components";

import { MAX_WIDTH } from "@constants/BreakPoints";

import type { FC, ReactNode } from "react";

const StyledSectionWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["paddingBottom"].includes(prop),
})<{
  color: string;
  paddingBottom: number;
}>`
  align-items: center;
  background: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: start;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
`;

const StyledInnerWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["marginTop"].includes(prop),
})<{ marginTop: number }>`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: ${MAX_WIDTH}px;
  margin-top: ${({ marginTop }) => {
    return `${marginTop}rem`;
  }};
`;

interface ISectionWrapperProps {
  color: string;
  marginTop?: number;
  paddingBottom?: number;
  children: ReactNode;
}

export const SectionWrapper: FC<
  React.PropsWithChildren<ISectionWrapperProps>
> = ({ children, color, marginTop = 0, paddingBottom = 0 }) => {
  return (
    <StyledSectionWrapper
      color={color}
      paddingBottom={paddingBottom}
      className="SectionWrapper"
    >
      <StyledInnerWrapper marginTop={marginTop} className="InnerSectionWrapper">
        {children}
      </StyledInnerWrapper>
    </StyledSectionWrapper>
  );
};
