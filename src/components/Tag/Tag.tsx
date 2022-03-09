import { FC } from 'react';
import styled from 'styled-components';
import {
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_PINK,
  COLOR_WHITE,
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
  let color = null;
  switch (text) {
    case 'Java':
      color = COLOR_PINK;
      break;
    case 'TestContainers':
      color = COLOR_BLUE;
      break;
    case 'MicroShield testing':
      color = COLOR_GREEN;
      break;
    case 'Kubernettes':
      color = COLOR_WHITE;
      break;
    default:
      color = COLOR_WHITE;
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
