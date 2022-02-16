import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
import { COLOR_PINK, COLOR_YELLOW } from "../../styles/colors";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import { NavLink } from "react-router-dom";
import { navigationItems } from "./NavigationData";
import TicketsImage from "../../assets/images/TicketsImage.svg";
import { useWindowSize } from "react-use";
import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import { StyledMenuIcon } from "../../views/Home/Home";

const StyledNavigationContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  z-index: 1;
  transform: translate3d(0px, 0px, 0px);
  transition: transform 0.5s ease 0s;
`;

const StyledNavigation = styled(motion.nav)`
  width: 100vw;
  background: ${COLOR_PINK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledClipPath = styled(motion.div)`
  clip-path: polygon(100% 0, 0 0, 0 100%);
  width: 40vw;
  background: ${COLOR_PINK};
`;

const StyledLink = styled(NavLink)`
  padding: 0.5rem;
  color: ${COLOR_YELLOW};
  text-decoration: none;
  cursor: pointer;
  font-family: SpaceGrotesk-Bold;
  &.${(props) => props.activeClassName} {
    &:before {
      content: "/   ";
      font-family: SpaceGrotesk-Bold;
    }
  }
`;

const StyledNavLinkHighlighted = styled(motion.a)`
  text-decoration: none;
  margin: 0.5rem;
  display: flex;
  cursor: pointer;
`;

const StyledNavLinkHighlightedImage = styled.img`
  width: 9rem;
  height: auto;
`;

type TNavigationProps = {
  isOpened: boolean;
  setMenu: () => void;
};

const Navigation: FC<TNavigationProps> = ({ isOpened, setMenu }) => {
  const { width } = useWindowSize();

  return (
    <AnimatePresence>
      {isOpened && (
        <StyledNavigationContainer
          transition={{ duration: 0.5, ease: "easeIn" }}
          initial={{ width: 0 }}
          animate={
            width > MOBILE_BREAKPOINT ? { width: "140vw" } : { width: "100vw" }
          }
          exit={{ width: 0 }}
        >
          <StyledNavigation>
            <StyledMenuIcon
              src={CloseIcon}
              onClick={setMenu}
              whileTap={{ scale: 0.8 }}
            />
            {navigationItems.map((item) => (
              <StyledLink
                key={item.id}
                to={item.link}
                onClick={setMenu}
                activeClassName="isActive"
              >
                {item.id}
              </StyledLink>
            ))}
            <StyledNavLinkHighlighted
              href="https://www.google.es/"
              target="_blank"
            >
              <StyledNavLinkHighlightedImage src={TicketsImage} />
            </StyledNavLinkHighlighted>
          </StyledNavigation>
          {width > MOBILE_BREAKPOINT && <StyledClipPath />}
        </StyledNavigationContainer>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
