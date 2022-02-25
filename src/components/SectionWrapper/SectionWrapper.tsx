import { FC } from 'react';
import { MAX_WIDTH } from '../../constants/BreakPoints';
import styled from 'styled-components';

const StyledSectionWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  background: ${({ color }) => {
    return color;
  }};
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  max-width: ${MAX_WIDTH}px;
`;

interface ISectionWrapperProps {
  color: string;
}

const SectionWrapper: FC<ISectionWrapperProps> = ({ children, color }) => {
  return (
    <StyledSectionWrapper color={color} className='SectionWrapper'>
      <StyledInnerWrapper className='InnerSectionWrapper'>
        {children}
      </StyledInnerWrapper>
    </StyledSectionWrapper>
  );
};

export default SectionWrapper;
