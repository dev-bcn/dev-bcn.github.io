import { AnimatePresence } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import NavigationLogo from "../../assets/images/devBcn.png";
import { ROUTE_HOME, ROUTE_HOME_ALTERNATE } from "../../constants/routes";
import TicketsImage from "../../assets/images/TicketsImage.svg";
import { navigationItems, subMenuItems } from "./NavigationData";
import {
  navigationItems2023,
  subMenuItems2023,
} from "../../2023/Navigation/NavigationData2023";
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
  StyledNavLinkHighlightedImage,
  StyledTicketLink,
} from "./Style.Navigation";
import { HorizontalMenu } from "./HorizontalMenu";
import { HamburgerMenu } from "./HamburgerMenu";

const Navigation: FC = () => {
  const { width } = useWindowSize();
  const [isOpened, setIsOpened] = useState(false);
  const [is2023, setIs2023] = useState(false);
  const [navItems, setNavItems] = useState(navigationItems);
  const [subNavItems, setSubNavItems] = useState(subMenuItems);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate(ROUTE_HOME);
  };
  const handleSetMenu = () => {
    setIsOpened(!isOpened);
  };
  const isHomePage = () => {
    return pathname === ROUTE_HOME || pathname === ROUTE_HOME_ALTERNATE;
  };

  useEffect(() => {
    if (pathname.startsWith("/2023")) {
      setIs2023(true);
      setNavItems(navigationItems2023);
      setSubNavItems(subMenuItems2023);
    } else {
      setNavItems(navigationItems);
      setSubNavItems(subMenuItems);
    }
  }, [pathname, navItems, subNavItems]);

  return (
    <>
      <StyledHeaderWrapper>
        <StyledHeader>
          <StyledHeaderLogo
            alt="DevBcn — logo"
            src={NavigationLogo}
            onClick={handleLogoClick}
          />
          <HorizontalMenu navItems={navItems} subMenuItems={subNavItems} />
          <HamburgerMenu onClick={handleSetMenu} />
        </StyledHeader>

        {!isHomePage() && <Breadcrumbs />}
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
                  navigate(ROUTE_HOME);
                  handleSetMenu();
                }}
              />
              {navItems.map((item) => (
                <StyledLink
                  key={item.id}
                  to={item.link}
                  onClick={handleSetMenu}
                >
                  {item.id}
                </StyledLink>
              ))}
              <StyledTicketLink
                href={
                  is2023
                    ? "https://tickets.devbcn.com/event/devbcn-2023"
                    : "https://tickets.devbcn.com/event/devbcn-2024"
                }
                target="_blank"
                rel="noreferrer"
              >
                <StyledNavLinkHighlightedImage src={TicketsImage} />
              </StyledTicketLink>
            </StyledNavigation>
            {width > MOBILE_BREAKPOINT && <StyledClipPath />}
          </StyledNavigationContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
