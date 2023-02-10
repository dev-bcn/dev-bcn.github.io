import {
  RegularSponsorImage,
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
import { Color } from "../../../../styles/colors";
import { BIG_BREAKPOINT } from "../../../../constants/BreakPoints";
import { buildSlashes } from "./Sponsors";
import { useWindowSize } from "react-use";
import { useCallback, useEffect, useState } from "react";
import { sponsors } from "./SponsorsData";

export const RegularSponsors = () => {
  const { width } = useWindowSize();
  const [slashes, setSlashes] = useState("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const regularSponsors = sponsors.regular;

  useEffect(() => {
    const newSlashes = buildSlashes(2);

    setSlashes(newSlashes);
  }, [width]);

  const handleHoverSponsorRegular = useCallback(() => setIsHovered(true), []);
  const handleUnHoverSponsorRegular = useCallback(
    () => setIsHovered(false),
    []
  );
  return (
    <>
      {regularSponsors !== null && regularSponsors.length > 0 && (
        <StyledSponsorItemContainer
          id="regular-sponsors"
          className="SponsorItem regular"
          onMouseEnter={handleHoverSponsorRegular}
          onMouseLeave={handleUnHoverSponsorRegular}
        >
          <SponsorBadge
            color={Color.DARK_BLUE}
            position="left"
            isVisible={isHovered}
          />
          <StyledSponsorTitleContainer className="SponsorTitle">
            <StyledSponsorTitleMargin />
            <StyledSponsorTitleSlashesContainer
              color={
                isHovered && width >= BIG_BREAKPOINT
                  ? Color.WHITE
                  : Color.DARK_BLUE
              }
              id="Slashes"
            >
              REGULAR
              <StyledSeparator />
              <StyledSlashes>{slashes}</StyledSlashes>
            </StyledSponsorTitleSlashesContainer>
            {width >= BIG_BREAKPOINT && (
              <StyledSponsorTitleSlashesContainer color={Color.DARK_BLUE}>
                <StyledSlashes>{slashes}</StyledSlashes>
              </StyledSponsorTitleSlashesContainer>
            )}
          </StyledSponsorTitleContainer>

          <StyledSponsorLogosContainer className="SponsorLogos">
            <StyledLogos>
              {regularSponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RegularSponsorImage
                    src={sponsor.image}
                    style={{
                      filter: isHovered
                        ? "invert(100%) grayscale(100%)"
                        : "drop-shadow(6px 6px 6px #002454)",
                    }}
                  />
                </a>
              ))}
            </StyledLogos>
            <StyledFlexGrow />
          </StyledSponsorLogosContainer>
        </StyledSponsorItemContainer>
      )}
    </>
  );
};
