import { Color } from "@styles/colors";

import { StyledTagText, StyledTagWrapper } from "./Style.Tag";

import type { FC } from "react";

type TagProps = {
  text: string;
  textColor?: string;
};

type ColorMap = {
  [key: string]: string;
};

const colorMap: ColorMap = {
  agile: Color.GREEN,
  agility: Color.GREEN,
  ai: Color.BROWN,
  architecture: Color.RED,
  cloud: Color.YELLOW,
  code: Color.RED,
  coding: Color.RED,
  devops: Color.PINK,
  "functional programming": Color.PURPLE,
  functions: Color.SKY_BLUE,
  go: Color.WHITE,
  graalvm: Color.GREEN,
  groovy: Color.DARK_BLUE,
  java: Color.SKY_BLUE,
  javascript: Color.YELLOW,
  jbang: Color.MAGENTA,
  jdk: Color.DARK_BLUE,
  jvm: Color.DARK_BLUE,
  kotlin: Color.DARK_BLUE,
  kubernetes: Color.MAGENTA,
  lambda: Color.MAGENTA,
  lambdas: Color.MAGENTA,
  machine: Color.PURPLE,
  maven: Color.ORANGE,
  microservices: Color.GREEN,
  microservice: Color.GREEN,
  observability: Color.SKY_BLUE,
  openjdk: Color.WHITE,
  opentelemetry: Color.ORANGE,
  python: Color.WHITE,
  quarkus: Color.PURPLE,
  rabbitmq: Color.RED,
  react: Color.ORANGE,
  "react native": Color.SKY_BLUE,
  redux: Color.ORANGE,
  rust: Color.WHITE,
  scala: Color.DARK_BLUE,
  security: Color.GREEN,
  serverless: Color.BROWN,
  tdd: Color.GRAY,
  testing: Color.GRAY,
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

export const Tag: FC<React.PropsWithChildren<TagProps>> = ({
  text,
  textColor,
}) => {
  const color = colorTagByText(text);
  return (
    <StyledTagWrapper borderColor={color}>
      <StyledTagText color={textColor ? textColor : color}>
        {text}
      </StyledTagText>
    </StyledTagWrapper>
  );
};
