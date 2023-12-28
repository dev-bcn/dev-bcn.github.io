import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { Color } from "../../styles/colors";
import { BIG_BREAKPOINT } from "../../constants/BreakPoints";

interface ButtonProps {
  text: string;
  link: string;
  onClick: () => void;
  disabled?: boolean;
  target?: string;
  children?: ReactNode;
}

const doNothingHandler = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  event.preventDefault();
};

const StyledActionButton = styled.div`
  background-color: ${Color.LIGHT_BLUE};
  text-align: center;
  font-size: 1.3em;
  min-width: 200px;
  margin: 20px 5px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #000;
  padding: 10px 15px;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.5s;
  vertical-align: middle;

  @media (max-width: ${BIG_BREAKPOINT}px) {
    margin: 5px 1px;
  }

  :hover,
  :focus,
  :active {
    background-color: ${Color.DARK_BLUE};
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }

  a {
    text-decoration: none;
    text-shadow: 1px 1px 1px #000;
    color: white;
    display: block;
    text-transform: uppercase;
    vertical-align: middle;
  }

  small {
    font-weight: bold;
    font-size: 0.7em;
    color: ${Color.MAGENTA};
    text-shadow: none;
  }
`;

const Button: FC<ButtonProps> = ({
  text,
  link,
  onClick,
  disabled,
  target = "_blank",
  children,
}) => {
  return (
    <StyledActionButton className="hvr-bounce-in">
      <>
        <a
          onClick={disabled ? doNothingHandler : onClick}
          href={disabled ? "https://devbcn.com" : link}
          target={target}
          rel="noreferrer nofollow"
          aria-disabled={disabled}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            flexWrap: "wrap",
          }}
        >
          {children}
          <span>{`  ${text}`}</span>
        </a>
        {disabled && <small>opening January 1st</small>}
      </>
    </StyledActionButton>
  );
};
export default Button;
