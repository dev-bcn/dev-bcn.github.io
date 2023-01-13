import { BIG_BREAKPOINT } from "../../../../constants/BreakPoints";
import { Color } from "../../../../styles/colors";
import { FC, useCallback, useEffect, useState } from "react";

import LessThanBlueIcon from "../../../../assets/images/MoreThanBlueWhiteIcon.svg";
import LessThanBlueWhiteIcon from "../../../../assets/images/LessThanBlueWhiteIcon.svg";
import SectionWrapper from "../../../../components/SectionWrapper/SectionWrapper";
import SponsorBadge from "./SponsorBadge";
import TitleSection from "../../../../components/SectionTitle/TitleSection";
import redhatLogo from "../../../../assets/sponsorIcons/redhatLogo.svg";
import { useWindowSize } from "react-use";
import data from "../../../../data/2023.json";
import {
  StyledFlexGrow,
  StyledLogos,
  StyledSeparator,
  StyledSlashes,
  StyledSponsorIconBig,
  StyledSponsorIconMicro,
  StyledSponsorIconNano,
  StyledSponsorIconNormal,
  StyledSponsorIconSmall,
  StyledSponsorItemContainer,
  StyledSponsorLogosContainer,
  StyledSponsorsContainer,
  StyledSponsorTitleContainer,
  StyledSponsorTitleMargin,
  StyledSponsorTitleSlashesContainer,
  StyledTitleContainer,
  StyledTitleImg,
} from "./Sponsors.style";

type TIsHoveredState = {
  top: boolean;
  premium: boolean;
  regular: boolean;
  startup: boolean;
  virtual: boolean;
};

const buildSlashes = (module: number) => {
  const slashesElement = document.getElementById("Slashes");

  const slashesWidth = slashesElement?.offsetWidth || 0;

  let slashes = "";
  for (let index = 0; index < slashesWidth; index++) {
    if (index % module === 0) slashes += "/ ";
  }

  return slashes;
};
const Sponsors: FC = () => {
  const { width } = useWindowSize();

  const [isHovered, setIsHovered] = useState<TIsHoveredState>({
    top: false,
    premium: false,
    regular: false,
    startup: false,
    virtual: false,
  });

  const [slashes, setSlashes] = useState("");

  useEffect(() => {
    const newSlashes = buildSlashes(2);

    setSlashes(newSlashes);
  }, [width]);

  const handleHoverSponsorTop = useCallback(
    () => setIsHovered({ ...isHovered, top: true }),
    [isHovered]
  );
  const handleUnHoverSponsorTop = useCallback(
    () => setIsHovered({ ...isHovered, top: false }),
    [isHovered]
  );

  const handleHoverSponsorPremium = useCallback(
    () => setIsHovered({ ...isHovered, premium: true }),
    [isHovered]
  );
  const handleUnHoverSponsorPremium = useCallback(
    () => setIsHovered({ ...isHovered, premium: false }),
    [isHovered]
  );

  const handleHoverSponsorRegular = useCallback(
    () => setIsHovered({ ...isHovered, regular: true }),
    [isHovered]
  );
  const handleUnHoverSponsorRegular = useCallback(
    () => setIsHovered({ ...isHovered, regular: false }),
    [isHovered]
  );

  const handleHoverSponsorStartup = useCallback(
    () => setIsHovered({ ...isHovered, startup: true }),
    [isHovered]
  );
  const handleUnHoverSponsorStartup = useCallback(
    () => setIsHovered({ ...isHovered, startup: false }),
    [isHovered]
  );

  const handleHoverSponsorVirtual = useCallback(
    () => setIsHovered({ ...isHovered, virtual: true }),
    [isHovered]
  );
  const handleUnHoverSponsorVirtual = useCallback(
    () => setIsHovered({ ...isHovered, virtual: false }),
    [isHovered]
  );

  return (
    <SectionWrapper color={Color.WHITE}>
      <StyledSponsorsContainer>
        <StyledTitleContainer className="TitleContainer">
          <StyledTitleImg src={LessThanBlueIcon} />
          <TitleSection
            data-testid="sponsors-box"
            title="SPONSORS"
            subtitle="Are you a technology company? Interested in meeting
          enthusiasts and geek people for technology? This is a
          priceless opportunity to participate in the first big physical multi-language conference in Barcelona, to promote your company
          and to support technological communities."
            color={Color.DARK_BLUE}
          />
          <StyledTitleImg src={LessThanBlueWhiteIcon} />
        </StyledTitleContainer>
        {data.sponsors.top.length > 0 && (
          <StyledSponsorItemContainer
            className="SponsorItem top"
            onMouseEnter={handleHoverSponsorTop}
            onMouseLeave={handleUnHoverSponsorTop}
          >
            <SponsorBadge
              color={Color.BLUE}
              position="left"
              isVisible={isHovered.top}
            />
            <StyledSponsorTitleContainer className="SponsorTitle">
              <StyledSponsorTitleMargin />
              <StyledSponsorTitleSlashesContainer
                color={
                  isHovered.top && width >= BIG_BREAKPOINT
                    ? Color.WHITE
                    : Color.BLUE
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
                <StyledSponsorIconBig src={redhatLogo} />
              </StyledLogos>
              <StyledFlexGrow />
            </StyledSponsorLogosContainer>
          </StyledSponsorItemContainer>
        )}

        {data.sponsors.premium.length > 0 && (
          <StyledSponsorItemContainer
            className="SponsorItem premium"
            onMouseEnter={handleHoverSponsorPremium}
            onMouseLeave={handleUnHoverSponsorPremium}
          >
            <SponsorBadge
              color={Color.DARK_BLUE}
              position="right"
              isVisible={isHovered.premium}
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
                    isHovered.premium && width >= BIG_BREAKPOINT
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
                <StyledSponsorIconNormal src={redhatLogo} />
                <StyledSponsorIconNormal src={redhatLogo} />
              </StyledLogos>
            </StyledSponsorLogosContainer>
          </StyledSponsorItemContainer>
        )}

        {data.sponsors.regular.length > 0 && (
          <StyledSponsorItemContainer
            className="SponsorItem regular"
            onMouseEnter={handleHoverSponsorRegular}
            onMouseLeave={handleUnHoverSponsorRegular}
          >
            <SponsorBadge
              color={Color.DARK_BLUE}
              position="left"
              isVisible={isHovered.regular}
            />
            <StyledSponsorTitleContainer className="SponsorTitle">
              <StyledSponsorTitleMargin />
              <StyledSponsorTitleSlashesContainer
                color={
                  isHovered.regular && width >= BIG_BREAKPOINT
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
                <StyledSponsorIconSmall src={redhatLogo} />
                <StyledSponsorIconSmall src={redhatLogo} />
                <StyledSponsorIconSmall src={redhatLogo} />
              </StyledLogos>
              <StyledFlexGrow />
            </StyledSponsorLogosContainer>
          </StyledSponsorItemContainer>
        )}

        {data.sponsors.startup.length > 0 && (
          <StyledSponsorItemContainer
            className="SponsorItem startup"
            onMouseEnter={handleHoverSponsorStartup}
            onMouseLeave={handleUnHoverSponsorStartup}
          >
            <SponsorBadge
              color={Color.DARK_BLUE}
              position="right"
              isVisible={isHovered.startup}
            />
            <StyledSponsorTitleContainer className="SponsorTitle">
              <StyledSponsorTitleSlashesContainer
                color={Color.DARK_BLUE}
                id="Slashes"
              >
                <StyledSlashes>{slashes}</StyledSlashes>
                <StyledSeparator />

                {width < BIG_BREAKPOINT && "STARTUP"}
              </StyledSponsorTitleSlashesContainer>
              {width >= BIG_BREAKPOINT && (
                <StyledSponsorTitleSlashesContainer
                  color={
                    isHovered.startup && width >= BIG_BREAKPOINT
                      ? Color.WHITE
                      : Color.DARK_BLUE
                  }
                >
                  <StyledSlashes>{slashes}</StyledSlashes>
                  STARTUP
                </StyledSponsorTitleSlashesContainer>
              )}
              <StyledSponsorTitleMargin />
            </StyledSponsorTitleContainer>

            <StyledSponsorLogosContainer className="SponsorLogos">
              <StyledFlexGrow />
              <StyledLogos position="right">
                <StyledSponsorIconNano src={redhatLogo} />
                <StyledSponsorIconNano src={redhatLogo} />
                <StyledSponsorIconNano src={redhatLogo} />
                <StyledSponsorIconNano src={redhatLogo} />
                <StyledSponsorIconNano src={redhatLogo} />
                <StyledSponsorIconNano src={redhatLogo} />
                <StyledSponsorIconNano src={redhatLogo} />
                <StyledSponsorIconNano src={redhatLogo} />
              </StyledLogos>
            </StyledSponsorLogosContainer>
          </StyledSponsorItemContainer>
        )}

        {data.sponsors.virtual.length > 0 && (
          <StyledSponsorItemContainer
            className="SponsorItem virtual"
            onMouseEnter={handleHoverSponsorVirtual}
            onMouseLeave={handleUnHoverSponsorVirtual}
          >
            <SponsorBadge
              color={Color.DARK_BLUE}
              position="left"
              isVisible={isHovered.virtual}
            />
            <StyledSponsorTitleContainer className="SponsorTitle">
              <StyledSponsorTitleMargin />
              <StyledSponsorTitleSlashesContainer
                color={
                  isHovered.virtual && width >= BIG_BREAKPOINT
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
                <StyledSponsorIconMicro src={redhatLogo} />
                <StyledSponsorIconMicro src={redhatLogo} />
                <StyledSponsorIconMicro src={redhatLogo} />
                <StyledSponsorIconMicro src={redhatLogo} />
                <StyledSponsorIconMicro src={redhatLogo} />
                <StyledSponsorIconMicro src={redhatLogo} />
                <StyledSponsorIconMicro src={redhatLogo} />
                <StyledSponsorIconMicro src={redhatLogo} />
                <StyledSponsorIconMicro src={redhatLogo} />
                <StyledSponsorIconMicro src={redhatLogo} />
              </StyledLogos>
              <StyledFlexGrow />
            </StyledSponsorLogosContainer>
          </StyledSponsorItemContainer>
        )}
      </StyledSponsorsContainer>
    </SectionWrapper>
  );
};

export default Sponsors;
