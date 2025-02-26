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
import {Color} from "../../../../styles/colors";
import {BIG_BREAKPOINT} from "../../../../constants/BreakPoints";
import {buildSlashes} from "./Sponsors";
import {useWindowSize} from "react-use";
import React, {FC, useCallback, useEffect, useState} from "react";
import {Sponsor} from "./SponsorsData";

interface Props {
  sponsors: Array<Sponsor> | null;
}

export const RegularSponsors: FC<React.PropsWithChildren<Props>> = ({sponsors}) => {
  const { width } = useWindowSize();
  const [slashes, setSlashes] = useState("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
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
      {sponsors !== null && sponsors.length > 0 && (
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
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <RegularSponsorImage
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
