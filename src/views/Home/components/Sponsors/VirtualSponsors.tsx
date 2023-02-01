import {
  StyledFlexGrow,
  StyledLogos,
  StyledSeparator,
  StyledSlashes,
  StyledSponsorIconMicro,
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

export function VirtualSponsors() {
  const { width } = useWindowSize();
  const [slashes, setSlashes] = useState("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const virtualSponsors = sponsors.virtual;

  useEffect(() => {
    const newSlashes = buildSlashes(2);

    setSlashes(newSlashes);
  }, [width]);

  const handleHoverSponsorVirtual = useCallback(() => setIsHovered(true), []);
  const handleUnHoverSponsorVirtual = useCallback(
    () => setIsHovered(false),
    []
  );
  return (
    <>
      {virtualSponsors !== null && virtualSponsors.length > 0 && (
        <StyledSponsorItemContainer
          className="SponsorItem virtual"
          onMouseEnter={handleHoverSponsorVirtual}
          onMouseLeave={handleUnHoverSponsorVirtual}
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
              VIRTUAL
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
              {virtualSponsors.map((sponsor) => (
                <a href={sponsor.website} target="_blank" rel={"noreferrer"}>
                  <StyledSponsorIconMicro
                    key={sponsor.name}
                    src={sponsor.image}
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
}
