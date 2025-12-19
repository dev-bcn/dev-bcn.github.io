import TitleSection from "@components/SectionTitle/TitleSection";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import { Color } from "@styles/colors";
import { SponsorTier } from "@views/Home/components/Sponsors/SponsorTier";

import {
  StyledSponsorsContainer,
  StyledTitleContainer,
  StyledTitleImg,
} from "./Sponsors.style";
import { sponsors } from "./SponsorsData";

import type { FC } from "react";

const Sponsors: FC<React.PropsWithChildren<unknown>> = () => (
  <SectionWrapper color={Color.WHITE}>
    <StyledSponsorsContainer id="sponsors">
      <StyledTitleContainer className="TitleContainer">
        <StyledTitleImg
          alt="Less than - icon"
          src="/images/MoreThanBlueWhiteIcon.svg"
        />
        <TitleSection
          data-testid="sponsors-box"
          title="SPONSORS"
          subtitle="Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities."
          color={Color.DARK_BLUE}
        />
        <StyledTitleImg
          alt="more than - icon"
          src="/images/LessThanBlueWhiteIcon.svg"
        />
      </StyledTitleContainer>
      <SponsorTier
        sponsors={sponsors.top}
        title="TOP"
        id="top-sponsors"
        badgeColor={Color.BLUE}
        badgePosition="left"
        imageSize="premium"
      />
      <SponsorTier
        sponsors={sponsors.premium}
        title="PREMIUM"
        id="premium-sponsors"
        badgeColor={Color.DARK_BLUE}
        badgePosition="right"
        imageSize="premium"
      />
      <SponsorTier
        sponsors={sponsors.regular}
        title="REGULAR"
        id="regular-sponsors"
        badgeColor={Color.DARK_BLUE}
        badgePosition="left"
        imageSize="regular"
      />
      <SponsorTier
        sponsors={sponsors.basic}
        title="BASIC"
        id="basic-sponsors"
        badgeColor={Color.DARK_BLUE}
        badgePosition="right"
        imageSize="nano"
      />
      <SponsorTier
        sponsors={sponsors.communities}
        title="COMMUNITIES"
        id="communities"
        badgeColor={Color.DARK_BLUE}
        badgePosition="left"
        imageSize="micro"
      />
      <SponsorTier
        sponsors={sponsors.supporters}
        title="SUPPORTERS"
        id="supporters"
        badgeColor={Color.DARK_BLUE}
        badgePosition="right"
        imageSize="micro"
        testId="supporters"
      />
      <SponsorTier
        sponsors={sponsors.media_partners}
        title="MEDIA PARTNERS"
        id="media-partners"
        badgeColor={Color.DARK_BLUE}
        badgePosition="left"
        imageSize="micro"
      />
    </StyledSponsorsContainer>
  </SectionWrapper>
);

export default Sponsors;
