import {BIG_BREAKPOINT} from "src/constants/BreakPoints";
import {StyledBlueHamburger} from "./Style.Navigation";
import {useWindowSize} from "react-use";

export const HamburgerMenu = (props: { onClick: () => void }) => {
  const { width } = useWindowSize();

  return (
    <>
      {width <= BIG_BREAKPOINT && (
        <StyledBlueHamburger
          alt="Navigation Menu"
          src="images/BlueHamburgerIcon.svg"
          whileTap={{ scale: 0.8 }}
          onClick={props.onClick}
        />
      )}
    </>
  );
};
