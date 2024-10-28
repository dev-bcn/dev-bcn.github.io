import {AnimatePresence} from "framer-motion";
import React, {FC, useEffect, useState} from "react";
import {MOBILE_BREAKPOINT} from "src/constants/BreakPoints";
import {useLocation, useNavigate} from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import {ROUTE_HOME, ROUTE_HOME_ALTERNATE} from "src/constants/routes";
import {NavigationItem, navigationItems, subMenuItems,} from "./NavigationData";
import {useWindowSize} from "react-use";
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
import {HorizontalMenu} from "./HorizontalMenu";
import {HamburgerMenu} from "./HamburgerMenu";

const Navigation: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  const [isOpened, setIsOpened] = useState(false);
  const [navItems, setNavItems] = useState<NavigationItem[]>([]);
  const [subNavItems, setSubNavItems] = useState<NavigationItem[]>([]);
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
  const [edition] = useState<string>(localStorage.getItem("edition") ?? "2025");

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("Edition", edition);
    setNavItems(navigationItems(edition));
    setSubNavItems(subMenuItems(edition));
  }, [edition]);

  return (
    <>
      <StyledHeaderWrapper>
        <StyledHeader>
          <StyledHeaderLogo
            alt="DevBcn — logo"
            src="images/devBcn.png"
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
                  src="images/CloseIcon.svg"
                onClick={handleSetMenu}
                whileTap={{ scale: 0.8 }}
              />
              <StyledNavigationLogo
                  src="images/devBcn.png"
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
              {subNavItems.map((item) => (
                <StyledLink
                  key={item.id}
                  to={item.link}
                  onClick={handleSetMenu}
                >
                  {item.id}
                </StyledLink>
              ))}

              <StyledTicketLink
                href={`https://tickets.devbcn.com/event/devbcn-${edition}`}
                target="_blank"
                rel="noreferrer"
              >
                <StyledNavLinkHighlightedImage src="images/TicketsImage.svg"/>
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
