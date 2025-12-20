import { useNavigate } from "react-router";
import { useWindowSize } from "react-use";

import { BIG_BREAKPOINT } from "@constants/BreakPoints";
import data from "@data/2024.json";

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

import type { FC } from "react";

export const Footer: FC<React.PropsWithChildren<unknown>> = () => {
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
          <StyledAbsoluteImg
            alt="less than - icon"
            src="/images/LessThanBlueIcon.svg"
          />
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFlexCol>
            <StyledFlexRow>SOCIAL MEDIA</StyledFlexRow>
            <StyledFlexRow
              justify={width < BIG_BREAKPOINT ? "center" : "flex-start"}
            >
              <StyledLink target={"_blank"} href={data.twitter}>
                <StyledFooterIcon
                  alt="twitter"
                  src="/images/twitterIcon.svg"
                  height={24}
                  width={24}
                />
              </StyledLink>
              <StyledLink target={"_blank"} href={data.youtube}>
                <StyledFooterIcon
                  src="/images/youtubeIcon.svg"
                  alt="youtube"
                  height={24}
                  width={24}
                />
              </StyledLink>
              <StyledLink target={"_blank"} href={data.flickr}>
                <StyledFooterIcon
                  src="/images/flickr.svg"
                  alt="facebook"
                  height={24}
                  width={24}
                />
              </StyledLink>
              <StyledLink target={"_blank"} href={data.linkedin}>
                <StyledFooterIcon
                  src="/images/linkedinIcon.svg"
                  alt="facebook"
                  height={24}
                  width={24}
                />
              </StyledLink>
              <StyledLink target={"_blank"} href={data.bluesky}>
                <StyledFooterIcon
                  src="/images/blueskyIcon.svg"
                  alt="facebook"
                  height={24}
                  width={24}
                />
              </StyledLink>
              <StyledLink target={"_blank"} href={data.instagram}>
                <StyledFooterIcon
                  src="/images/instagramIcon.svg"
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
            src="/images/devBcn.webp"
            width={140}
            height={72}
            onClick={handleLogoClick}
          />
        </StyledFooterItem>
        <StyledFooterItem>
          <StyledFlexCol>
            <StyledFlexRow>CONTACT</StyledFlexRow>
            <StyledFlexRow>
              <StyledLink href={`mailto: ${data.email}`}>
                <StyledFooterIcon
                  src="/images/emailIcon.svg"
                  alt="email"
                  height={24}
                  width={24}
                />
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
