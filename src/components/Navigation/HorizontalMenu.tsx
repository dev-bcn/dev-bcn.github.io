import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import { navigationItems, subMenuItems } from "./NavigationData";
import { useWindowSize } from "react-use";
import { NavMenu, StyledLink, SubLink, SubMenu } from "./Style.Navigation";
import { NavLink } from "react-router-dom";

export const HorizontalMenu = () => {
  const { width } = useWindowSize();
  return (
    <>
      {width > BIG_BREAKPOINT && (
        <div className="horizontal-navigation">
          {navigationItems.map((item) => (
            <StyledLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " isActive" : "")
              }
            >
              {item.id}
            </StyledLink>
          ))}
          {subMenuItems.length > 0 && (
            <NavMenu href="/" style={{ position: "relative" }}>
              News{" "}
              <SubMenu>
                {subMenuItems.map((item) => (
                  <SubLink key={item.id}>
                    <NavLink to={item.link}>{item.id}</NavLink>
                  </SubLink>
                ))}
              </SubMenu>
            </NavMenu>
          )}
        </div>
      )}
    </>
  );
};
