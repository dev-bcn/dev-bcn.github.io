import { AnimatePresence } from "framer-motion";
import { FC, useState } from "react";
import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import { useHistory } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import NavigationLogo from "../../assets/images/devBcn.png";
import { ROUTE_HOME } from "../../constants/routes";
import TicketsImage from "../../assets/images/TicketsImage.svg";
import { navigationItems } from "./NavigationData";
import { useWindowSize } from "react-use";
import {
  StyledClipPath,
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderWrapper,
  StyledLink,
  StyledMenuIcon,
  StyledNavigation,
  StyledNavigationContainer,
  StyledNavigationLogo,
  StyledNavLinkHighlighted,
  StyledNavLinkHighlightedImage,
} from "./Style.Navigation";
import { HorizontalMenu } from "./HorizontalMenu";
import { HamburgerMenu } from "./HamburgerMenu";

const Navigation: FC = () => {
  const { width } = useWindowSize();
  const [isOpened, setIsOpen] = useState(false);

  const history = useHistory();
  const handleLogoClick = () => {
    history.push(ROUTE_HOME);
  };
  const handleSetMenu = () => {
    setIsOpen(!isOpened);
  };

  return (
    <>
      <StyledHeaderWrapper>
        <StyledHeader>
          <StyledHeaderLogo src={NavigationLogo} onClick={handleLogoClick} />
          <HorizontalMenu />
          <HamburgerMenu onClick={handleSetMenu} />
        </StyledHeader>
        <Breadcrumbs />
      </StyledHeaderWrapper>

      <AnimatePresence>
        {isOpened && (
          <StyledNavigationContainer
            transition={{ duration: 0.5, ease: "easeIn" }}
            initial={{ width: 0 }}
            animate={
              width > MOBILE_BREAKPOINT
                ? { width: "140vw" }
                : { width: "100vw" }
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
                  activeClassName="isActive"
                  exact={true}
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
    </>
  );
};

export default Navigation;
