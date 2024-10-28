import {BIG_BREAKPOINT} from "src/constants/BreakPoints";
import React, {FC} from "react";
import {useNavigate} from "react-router-dom";
import {useWindowSize} from "react-use";
import {edition} from "src/data/2025";
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

const Footer: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <StyledFooterAbsoluteContainer className="Footer">
      <StyledFooterContainer>
        <StyledFooterItem>
          <StyledAbsoluteImg alt="less than - icon"
                             src="images/LessThanBlueIcon.svg"/>
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFlexCol>
            <StyledFlexRow>SOCIAL MEDIA</StyledFlexRow>
            <StyledFlexRow
              justify={width < BIG_BREAKPOINT ? "center" : "flex-start"}
            >
              <StyledLink target={"_blank"} href={edition.twitter}>
                <StyledFooterIcon
                  alt="twitter"
                  src="images/twitterIcon.svg"
                  height={24}
                  width={24}
                />
              </StyledLink>
              <StyledLink target={"_blank"} href={edition.youtube}>
                <StyledFooterIcon
                    src="images/youtubeIcon.svg"
                  alt="youtube"
                  height={24}
                  width={24}
                />
              </StyledLink>
              <StyledLink target={"_blank"} href={edition.flickr}>
                <StyledFooterIcon
                    src="images/flickr.svg"
                  alt="facebook"
                  height={24}
                  width={24}
                />
              </StyledLink>
              <StyledLink target={"_blank"} href={edition.linkedin}>
                <StyledFooterIcon
                    src="images/linkedinIcon.svg"
                  alt="facebook"
                  height={24}
                  width={24}
                />
              </StyledLink>
            </StyledFlexRow>
            <StyledFlexRow>&nbsp;</StyledFlexRow>
          </StyledFlexCol>
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledImg
            alt="DevBcn"
            src="images/devBcn.png"
            width={140}
            height={72}
            onClick={handleLogoClick}
          />
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFlexCol>
            <StyledFlexRow>CONTACT</StyledFlexRow>
            <StyledFlexRow>
              <StyledLink href={`mailto: ${edition.email}`}>
                <StyledFooterIcon
                    src="images/emailIcon.svg"
                  alt="email"
                  height={24}
                  width={24}
                />
                {edition.email}
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
