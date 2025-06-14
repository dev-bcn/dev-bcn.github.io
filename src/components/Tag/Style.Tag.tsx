import { styled } from "styled-components";

export const StyledTagWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["borderColor"].includes(prop),
})<{ borderColor: string }>`
  border: ${({ borderColor }) => {
    return `1px solid ${borderColor}`;
  }};
  background: transparent;
  border-radius: 5px;
  margin: 0.25rem;
`;
export const StyledTagText = styled.p<{ color: string }>`
  padding: 0.25rem 0.5rem 0;
  margin-bottom: 0.3rem;
  color: ${({ color }) => {
    return color;
  }};
  font-size: 0.8rem;
`;
