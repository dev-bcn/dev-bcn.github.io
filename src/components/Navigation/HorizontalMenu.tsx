import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import { navigationItems } from "./NavigationData";
import { useWindowSize } from "react-use";
import { StyledLink } from "./Style.Navigation";
import styled from "styled-components";
import { Color } from "../../styles/colors";
import { NavLink } from "react-router-dom";
import { ROUTE_ATTENDEE } from "../../constants/routes";

const NavMenu = styled.a`
   {
    color: ${Color.DARK_BLUE};
    padding: 100px;
    transition: 1s ease-in-out;
  }

  &:hover ul {
    display: block;
    opacity: 100%;
  }
`;

const SubMenu = styled.ul`
   {
    display: none;
    opacity: 0;
    position: absolute;
    top: 20px;
    left: -30px;
    width: 300px;
    background-color: ${Color.LIGHT_BLUE};
    padding: 5px;
  }
`;

const SubLink = styled.li`
   {
    text-decoration: none;
    list-style: none;
    margin-bottom: 3px;
  }
`;

export const HorizontalMenu = () => {
  const { width } = useWindowSize();
  const handleHorizontalMenu = () => {};
  return (
    <>
      {width > BIG_BREAKPOINT && (
        <div className="horizontal-navigation">
          {navigationItems.map((item) => (
            <StyledLink
              key={item.id}
              to={item.link}
              onClick={handleHorizontalMenu}
              activeClassName="isActive"
              exact={true}
            >
              {item.id}
            </StyledLink>
          ))}
          <NavMenu href="/" style={{ position: "relative" }}>
            News{" "}
            <SubMenu>
              <SubLink>
                <NavLink to={ROUTE_ATTENDEE}>Attendee information</NavLink>
              </SubLink>
              <SubLink>
                <a href="/speaker-information">Speaker information</a>
              </SubLink>
            </SubMenu>
          </NavMenu>
        </div>
      )}
    </>
  );
};
