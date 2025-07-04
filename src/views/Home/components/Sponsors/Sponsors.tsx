import { Color } from "@styles/colors";
import React, { FC } from "react";

import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import TitleSection from "@components/SectionTitle/TitleSection";
import {
  StyledSponsorsContainer,
  StyledTitleContainer,
  StyledTitleImg,
} from "./Sponsors.style";
import { TopSponsors } from "./TopSponsors";
import { RegularSponsors } from "./RegularSponsors";
import { PremiumSponsors } from "./PremiumSponsors";
import { BasicSponsor } from "./BasicSponsor";
import { Communities } from "./Communities";
import { MediaPartners } from "./MediaPartners";
import { Supporters } from "./Supporters";
import { sponsors } from "./SponsorsData";

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
      <TopSponsors sponsors={sponsors.top} />
      <PremiumSponsors sponsors={sponsors.premium} />
      <RegularSponsors sponsors={sponsors.regular} />
      <BasicSponsor sponsors={sponsors.basic} />
      <Communities sponsors={sponsors.communities} />
      <Supporters sponsors={sponsors.supporters} />
      <MediaPartners sponsors={sponsors.media_partners} />
    </StyledSponsorsContainer>
  </SectionWrapper>
);

export default Sponsors;
