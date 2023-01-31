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
import { FC, useCallback, useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { buildSlashes } from "./Sponsors";

export const TopSponsors: FC = () => {
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
      {data.sponsors.top.length > 0 && (
        <StyledSponsorItemContainer
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
              {data.sponsors.top.map((sponsor) => (
                <a href={sponsor.website} target="_blank" rel={"noreferrer"}>
                  <StyledSponsorIconBig
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
};
