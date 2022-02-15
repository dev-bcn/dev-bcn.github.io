import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
import { COLOR_PINK, COLOR_YELLOW } from "../../styles/colors";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import { NavLink } from "react-router-dom";
import { navigationItems } from "./NavigationData";
import TicketIcon from "../../assets/images/TicketIcon.svg";
import { useWindowSize } from "react-use";
import { MOBILE_BREAKPOINT } from '../../constants/BreakPoints';

const StyledNavigationContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  z-index: 1;
  transform: translate3d(0px, 0px, 0px);
  /* visibility: visible; */
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

const StyledCloseMenuImage = styled(motion.img)`
  position: absolute;
  top: 2rem;
  right: 3rem;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const StyledLink = styled(NavLink)`
  color: ${COLOR_YELLOW};
  text-decoration: none;
  padding: 0.5rem;
  opacity: 1;

  &.${(props) => props.activeClassName} {
      &:before {
        content: "/   ";
      }
  }
`;

const HighlightLinkContainer = styled.div`
  background: ${COLOR_YELLOW};
  display: flex;
  width: fit-content;
  margin: 0.5rem;
`;

const StyledNavLinkHighlighted = styled(motion.a)`
  color: ${COLOR_PINK};
  text-decoration: none;
  padding: 0.25rem 1.5rem;
  display: flex;
`;

const StyledNavLinkHighlightedImage = styled.img`
  padding-right: .75rem;
`;

type TNavigationProps = {
  isOpened: boolean;
  setMenu: () => void;
};

const Navigation: FC<TNavigationProps> = ({ isOpened, setMenu }) => {
  const { width, height } = useWindowSize();

  return (
    <AnimatePresence>
      {isOpened && (
        <StyledNavigationContainer
          transition={{ duration: .5, ease: "linear"}}
          initial={{ width: 0 }}
          animate={ width > MOBILE_BREAKPOINT ? {width: "140vw"}:{width: "100vw"}}
          exit={{ width: 0 }}
        >
          <StyledNavigation>
            <StyledCloseMenuImage
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
            <HighlightLinkContainer>
              <StyledNavLinkHighlighted href="https://www.google.es/" target="_blank">
              <StyledNavLinkHighlightedImage src={TicketIcon}/>
                TICKETS
              </StyledNavLinkHighlighted>
            </HighlightLinkContainer>
          </StyledNavigation>
          {/* esto se quita con el width en mobile */}
          <StyledClipPath />
        </StyledNavigationContainer>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
