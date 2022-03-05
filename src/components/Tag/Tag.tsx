import { FC } from "react";
import styled from "styled-components";

type TagProps = {
  text: string;
  textColor: string;
};

const StyledTagWrapper = styled.div<{ borderColor: string }>`
  border: ${({ borderColor }) => {
    return `1px solid ${borderColor}`;
  }};
  background: transparent;
`;

const StyledTagText = styled.p<{ color: string }>`
  padding: 0.25rem 0.5rem;
`;

export const Tag: FC<TagProps> = ({ text, textColor }) => {
  return (
    <StyledTagWrapper borderColor={textColor}>
      <StyledTagText color={textColor}>{text}</StyledTagText>
    </StyledTagWrapper>
  );
};