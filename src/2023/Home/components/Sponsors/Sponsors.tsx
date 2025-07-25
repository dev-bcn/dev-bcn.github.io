import { Color } from "@styles/colors";
import { FC } from "react";

import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import TitleSection from "@components/SectionTitle/TitleSection";
import {
  StyledSponsorsContainer,
  StyledTitleContainer,
  StyledTitleImg,
} from "./Sponsors.style";

import { BasicSponsor } from "@views/Home/components/Sponsors/BasicSponsor";
import { MediaPartners } from "@views/Home/components/Sponsors/MediaPartners";
import { RegularSponsors } from "@views/Home/components/Sponsors/RegularSponsors";
import { PremiumSponsors } from "@views/Home/components/Sponsors/PremiumSponsors";
import { TopSponsors } from "@views/Home/components/Sponsors/TopSponsors";
import { Communities } from "@views/Home/components/Sponsors/Communities";
import { Supporters } from "@views/Home/components/Sponsors/Supporters";

import { sponsors } from "./SponsorsData";

export const buildSlashes = (module: number) => {
  const slashesElement = document.getElementById("Slashes");

  const slashesWidth = slashesElement?.offsetWidth ?? 0;

  let slashes = "";
  for (let index = 0; index < slashesWidth; index++) {
    if (index % module === 0) slashes += "/ ";
  }

  return slashes;
};

const Sponsors: FC<React.PropsWithChildren<unknown>> = () => (
  <SectionWrapper color={Color.WHITE}>
    <StyledSponsorsContainer id="sponsors">
      <StyledTitleContainer className="TitleContainer">
        <StyledTitleImg src="/images/MoreThanBlueWhiteIcon.svg" />
        <TitleSection
          data-testid="sponsors-box"
          title="SPONSORS"
          subtitle="Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities."
          color={Color.DARK_BLUE}
        />
        <StyledTitleImg src="/images/LessThanBlueWhiteIcon.svg" />
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
