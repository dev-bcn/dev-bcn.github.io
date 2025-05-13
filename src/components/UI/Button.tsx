import React, { FC, ReactNode } from "react";
import { styled } from "styled-components";
import { Color } from "../../styles/colors";
import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import { clsx } from "clsx";

interface ButtonProps {
  text: string;
  subtext?: string;
  link: string;
  onClick: () => void;
  isDisabled?: boolean;
  isVisible?: boolean;
  target?: string;
  children?: ReactNode;
}

const doNothingHandler = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  event.preventDefault();
};

const StyledActionButton = styled.a`
  align-items: stretch;
  background-color: ${Color.LIGHT_BLUE};
  border-radius: 5px;
  box-shadow: 1px 1px 1px #000;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 1.3em;
  justify-content: center;
  margin: 20px 5px;
  min-width: 200px;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.5s;
  vertical-align: middle;

  &:hover,
  &:focus,
  &:active {
    background-color: ${Color.DARK_BLUE};
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }

  &.disabled {
    background-color: ${Color.LIGHT_BLUE};
    transition-duration: 0s;
    cursor: not-allowed;
  }

  span {
    color: white;
    display: block;
    font-size: 0.9rem;
    margin: 0.1rem 0;
    text-decoration: none;
    text-shadow: 1px 1px 1px #000;
    text-transform: uppercase;
    vertical-align: middle;
  }

  .subtext {
    font-weight: bold;
    font-size: 0.7em;
    color: ${Color.MAGENTA};
    text-shadow: none;
  }

  @media (max-width: ${BIG_BREAKPOINT}px) {
    margin: 5px 1px;
  }
`;

const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  text,
  subtext = "SOON",
  link,
  onClick,
  isDisabled,
  isVisible = true,
  target = "_blank",
  children,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <StyledActionButton
      className={clsx(
        !isDisabled && "anyul-hvr-bounce-in",
        isDisabled && "disabled",
      )}
      onClick={isDisabled ? doNothingHandler : onClick}
      href={isDisabled ? "#top" : link}
      target={target}
      rel="noreferrer nofollow"
      aria-disabled={isDisabled}
    >
      <span
        className={isDisabled ? "disabled" : "active"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          flexWrap: "wrap",
        }}
      >
        {children}
      </span>
      <span>{`  ${text}`}</span>
      {isDisabled && <span className="subtext">{subtext}</span>}
    </StyledActionButton>
  );
};

export default Button;
