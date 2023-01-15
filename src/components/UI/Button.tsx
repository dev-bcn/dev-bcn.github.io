import { FC } from "react";
import styled from "styled-components";
import { Color } from "../../styles/colors";
import { BIG_BREAKPOINT } from "../../constants/BreakPoints";

interface ButtonProps {
  text: string;
  link: string;
  onClick: any;
  disabled?: boolean;
}

const StyledActionButton = styled.div`
  background-color: ${Color.LIGHT_BLUE};
  text-align: center;
  font-size: 1.3em;
  min-width: 200px;
  margin: 20px 1px;
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
    transform: scale(1.2);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    margin: 20px 50px;
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

const Button: FC<ButtonProps> = ({ text, link, onClick, disabled }) => {
  return (
    <StyledActionButton className="hvr-bounce-in">
      <a onClick={onClick} href={link} target="_blank" rel="noreferrer nofollo">
        {text}
        {disabled && (
          <>
            <br />
            <small>opening January 1st</small>
          </>
        )}
      </a>
    </StyledActionButton>
  );
};
export default Button;
