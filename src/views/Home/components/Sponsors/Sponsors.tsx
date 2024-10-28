import {Color} from "src/styles/colors";
import {FC} from "react";

import SectionWrapper from "src/components/SectionWrapper/SectionWrapper";
import TitleSection from "src/components/SectionTitle/TitleSection";
import {
  StyledSponsorsContainer,
  StyledTitleContainer,
  StyledTitleImg,
} from "./Sponsors.style";
import {TopSponsors} from "./TopSponsors";
import {RegularSponsors} from "./RegularSponsors";
import {PremiumSponsors} from "./PremiumSponsors";
import {BasicSponsor} from "./BasicSponsor";
import {Communities} from "./Communities";
import {MediaPartners} from "./MediaPartners";
import {Supporters} from "./Supporters";

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
        <StyledTitleImg alt="Less than - icon"
                        src="images/LessThanBlueIcon.svg"/>
        <TitleSection
          data-testid="sponsors-box"
          title="SPONSORS"
          subtitle="Are you a technology company? Interested in meeting
        enthusiasts and geek people for technology? This is a
        priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
        and to support technological communities."
          color={Color.DARK_BLUE}
        />
        <StyledTitleImg alt="more than - icon"
                        src="images/MoreThanBlueWhiteIcon.svg"/>
      </StyledTitleContainer>
      <TopSponsors />
      <PremiumSponsors />
      <RegularSponsors />
      <BasicSponsor />
      <Communities />
      <Supporters />
      <MediaPartners />
    </StyledSponsorsContainer>
  </SectionWrapper>
);

export default Sponsors;
