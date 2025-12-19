import { motion } from "motion/react";
import { styled } from "styled-components";

import { MOBILE_BREAKPOINT } from "@constants/BreakPoints";

import type { TLateralHashWithText } from "../RightHashWithText/RightHashWithText";
import type { FC } from "react";

const StyledLeftSlashWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  text-transform: none;
  padding: 1rem 0;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    padding: 1.5rem 0;
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

export const LeftHashWithText: FC<
  React.PropsWithChildren<TLateralHashWithText>
> = ({ color, text }) => {
  return (
    <StyledLeftSlashWrapper
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 3, ease: "easeIn" }}
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
