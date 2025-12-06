import {
    PremiumSponsorImage,
    RegularSponsorImage,
    StyledFlexGrow,
    StyledLogos,
    StyledSeparator,
    StyledSlashes,
    StyledSponsorIconMicro,
    StyledSponsorIconNano,
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

type ImageSize = "premium" | "regular" | "nano" | "micro";

interface SponsorTierProps {
    sponsors: Sponsor[] | null;
    title: string;
    id: string;
    badgeColor: string;
    badgePosition: "left" | "right";
    imageSize: ImageSize;
    testId?: string;
}

const ImageComponents: Record<ImageSize, typeof PremiumSponsorImage> = {
    premium: PremiumSponsorImage,
    regular: RegularSponsorImage,
    nano: StyledSponsorIconNano,
    micro: StyledSponsorIconMicro,
};

export const SponsorTier: FC<React.PropsWithChildren<SponsorTierProps>> = ({
    sponsors,
    title,
    id,
    badgeColor,
    badgePosition,
    imageSize,
    testId,
}) => {
    const { width, slashes, isHovered, handleHover, handleUnHover } =
        useSponsorsHook({
            numberOfSlashGroups: 2,
        });

    const ImageComponent = ImageComponents[imageSize];
    const isRightAligned = badgePosition === "right";

    if (!sponsors || sponsors.length === 0) {
        return null;
    }

    const titleColor =
        isHovered && width >= BIG_BREAKPOINT ? Color.WHITE : badgeColor;

    return (
        <StyledSponsorItemContainer
            id={id}
            className={`SponsorItem ${id}`}
            data-testid={testId}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnHover}
        >
            <SponsorBadge
                color={badgeColor}
                position={badgePosition}
                isVisible={isHovered}
            />

            <StyledSponsorTitleContainer className="SponsorTitle">
                {!isRightAligned && <StyledSponsorTitleMargin />}

                {isRightAligned ? (
                    <>
                        <StyledSponsorTitleSlashesContainer color={badgeColor} id="Slashes">
                            <StyledSlashes>{slashes}</StyledSlashes>
                            <StyledSeparator />
                            {width < BIG_BREAKPOINT && title}
                        </StyledSponsorTitleSlashesContainer>
                        {width >= BIG_BREAKPOINT && (
                            <StyledSponsorTitleSlashesContainer color={titleColor}>
                                <StyledSlashes>{slashes}</StyledSlashes>
                                {title}
                            </StyledSponsorTitleSlashesContainer>
                        )}
                        <StyledSponsorTitleMargin />
                    </>
                ) : (
                    <>
                        <StyledSponsorTitleSlashesContainer color={titleColor} id="Slashes">
                            {title}
                            <StyledSeparator />
                            <StyledSlashes>{slashes}</StyledSlashes>
                        </StyledSponsorTitleSlashesContainer>
                        {width >= BIG_BREAKPOINT && (
                            <StyledSponsorTitleSlashesContainer color={badgeColor}>
                                <StyledSlashes>{slashes}</StyledSlashes>
                            </StyledSponsorTitleSlashesContainer>
                        )}
                    </>
                )}
            </StyledSponsorTitleContainer>

            <StyledSponsorLogosContainer className="SponsorLogos">
                {isRightAligned && <StyledFlexGrow />}
                <StyledLogos position={isRightAligned ? "right" : undefined}>
                    {sponsors.map((sponsor) => (
                        <a
                            key={sponsor.name}
                            href={sponsor.website}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <ImageComponent
                                src={sponsor.image}
                                alt={sponsor.name}
                                style={{
                                    filter: isHovered
                                        ? `drop-shadow(2px 2px 2px ${Color.LIGHT_BLUE})`
                                        : "none",
                                }}
                            />
                        </a>
                    ))}
                </StyledLogos>
                {!isRightAligned && <StyledFlexGrow />}
            </StyledSponsorLogosContainer>
        </StyledSponsorItemContainer>
    );
};

export default SponsorTier;
