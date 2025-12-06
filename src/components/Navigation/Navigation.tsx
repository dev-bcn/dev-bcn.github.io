// @ts-expect-error some quirky import
import { AnimatePresence } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { BIG_BREAKPOINT, MOBILE_BREAKPOINT } from "@constants/BreakPoints";
import { useLocation, useNavigate } from "react-router";
import Breadcrumbs from "./Breadcrumbs";
import { ROUTE_HOME, ROUTE_HOME_ALTERNATE } from "@constants/routes";
import { navigationItems2026, subMenuItems2026 } from "./NavigationData";
import {
  navigationItems2023,
  subMenuItems2023,
} from "../../2023/Navigation/NavigationData2023";
import {
  navigationItems2025 as navigationItems2025Archived,
  subMenuItems2025 as subMenuItems2025Archived,
} from "../../2025/Navigation/NavigationData2025";
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
import {
  navigationItems2024,
  subMenuItems2024,
} from "../../2024/Navigation/NavigationData";
export const Navigation: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();
  const [isOpened, setIsOpened] = useState(false);
  const [navItems, setNavItems] = useState(navigationItems2026);
  const [subNavItems, setSubNavItems] = useState(subMenuItems2026);
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
  // ...
  useEffect(() => {
    const navMapping = {
      "/2024": {
        navItems: navigationItems2024,
        subNavItems: subMenuItems2024,
      },
      "/2023": {
        navItems: navigationItems2023,
        subNavItems: subMenuItems2023,
      },
      "/2025": {
        navItems: navigationItems2025Archived,
        subNavItems: subMenuItems2025Archived,
      },
      "/2026": {
        navItems: navigationItems2026,
        subNavItems: subMenuItems2026,
      },
      default: {
        navItems: navigationItems2026,
        subNavItems: subMenuItems2026,
      },
    };

    const { navItems, subNavItems } =
      Object.entries(navMapping).find(([key]) =>
        pathname.startsWith(key),
      )?.[1] || navMapping.default;

    setNavItems(navItems);
    setSubNavItems(subNavItems);
  }, [pathname]);

  const getTicketURL = (): string => {
    if (pathname.startsWith("/2023")) {
      return "https://tickets.devbcn.com/event/devbcn-2023";
    }
    if (pathname.startsWith("/2024")) {
      return "https://tickets.devbcn.com/event/devbcn-2024";
    }
    if (pathname.startsWith("/2025")) {
      return "https://tickets.devbcn.com/event/devbcn-2025";
    }
    return "https://tickets.devbcn.com/event/devbcn-2026";
  };

  return (
    <>
      <StyledHeaderWrapper>
        <StyledHeader>
          <StyledHeaderLogo
            alt="DevBcn — logo"
            src="/images/devBcn.png"
            onClick={handleLogoClick}
          />
          {width > BIG_BREAKPOINT && (
            <HorizontalMenu navItems={navItems} subMenuItems={subNavItems} />
          )}
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
                src="/images/CloseIcon.svg"
                onClick={handleSetMenu}
                whileTap={{ scale: 0.8 }}
              />
              <StyledNavigationLogo
                src="/images/devBcn.png"
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
                href={getTicketURL()}
                target="_blank"
                rel="noreferrer"
              >
                <StyledNavLinkHighlightedImage src="/images/TicketsImage.svg" />
              </StyledTicketLink>
            </StyledNavigation>
            {width > MOBILE_BREAKPOINT && <StyledClipPath />}
          </StyledNavigationContainer>
        )}
      </AnimatePresence>
    </>
  );
};
