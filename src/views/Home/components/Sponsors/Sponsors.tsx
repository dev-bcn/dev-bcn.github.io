import {BIG_BREAKPOINT,} from '../../../../constants/BreakPoints';
import {Color} from '../../../../styles/colors';
import {FC, useEffect, useState} from 'react';

import LessThanBlueIcon from '../../../../assets/images/MoreThanBlueWhiteIcon.svg';
import LessThanBlueWhiteIcon from '../../../../assets/images/LessThanBlueWhiteIcon.svg';
import SectionWrapper from '../../../../components/SectionWrapper/SectionWrapper';
import SponsorBadge from './SponsorBadge';
import TitleSection from '../../../../components/SectionTitle/TitleSection';
import redhatLogo from '../../../../assets/sponsorIcons/redhatLogo.svg';
import {useWindowSize} from 'react-use';
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
    StyledTitleImg
} from "./Sponsors.style";

type TSponsorName = 'top' | 'premium' | 'regular' | 'startup' | 'virtual';

type TIsHoveredState = {
    top: boolean;
    premium: boolean;
    regular: boolean;
    startup: boolean;
    virtual: boolean;
};

const Sponsors: FC = () => {
    const {width} = useWindowSize();

    const [isHovered, setIsHovered] = useState<TIsHoveredState>({
        top: false,
        premium: false,
        regular: false,
        startup: false,
        virtual: false,
    });

    const [slashes, setSlashes] = useState('');

    function buildSlashes(module: number) {
        const slashesElement = document.getElementById('Slashes');

        const slashesWidth = slashesElement?.offsetWidth || 0;

        let slashes = '';
        for (let index = 0; index < slashesWidth; index++) {
            if (index % module === 0) slashes += '/ ';
        }

        return slashes;
    }

    useEffect(() => {
        const newSlashes = buildSlashes(2);

        setSlashes(newSlashes);
    }, [width]);

    function handleHoverSponsor(name: TSponsorName) {
        setIsHovered({
            ...isHovered,
            [name]: true,
        });
    }

    function handleUnHoverSponsor(name: TSponsorName) {
        setIsHovered({
            ...isHovered,
            [name]: false,
        });
    }

    return (
        <SectionWrapper color={Color.PINK}>
            <StyledSponsorsContainer>
                <StyledTitleContainer className='TitleContainer'>
                    <StyledTitleImg src={LessThanBlueIcon}/>
                    <TitleSection
                        title='SPONSORS'
                        subtitle='Are you a technology company? Interested in meeting
          enthusiasts and geek people for technology? This is a
          priceless opportunity to participate in the first big Java
          and JVM conference in Spain, to pr mote your company
          and to support technological communities.'
                        color={Color.DARK_BLUE}
                    />
                    <StyledTitleImg src={LessThanBlueWhiteIcon}/>
                </StyledTitleContainer>
                {data.sponsors.top.length > 0 &&
                    <StyledSponsorItemContainer
                        className='SponsorItem top'
                        onMouseEnter={() => {
                            handleHoverSponsor('top');
                        }}
                        onMouseLeave={() => {
                            handleUnHoverSponsor('top');
                        }}
                    >
                        <SponsorBadge
                            color={Color.BLUE}
                            position='left'
                            isVisible={isHovered.top}
                        />
                        <StyledSponsorTitleContainer className='SponsorTitle'>
                            <StyledSponsorTitleMargin/>
                            <StyledSponsorTitleSlashesContainer
                                color={
                                    isHovered.top && width >= BIG_BREAKPOINT
                                        ? Color.WHITE
                                        : Color.BLUE
                                }
                                id='Slashes'
                            >
                                TOP
                                <StyledSeparator/>
                                <StyledSlashes>{slashes}</StyledSlashes>
                            </StyledSponsorTitleSlashesContainer>
                            {width >= BIG_BREAKPOINT && (
                                <StyledSponsorTitleSlashesContainer color={Color.BLUE}>
                                    <StyledSlashes>{slashes}</StyledSlashes>
                                </StyledSponsorTitleSlashesContainer>
                            )}
                        </StyledSponsorTitleContainer>

                        <StyledSponsorLogosContainer className='SponsorLogos'>
                            <StyledLogos>
                                <StyledSponsorIconBig
                                    src={isHovered.top ? redhatLogo : redhatLogo}
                                />
                            </StyledLogos>
                            <StyledFlexGrow/>
                        </StyledSponsorLogosContainer>
                    </StyledSponsorItemContainer>}

                {data.sponsors.premium.length > 0 &&
                    <StyledSponsorItemContainer
                        className='SponsorItem premium'
                        onMouseEnter={() => {
                            handleHoverSponsor('premium');
                        }}
                        onMouseLeave={() => {
                            handleUnHoverSponsor('premium');
                        }}
                    >
                        <SponsorBadge
                            color={Color.DARK_BLUE}
                            position='right'
                            isVisible={isHovered.premium}
                        />
                        <StyledSponsorTitleContainer className='SponsorTitle'>
                            <StyledSponsorTitleSlashesContainer
                                color={Color.DARK_BLUE}
                                id='Slashes'
                            >
                                <StyledSlashes>{slashes}</StyledSlashes>
                                <StyledSeparator/>

                                {width < BIG_BREAKPOINT && 'PREMIUM'}
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
                            <StyledSponsorTitleMargin/>
                        </StyledSponsorTitleContainer>

                        <StyledSponsorLogosContainer className='SponsorLogos'>
                            <StyledFlexGrow/>
                            <StyledLogos position='right'>
                                <StyledSponsorIconNormal
                                    src={isHovered.premium ? redhatLogo : redhatLogo}
                                />
                                <StyledSponsorIconNormal
                                    src={isHovered.premium ? redhatLogo : redhatLogo}
                                />
                            </StyledLogos>
                        </StyledSponsorLogosContainer>
                    </StyledSponsorItemContainer>}

                {data.sponsors.regular.length > 0 && <StyledSponsorItemContainer
                    className='SponsorItem regular'
                    onMouseEnter={() => {
                        handleHoverSponsor('regular');
                    }}
                    onMouseLeave={() => {
                        handleUnHoverSponsor('regular');
                    }}
                >
                    <SponsorBadge
                        color={Color.DARK_BLUE}
                        position='left'
                        isVisible={isHovered.regular}
                    />
                    <StyledSponsorTitleContainer className='SponsorTitle'>
                        <StyledSponsorTitleMargin/>
                        <StyledSponsorTitleSlashesContainer
                            color={
                                isHovered.regular && width >= BIG_BREAKPOINT
                                    ? Color.WHITE
                                    : Color.DARK_BLUE
                            }
                            id='Slashes'
                        >
                            REGULAR
                            <StyledSeparator/>
                            <StyledSlashes>{slashes}</StyledSlashes>
                        </StyledSponsorTitleSlashesContainer>
                        {width >= BIG_BREAKPOINT && (
                            <StyledSponsorTitleSlashesContainer color={Color.DARK_BLUE}>
                                <StyledSlashes>{slashes}</StyledSlashes>
                            </StyledSponsorTitleSlashesContainer>
                        )}
                    </StyledSponsorTitleContainer>

                    <StyledSponsorLogosContainer className='SponsorLogos'>
                        <StyledLogos>
                            <StyledSponsorIconSmall
                                src={isHovered.regular ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconSmall
                                src={isHovered.regular ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconSmall
                                src={isHovered.regular ? redhatLogo : redhatLogo}
                            />
                        </StyledLogos>
                        <StyledFlexGrow/>
                    </StyledSponsorLogosContainer>
                </StyledSponsorItemContainer>}

                {data.sponsors.startup.length > 0 &&<StyledSponsorItemContainer
                    className='SponsorItem startup'
                    onMouseEnter={() => {
                        handleHoverSponsor('startup');
                    }}
                    onMouseLeave={() => {
                        handleUnHoverSponsor('startup');
                    }}
                >
                    <SponsorBadge
                        color={Color.YELLOW}
                        position='right'
                        isVisible={isHovered.startup}
                    />
                    <StyledSponsorTitleContainer className='SponsorTitle'>
                        <StyledSponsorTitleSlashesContainer
                            color={Color.YELLOW}
                            id='Slashes'
                        >
                            <StyledSlashes>{slashes}</StyledSlashes>
                            <StyledSeparator/>

                            {width < BIG_BREAKPOINT && 'STARTUP'}
                        </StyledSponsorTitleSlashesContainer>
                        {width >= BIG_BREAKPOINT && (
                            <StyledSponsorTitleSlashesContainer
                                color={
                                    isHovered.startup && width >= BIG_BREAKPOINT
                                        ? Color.WHITE
                                        : Color.YELLOW
                                }
                            >
                                <StyledSlashes>{slashes}</StyledSlashes>
                                STARTUP
                            </StyledSponsorTitleSlashesContainer>
                        )}
                        <StyledSponsorTitleMargin/>
                    </StyledSponsorTitleContainer>

                    <StyledSponsorLogosContainer className='SponsorLogos'>
                        <StyledFlexGrow/>
                        <StyledLogos position='right'>
                            <StyledSponsorIconNano
                                src={isHovered.startup ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconNano
                                src={isHovered.startup ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconNano
                                src={isHovered.startup ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconNano
                                src={isHovered.startup ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconNano
                                src={isHovered.startup ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconNano
                                src={isHovered.startup ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconNano
                                src={isHovered.startup ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconNano
                                src={isHovered.startup ? redhatLogo : redhatLogo}
                            />
                        </StyledLogos>
                    </StyledSponsorLogosContainer>
                </StyledSponsorItemContainer>}

                {data.sponsors.virtual.length > 0 && <StyledSponsorItemContainer
                    className='SponsorItem virtual'
                    onMouseEnter={() => {
                        handleHoverSponsor('virtual');
                    }}
                    onMouseLeave={() => {
                        handleUnHoverSponsor('virtual');
                    }}
                >
                    <SponsorBadge
                        color={Color.DARK_BLUE}
                        position='left'
                        isVisible={isHovered.virtual}
                    />
                    <StyledSponsorTitleContainer className='SponsorTitle'>
                        <StyledSponsorTitleMargin/>
                        <StyledSponsorTitleSlashesContainer
                            color={
                                isHovered.virtual && width >= BIG_BREAKPOINT
                                    ? Color.WHITE
                                    : Color.DARK_BLUE
                            }
                            id='Slashes'
                        >
                            VIRTUAL
                            <StyledSeparator/>
                            <StyledSlashes>{slashes}</StyledSlashes>
                        </StyledSponsorTitleSlashesContainer>
                        {width >= BIG_BREAKPOINT && (
                            <StyledSponsorTitleSlashesContainer color={Color.DARK_BLUE}>
                                <StyledSlashes>{slashes}</StyledSlashes>
                            </StyledSponsorTitleSlashesContainer>
                        )}
                    </StyledSponsorTitleContainer>

                    <StyledSponsorLogosContainer className='SponsorLogos'>
                        <StyledLogos>
                            <StyledSponsorIconMicro
                                src={isHovered.virtual ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconMicro
                                src={isHovered.virtual ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconMicro
                                src={isHovered.virtual ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconMicro
                                src={isHovered.virtual ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconMicro
                                src={isHovered.virtual ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconMicro
                                src={isHovered.virtual ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconMicro
                                src={isHovered.virtual ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconMicro
                                src={isHovered.virtual ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconMicro
                                src={isHovered.virtual ? redhatLogo : redhatLogo}
                            />
                            <StyledSponsorIconMicro
                                src={isHovered.virtual ? redhatLogo : redhatLogo}
                            />
                        </StyledLogos>
                        <StyledFlexGrow/>
                    </StyledSponsorLogosContainer>
                </StyledSponsorItemContainer>}
            </StyledSponsorsContainer>
        </SectionWrapper>
    );
};

export default Sponsors;
