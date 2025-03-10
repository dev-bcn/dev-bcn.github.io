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
import React, {FC, useCallback, useEffect, useState} from "react";
import {useWindowSize} from "react-use";
import {buildSlashes} from "./Sponsors";
import {Sponsor} from "./SponsorsData";

interface Props {
  sponsors: Array<Sponsor> | null;
}

export const TopSponsors: FC<React.PropsWithChildren<Props>> = ({sponsors}) => {
  const { width } = useWindowSize();
  const [slashes, setSlashes] = useState("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  useEffect(() => {
    const newSlashes = buildSlashes(2);

    setSlashes(newSlashes);
  }, [width]);

  const handleHoverSponsorTop = useCallback(() => setIsHovered(true), []);
  const handleUnHoverSponsorTop = useCallback(() => setIsHovered(false), []);

  return (
    <>
      {sponsors !== null && sponsors.length > 0 && (
        <StyledSponsorItemContainer
          id="top-sponsors"
          className="SponsorItem top"
          onMouseEnter={handleHoverSponsorTop}
          onMouseLeave={handleUnHoverSponsorTop}
        >
          <SponsorBadge
            color={Color.BLUE}
            position="left"
            isVisible={isHovered}
          />
          <StyledSponsorTitleContainer className="SponsorTitle">
            <StyledSponsorTitleMargin />
            <StyledSponsorTitleSlashesContainer
              color={
                isHovered && width >= BIG_BREAKPOINT ? Color.WHITE : Color.BLUE
              }
              id="Slashes"
            >
              TOP
              <StyledSeparator />
              <StyledSlashes>{slashes}</StyledSlashes>
            </StyledSponsorTitleSlashesContainer>
            {width >= BIG_BREAKPOINT && (
              <StyledSponsorTitleSlashesContainer color={Color.BLUE}>
                <StyledSlashes>{slashes}</StyledSlashes>
              </StyledSponsorTitleSlashesContainer>
            )}
          </StyledSponsorTitleContainer>

          <StyledSponsorLogosContainer className="SponsorLogos">
            <StyledLogos>
              {sponsors.map((sponsor) => (
                <a
                  href={sponsor.website}
                  target="_blank"
                  key={sponsor.name}
                  rel="noreferrer"
                >
                  <PremiumSponsorImage
                    src={sponsor.image}
                    alt={sponsor.name}
                    style={{
                      filter: isHovered
                        ? `drop-shadow(2px 2px 2px ${Color.LIGHT_BLUE})`
                        : `none`,
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
