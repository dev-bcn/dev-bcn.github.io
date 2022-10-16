import {FC} from 'react';
import {Color} from '../../styles/colors';
import {StyledTagText, StyledTagWrapper} from "./Style.Tag";

type TagProps = {
  text: string;
};

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
