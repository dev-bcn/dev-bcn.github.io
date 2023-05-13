import { FC, ReactNode } from "react";
import { MAX_WIDTH } from "../../constants/BreakPoints";
import styled from "styled-components";

const StyledSectionWrapper = styled.div<{
  color: string;
  paddingBottom: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  height: 100%;
  background: ${({ color }) => color};
`;

const StyledInnerWrapper = styled.div<{ marginTop: number }>`
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

const SectionWrapper: FC<ISectionWrapperProps> = ({
  children,
  color,
  marginTop = 0,
  paddingBottom = 0,
}) => {
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

export default SectionWrapper;
