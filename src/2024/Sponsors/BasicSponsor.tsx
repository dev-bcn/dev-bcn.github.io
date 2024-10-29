import {
  StyledFlexGrow,
  StyledLogos,
  StyledSeparator,
  StyledSlashes,
  StyledSponsorIconNano,
  StyledSponsorItemContainer,
  StyledSponsorLogosContainer,
  StyledSponsorTitleContainer,
  StyledSponsorTitleMargin,
  StyledSponsorTitleSlashesContainer,
} from "./Sponsors.style";
import SponsorBadge from "./SponsorBadge";

import {buildSlashes} from "./Sponsors";
import {useWindowSize} from "react-use";
import {useCallback, useEffect, useState} from "react";
import {sponsors} from "./SponsorsData";
import {Color} from "../../styles/colors";
import {BIG_BREAKPOINT} from "../../constants/BreakPoints";

export const BasicSponsor = () => {
    const {width} = useWindowSize();
    const [slashes, setSlashes] = useState("");
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        const newSlashes = buildSlashes(2);

        setSlashes(newSlashes);
    }, [width]);

    const handleHoverSponsorBasic = useCallback(() => setIsHovered(true), []);
    const handleUnHoverSponsorBasic = useCallback(() => setIsHovered(false), []);

    let basicSponsors = sponsors.basic;
    return (
        <>
            {basicSponsors !== null && basicSponsors.length > 0 && (
                <StyledSponsorItemContainer
                    id="basic-sponsors"
                    className="SponsorItem basic"
                    onMouseEnter={handleHoverSponsorBasic}
                    onMouseLeave={handleUnHoverSponsorBasic}
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
                            <StyledSeparator/>

                            {width < BIG_BREAKPOINT && "BASIC"}
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
                                BASIC
                            </StyledSponsorTitleSlashesContainer>
                        )}
                        <StyledSponsorTitleMargin/>
                    </StyledSponsorTitleContainer>

                    <StyledSponsorLogosContainer className="SponsorLogos">
                        <StyledFlexGrow/>
                        <StyledLogos position="right">
                            {basicSponsors.map((sponsor) => (
                                <a
                                    key={sponsor.name}
                                    href={sponsor.website}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <StyledSponsorIconNano
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
                    </StyledSponsorLogosContainer>
                </StyledSponsorItemContainer>
            )}
        </>
    );
};
