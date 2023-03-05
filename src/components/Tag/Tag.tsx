import { FC } from "react";
import { Color } from "../../styles/colors";
import { StyledTagText, StyledTagWrapper } from "./Style.Tag";

type TagProps = {
  text: string;
};

const tagColors = Object.keys(Color).filter((item) => {
  // @ts-ignore
  return isNaN(item);
});

const colorTagByText = (text: string) => {
  let color;
  switch (text) {
    case "Java":
    case "java":
      color = Color.LIGHT_BLUE;
      break;
    case "Cloud":
      color = Color.YELLOW;
      break;
    case "JVM":
      color = Color.MAGENTA;
      break;
    case "Kubernetes":
      color = Color.GREEN;
      break;
    default:
      color = tagColors[Math.floor(Math.random() * tagColors.length)];
      break;
  }
  return color;
};

export const Tag: FC<TagProps> = ({ text }) => {
  const color = colorTagByText(text);
  return (
    <StyledTagWrapper borderColor={color}>
      <StyledTagText color={Color.DARK_BLUE}>{text}</StyledTagText>
    </StyledTagWrapper>
  );
};
