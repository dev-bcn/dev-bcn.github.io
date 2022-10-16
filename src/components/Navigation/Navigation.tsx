import { AnimatePresence, motion } from 'framer-motion';
import { Color  } from '../../styles/colors';
import { FC, useState } from 'react';
import { MAX_WIDTH, MOBILE_BREAKPOINT } from '../../constants/BreakPoints';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

import BlueHamburgerIcon from '../../assets/images/BlueHamburgerIcon.svg';
import Breadcrumbs from './Breadcrumbs';
import CloseIcon from '../../assets/images/CloseIcon.svg';
import HamburgerIcon from '../../assets/images/HamburgerIcon.svg';
import NavigationLogo from '../../assets/images/NavigationLogo.svg';
import { ROUTE_HOME } from '../../constants/routes';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import TicketsImage from '../../assets/images/TicketsImage.svg';
import { navigationItems } from './NavigationData';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

const StyledHeaderWrapper = styled.div`
  background: ${Color.YELLOW};
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

const StyledHeader = styled.header`
  background: ${Color.YELLOW};
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

const StyledBlueHamburger = styled(motion.img)`
  height: 2.5rem;
  @media (min-width: 480px) {
    height: 3rem;
  }
`;

const StyledHeaderLogo = styled.img`
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

const StyledNavigationContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  z-index: 4;
  transform: translate3d(0px, 0px, 0px);
  transition: transform 0.5s ease 0s;
`;

const StyledNavigation = styled(motion.nav)`
  width: 100vw;
  background: ${Color.PINK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StyledClipPath = styled(motion.div)`
  clip-path: polygon(100% 0, 0 0, 0 100%);
  width: 40vw;
  background: ${Color.PINK};
`;

const StyledLink = styled(NavLink)`
  padding: 0.5rem;
  color: ${Color.YELLOW};
  text-decoration: none;
  cursor: pointer;
  font-family: SpaceGrotesk-Bold,sans-serif;
  &.${(props) => props.activeClassName} {
    &:before {
      content: '/   ';
      font-family: SpaceGrotesk-Bold,sans-serif;
    }
  }
  @media (min-width: ${MOBILE_BREAKPOINT}px) {
    font-size: 1.125rem;
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

const StyledNavigationLogo = styled.img`
  height: 4rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Navigation: FC = () => {
  const { width } = useWindowSize();
  const [isOpened, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const history = useHistory();

  function handleLogoClick() {
    history.push('/');
  }

  function handleSetMenu() {
    setIsOpen(!isOpened);
  }

  return (
    <>
      {pathname === ROUTE_HOME ? (
        <SectionWrapper color='transparent'>
          <StyledMenuIcon
            onClick={handleSetMenu}
            src={HamburgerIcon}
            whileTap={{ scale: 0.8 }}
          />
        </SectionWrapper>
      ) : (
        <StyledHeaderWrapper>
          <StyledHeader>
            <StyledHeaderLogo src={NavigationLogo} onClick={handleLogoClick} />

            <StyledBlueHamburger
              src={BlueHamburgerIcon}
              whileTap={{ scale: 0.8 }}
              onClick={handleSetMenu}
            />
          </StyledHeader>
          <Breadcrumbs />
        </StyledHeaderWrapper>
      )}
      <AnimatePresence>
        {isOpened && (
          <StyledNavigationContainer
            transition={{ duration: 0.5, ease: 'easeIn' }}
            initial={{ width: 0 }}
            animate={
              width > MOBILE_BREAKPOINT
                ? { width: '140vw' }
                : { width: '100vw' }
            }
            exit={{ width: 0 }}
          >
            <StyledNavigation>
              <StyledMenuIcon
                src={CloseIcon}
                onClick={handleSetMenu}
                whileTap={{ scale: 0.8 }}
              />
              <StyledNavigationLogo
                src={NavigationLogo}
                onClick={() => {
                  history.push(ROUTE_HOME);
                  handleSetMenu();
                }}
              />
              {navigationItems.map((item) => (
                <StyledLink
                  key={item.id}
                  to={item.link}
                  onClick={handleSetMenu}
                  activeClassName='isActive'
                  exact={true}
                >
                  {item.id}
                </StyledLink>
              ))}
              <StyledNavLinkHighlighted
                href='https://www.google.es/'
                target='_blank'
              >
                <StyledNavLinkHighlightedImage src={TicketsImage} />
              </StyledNavLinkHighlighted>
            </StyledNavigation>
            {width > MOBILE_BREAKPOINT && <StyledClipPath />}
          </StyledNavigationContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
