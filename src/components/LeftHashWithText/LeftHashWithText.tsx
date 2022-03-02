import { FC } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TLateralHashWithText } from '../RightHashWithText/RightHashWithText';
import { MOBILE_BREAKPOINT } from '../../constants/BreakPoints';

const StyledLeftSlashWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding: 1rem 0;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    padding: 3rem 0;
  }
`;

const StyledSlashText = styled.h1<{ color: string }>`
  color: ${({ color }) => {
    return color;
  }};
  display: flex;
  justify-content: flex-end;
  white-space: nowrap;
  width: 75%;
  overflow: hidden;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 50%;
  }
`;

export const LeftHashWithText: FC<TLateralHashWithText> = ({ color, text }) => {
  return (
    <StyledLeftSlashWrapper
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 3, ease: 'easeIn' }}
    >
      {text ? (
        <StyledSlashText color={color}>
          {`//////////////////////////////////////////////////////////////////////////////////////////////// ${text}`}
        </StyledSlashText>
      ) : (
        <StyledSlashText color={color}>
          {`////////////////////////////////////////////////////////////////////////////////////////////////`}
        </StyledSlashText>
      )}
    </StyledLeftSlashWrapper>
  );
};
