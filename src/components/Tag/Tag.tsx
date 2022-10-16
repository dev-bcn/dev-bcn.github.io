import { FC } from 'react';
import styled from 'styled-components';
import {
  Color
} from '../../styles/colors';

type TagProps = {
  text: string;
};

const StyledTagWrapper = styled.div<{ borderColor: string }>`
  border: ${({ borderColor }) => {
    return `1px solid ${borderColor}`;
  }};
  background: transparent;
  border-radius: 5px;
  margin: 0.25rem;
`;

const StyledTagText = styled.p<{ color: string }>`
  padding: 0.25rem 0.5rem;
  color: ${({ color }) => {
    return color;
  }};
  font-size: 0.75rem;
`;

const colorTagByText = (text: string) => {
  let color;
  switch (text) {
    case 'Java':
      color = Color.PINK;
      break;
    case 'TestContainers':
      color = Color.BLUE;
      break;
    case 'MicroShield testing':
      color = Color.GREEN;
      break;
    case 'Kubernetes':
      color = Color.WHITE;
      break;
    default:
      color = Color.WHITE;
      break;
  }
  return color;
};

export const Tag: FC<TagProps> = ({ text }) => {
  const color = colorTagByText(text);
  return (
    <StyledTagWrapper borderColor={color}>
      <StyledTagText color={color}>{text}</StyledTagText>
    </StyledTagWrapper>
  );
};
