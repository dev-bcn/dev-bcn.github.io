import { FC } from "react";
import { Color } from "../../styles/colors";
import { StyledTagText, StyledTagWrapper } from "./Style.Tag";

type TagProps = {
  text: string;
  textColor?: string;
};

type ColorMap = {
  [key: string]: string;
};

const colorMap: ColorMap = {
  java: Color.DARK_BLUE,
  jvm: Color.DARK_BLUE,
  jdk: Color.DARK_BLUE,
  scala: Color.DARK_BLUE,
  groovy: Color.DARK_BLUE,
  kotlin: Color.DARK_BLUE,
  cloud: Color.YELLOW,
  kubernetes: Color.MAGENTA,
  agile: Color.GREEN,
  agility: Color.GREEN,
  microservices: Color.GREEN,
  javascript: Color.YELLOW,
  devops: Color.PINK,
  testing: Color.GRAY,
  tdd: Color.GRAY,
  ai: Color.BROWN,
  machine: Color.PURPLE,
  observability: Color.SKY_BLUE,
  go: Color.WHITE,
  rust: Color.WHITE,
  python: Color.WHITE,
  coding: Color.RED,
  code: Color.RED,
};

export const colorTagByText = (text: string): string => {
  const lowercaseText = text.toLowerCase();
  for (const [key, value] of Object.entries(colorMap)) {
    if (lowercaseText.includes(key)) {
      return value;
    }
  }
  return "#000000";
};

export const Tag: FC<TagProps> = ({ text, textColor }) => {
  const color = colorTagByText(text);
  return (
    <StyledTagWrapper borderColor={color}>
      <StyledTagText color={textColor ? textColor : color}>
        {text}
      </StyledTagText>
    </StyledTagWrapper>
  );
};
