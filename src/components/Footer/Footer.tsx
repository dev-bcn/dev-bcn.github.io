import { BIG_BREAKPOINT } from "../../constants/BreakPoints";
import { FC } from "react";
import LessThanBlueIcon from "../../assets/images/LessThanBlueIcon.svg";
import emailIcon from "../../assets/images/emailIcon.svg";
import facebookIcon from "../../assets/images/facebookIcon.svg";
import linkedinIcon from "../../assets/images/linkedinIcon.svg";
import logo from "../../assets/images/devBcn.png";
import twitterIcon from "../../assets/images/twitterIcon.svg";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "react-use";
import data from "../../data/2023.json";
import youtubeIcon from "../../assets/images/youtubeIcon.svg";
import {
  StyledAbsoluteImg,
  StyledFlexCol,
  StyledFlexRow,
  StyledFooterAbsoluteContainer,
  StyledFooterContainer,
  StyledFooterIcon,
  StyledFooterItem,
  StyledImg,
  StyledLink,
} from "./Styles.Footer";
import { ROUTE_HOME } from "../../constants/routes";

const Footer: FC = () => {
  const { width } = useWindowSize();

  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/" + ROUTE_HOME);
    window.scrollTo(0, 0);
  };

  return (
    <StyledFooterAbsoluteContainer className="Footer">
      <StyledFooterContainer>
        <StyledFooterItem>
          <StyledAbsoluteImg src={LessThanBlueIcon} />
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFlexCol>
            <StyledFlexRow>SOCIAL MEDIA</StyledFlexRow>
            <StyledFlexRow
              justify={width < BIG_BREAKPOINT ? "center" : "flex-start"}
            >
              <StyledLink target={"_blank"} href={data.twitter}>
                <StyledFooterIcon src={twitterIcon} />
              </StyledLink>
              <StyledLink target={"_blank"} href={data.youtube}>
                <StyledFooterIcon src={youtubeIcon} />
              </StyledLink>
              <StyledLink target={"_blank"} href={data.facebook}>
                <StyledFooterIcon src={facebookIcon} />
              </StyledLink>
              <StyledLink target={"_blank"} href={data.linkedin}>
                <StyledFooterIcon src={linkedinIcon} />
              </StyledLink>
            </StyledFlexRow>
            <StyledFlexRow>&nbsp;</StyledFlexRow>
          </StyledFlexCol>
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledImg src={logo} onClick={handleLogoClick} />
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFlexCol>
            <StyledFlexRow>CONTACT</StyledFlexRow>
            <StyledFlexRow>
              <StyledLink href={`mailto: ${data.email}`}>
                <StyledFooterIcon src={emailIcon} />
                {data.email}
              </StyledLink>
            </StyledFlexRow>
            <StyledFlexRow>&nbsp;</StyledFlexRow>
          </StyledFlexCol>
        </StyledFooterItem>
        <StyledFooterItem></StyledFooterItem>
      </StyledFooterContainer>
    </StyledFooterAbsoluteContainer>
  );
};

export default Footer;
