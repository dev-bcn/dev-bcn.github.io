import { NavigationItem } from "./NavigationData";
import { NavMenu, StyledLink, SubLink, SubMenu } from "./Style.Navigation";
import { NavLink } from "react-router";
import { FC } from "react";

type Props = {
  navItems: NavigationItem[];
  subMenuItems: NavigationItem[];
};

export const HorizontalMenu: FC<React.PropsWithChildren<Props>> = ({
  navItems,
  subMenuItems,
}) => {
  return (
    <div className="horizontal-navigation">
      {navItems.map((item) => (
        <StyledLink key={item.id} to={item.link}>
          {item.id}
        </StyledLink>
      ))}
      {subMenuItems.length > 0 && (
        <NavMenu style={{ position: "relative" }}>
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
  );
};
