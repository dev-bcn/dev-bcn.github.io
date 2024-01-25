import { FC } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";

export type TLateralHashWithText = {
  color: string;
  text?: string;
};

const StyledRightSlashWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 1rem 0;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    padding: 3rem 0;
  }
`;

const StyledSlashText = styled.h1<{ color: string }>`
  color: ${({ color }) => {
    return color;
  }};
  white-space: nowrap;
  display: flex;
  justify-content: flex-start;
  width: 90%;
  overflow: hidden;
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 50%;
  }
`;

export const RightHashWithText: FC<React.PropsWithChildren<TLateralHashWithText>> = ({
  color,
  text,
}) => {
  return (
    <StyledRightSlashWrapper
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 2, ease: "easeIn" }}
    >
      {text ? (
        <StyledSlashText color={color}>
          {`${text}  ////////////////////////////////////////////////////////////////////////////////////////////////`}
        </StyledSlashText>
      ) : (
        <StyledSlashText color={color}>
          {`////////////////////////////////////////////////////////////////////////////////////////////////`}
        </StyledSlashText>
      )}
    </StyledRightSlashWrapper>
  );
};
