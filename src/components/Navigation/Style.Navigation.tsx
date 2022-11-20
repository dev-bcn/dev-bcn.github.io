import styled from "styled-components";
import {motion} from "framer-motion";
import {Color} from "../../styles/colors";
import {NavLink} from "react-router-dom";
import {MAX_WIDTH, MOBILE_BREAKPOINT} from "../../constants/BreakPoints";

export const StyledBlueHamburger = styled(motion.img)`
  height: 2.5rem;
  @media (min-width: 480px) {
    height: 3rem;
  }
`;
export const StyledHeaderLogo = styled.img`
  height: 2.5rem;
  cursor: pointer;
`;
export const StyledMenuIcon = styled(motion.img)`
  position: absolute;
  top: 2rem;
  right: 3rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  z-index: 1;
`;
export const StyledNavigationContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  z-index: 4;
  transform: translate3d(0px, 0px, 0px);
  transition: transform 0.5s ease 0s;
`;
export const StyledNavigation = styled(motion.nav)`
  width: 100vw;
  background: ${Color.DARK_BLUE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const StyledClipPath = styled(motion.div)`
  clip-path: polygon(100% 0, 0 0, 0 100%);
  width: 40vw;
  background: ${Color.LIGHT_BLUE};
`;
export const StyledLink = styled(NavLink)`
  padding: 0.5rem;
  color: ${Color.LIGHT_BLUE};
  text-decoration: none;
  cursor: pointer;
  font-family: SpaceGrotesk-Bold, sans-serif;

  &.${(props) => props.activeClassName} {
    &:before {
      content: '/   ';
      font-family: SpaceGrotesk-Bold, sans-serif;
    }
  }

  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 1.125rem;
  }
`;
export const StyledNavLinkHighlighted = styled(motion.a)`
  text-decoration: none;
  margin: 0.5rem;
  display: flex;
  cursor: pointer;
`;
export const StyledNavLinkHighlightedImage = styled.img`
  width: 9rem;
  height: auto;
`;
export const StyledNavigationLogo = styled.img`
  height: 4rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const StyledHeaderWrapper = styled.div`
  background: ${Color.LIGHT_BLUE};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;
export const StyledHeader = styled.header`
  background: ${Color.LIGHT_BLUE};
  height: 3rem;
  max-width: ${MAX_WIDTH}px;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  @media (min-width: 480px) {
    height: 4rem;
  }
`;
