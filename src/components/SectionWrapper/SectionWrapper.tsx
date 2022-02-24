import { FC } from 'react';
import styled from 'styled-components';

const StyledSectionWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: ${({ color }) => {
    return color;
  }};
`;

interface ISectionWrapperProps {
  color: string;
}

const SectionWrapper: FC<ISectionWrapperProps> = ({ children, color }) => {
  return <StyledSectionWrapper color={color}>{children}</StyledSectionWrapper>;
};

export default SectionWrapper;
