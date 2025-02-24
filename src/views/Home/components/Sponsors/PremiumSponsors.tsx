import {
  PremiumSponsorImage,
  StyledFlexGrow,
  StyledLogos,
  StyledSeparator,
  StyledSlashes,
  StyledSponsorItemContainer,
  StyledSponsorLogosContainer,
  StyledSponsorTitleContainer,
  StyledSponsorTitleMargin,
  StyledSponsorTitleSlashesContainer,
} from "./Sponsors.style";
import SponsorBadge from "./SponsorBadge";
import {Color} from "../../../../styles/colors";
import {BIG_BREAKPOINT} from "../../../../constants/BreakPoints";
import {useWindowSize} from "react-use";
import React, {FC, useCallback, useEffect, useState} from "react";
import {buildSlashes} from "./Sponsors";
import {Sponsor} from "./SponsorsData";

interface Props {
  sponsors: Array<Sponsor> | null;
}

export const PremiumSponsors: FC<React.PropsWithChildren<Props>> = ({sponsors}) => {
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
  return (
    <>
      {sponsors !== null && sponsors.length > 0 && (
        <StyledSponsorItemContainer
          id="premium-sponsors"
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
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PremiumSponsorImage
                    className="sponsor-image"
                    alt={sponsor.name}
                    src={sponsor.image}
                    style={{
                      filter: isHovered
                        ? `drop-shadow(2px 2px 2px ${Color.LIGHT_BLUE})`
                        : `none`,
                    }}
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
