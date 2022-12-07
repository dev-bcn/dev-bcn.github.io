import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import { navigationItems } from "./NavigationData";
import { useWindowSize } from "react-use";
import { StyledLink } from "./Style.Navigation";

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
        </div>
      )}
    </>
  );
};
