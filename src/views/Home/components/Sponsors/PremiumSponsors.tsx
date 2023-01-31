import data from "../../../../data/2023.json";
import {
  StyledFlexGrow,
  StyledLogos,
  StyledSeparator,
  StyledSlashes,
  StyledSponsorIconBig,
  StyledSponsorItemContainer,
  StyledSponsorLogosContainer,
  StyledSponsorTitleContainer,
  StyledSponsorTitleMargin,
  StyledSponsorTitleSlashesContainer,
} from "./Sponsors.style";
import SponsorBadge from "./SponsorBadge";
import { Color } from "../../../../styles/colors";
import { BIG_BREAKPOINT } from "../../../../constants/BreakPoints";
import { useWindowSize } from "react-use";
import { useCallback, useEffect, useState } from "react";
import { buildSlashes } from "./Sponsors";

export const PremiumSponsors = () => {
  const { width } = useWindowSize();
  const [slashes, setSlashes] = useState("");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const newSlashes = buildSlashes(2);

    setSlashes(newSlashes);
  }, [width]);

  const handleHoverSponsorPremium = useCallback(() => setIsHovered(true), []);
  const handleUnHoverSponsorPremium = useCallback(
    () => setIsHovered(false),
    []
  );
  let premiumSponsors = data.sponsors.premium || [];
  return (
    <>
      {premiumSponsors.length > 0 && (
        <StyledSponsorItemContainer
          className="SponsorItem premium"
          onMouseEnter={handleHoverSponsorPremium}
          onMouseLeave={handleUnHoverSponsorPremium}
        >
          <SponsorBadge
            color={Color.DARK_BLUE}
            position="right"
            isVisible={isHovered}
          />
          <StyledSponsorTitleContainer className="SponsorTitle">
            <StyledSponsorTitleSlashesContainer
              color={Color.DARK_BLUE}
              id="Slashes"
            >
              <StyledSlashes>{slashes}</StyledSlashes>
              <StyledSeparator />

              {width < BIG_BREAKPOINT && "PREMIUM"}
            </StyledSponsorTitleSlashesContainer>
            {width >= BIG_BREAKPOINT && (
              <StyledSponsorTitleSlashesContainer
                color={
                  isHovered && width >= BIG_BREAKPOINT
                    ? Color.WHITE
                    : Color.DARK_BLUE
                }
              >
                <StyledSlashes>{slashes}</StyledSlashes>
                PREMIUM
              </StyledSponsorTitleSlashesContainer>
            )}
            <StyledSponsorTitleMargin />
          </StyledSponsorTitleContainer>

          <StyledSponsorLogosContainer className="SponsorLogos">
            <StyledFlexGrow />
            <StyledLogos position="right">
              {premiumSponsors.map((sponsor) => (
                <a href={sponsor.website} target="_blank" rel={"noreferrer"}>
                  <StyledSponsorIconBig
                    key={sponsor.name}
                    src={sponsor.image}
                  />
                </a>
              ))}
            </StyledLogos>
          </StyledSponsorLogosContainer>
        </StyledSponsorItemContainer>
      )}
    </>
  );
};
