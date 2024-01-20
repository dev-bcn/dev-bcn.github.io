import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import { StyledBlueHamburger } from "./Style.Navigation";
import BlueHamburgerIcon from "../../assets/images/BlueHamburgerIcon.svg";
import { useWindowSize } from "react-use";

export const HamburgerMenu = (props: { onClick: () => void }) => {
  const { width } = useWindowSize();

  return (
    <>
      {width <= BIG_BREAKPOINT && (
        <StyledBlueHamburger
          alt="Navigation Menu"
          src={BlueHamburgerIcon}
          whileTap={{ scale: 0.8 }}
          onClick={props.onClick}
        />
      )}
    </>
  );
};
