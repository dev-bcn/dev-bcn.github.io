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
import React, { FC } from "react";
import { Sponsor } from "./SponsorsData";
import { useSponsorsHook } from "./useSponsorsHook";

interface Props {
  sponsors: Array<Sponsor> | null;
}

export const MediaPartners: FC<React.PropsWithChildren<Props>> = ({
  sponsors,
}) => {
  const { width, slashes, isHovered, handleHover, handleUnHover } =
    useSponsorsHook({
      numberOfSlashGroups: 2,
    });

  return (
    <>
      {sponsors !== null && sponsors.length > 0 && (
        <StyledSponsorItemContainer
          className="SponsorItem virtual"
          id="media-partners"
          onMouseEnter={handleHover}
          onMouseLeave={handleUnHover}
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
              MEDIA PARTNERS
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
                  <StyledSponsorIconMicro
                    style={{
                      filter: isHovered
                        ? `drop-shadow(1px 1px 1px ${Color.LIGHT_BLUE})`
                        : `none`,
                    }}
                    alt={sponsor.name}
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
};
