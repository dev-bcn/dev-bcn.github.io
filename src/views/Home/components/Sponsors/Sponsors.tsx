import {BIG_BREAKPOINT, LARGE_BREAKPOINT,} from '../../../../constants/BreakPoints';
import {Color} from '../../../../styles/colors';
import {FC, useEffect, useState} from 'react';

import LessThanRedIcon from '../../../../assets/images/LessThanRedIcon.svg';
import LessThanBlueWhiteIcon from '../../../../assets/images/LessThanBlueWhiteIcon.svg';
import whiteBg from "../../../../assets/images/white-blue-bg.png";
import SectionWrapper from '../../../../components/SectionWrapper/SectionWrapper';
import SponsorBadge from './SponsorBadge';
import TitleSection from '../../../../components/SectionTitle/TitleSection';
import redhatLogo from '../../../../assets/sponsorIcons/redhatLogo.svg';
import styled from 'styled-components';
import {useWindowSize} from 'react-use';
import data from "../../../../data/2023.json";

const SponsorMargin = 11;
const sponsorMarginDesktop = 18;

const StyledSponsorsContainer = styled.div`
  position: relative;
  padding-top: 4rem;
  background-image: url(${whiteBg});
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const StyledTitleImg = styled.img`
  height: 4rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const StyledSponsorItemContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1.75rem;
  padding: 11.5rem 0 1rem;
  z-index: 1;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    margin-bottom: 3rem;
  }
`;

const StyledSponsorTitleContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 1rem;
  z-index: 2;
  background: none;
`;

const StyledSponsorTitleMargin = styled.div`
  width: 10%;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    width: ${sponsorMarginDesktop}%;
  }
`;

const StyledSponsorTitleSlashesContainer = styled.div<{ color: string }>`
  display: flex;
  flex-wrap: nowrap;
  width: 90%;
  font-family: 'SpaceGrotesk-Bold', sans-serif;
  color: ${({color}) => color};
  height: 2.75rem;
  line-height: 2.75rem;
  white-space: nowrap;

  overflow: hidden;

  z-index: 2;

  transition: all 0.2s linear;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    width: 41%;
  }
`;

const StyledSlashes = styled.div`
  white-space: nowrap;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 97% 100%, 0% 100%);
`;

const StyledSponsorLogosContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 4.75rem;
  z-index: 2;
  background: none;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    top: 5rem;
  }
`;

const StyledLogos = styled.div<{ position?: 'left' | 'right' }>`
  display: flex;
  width: 100%;

  padding-left: ${({position}) =>
          position === 'right' ? 0 : SponsorMargin}%;
  padding-right: ${({position}) =>
          position === 'right' ? SponsorMargin : 0}%;

  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: center;
    padding-left: ${({position}) =>
            position === 'right' ? 0 : sponsorMarginDesktop}%;
    padding-right: ${({position}) =>
            position === 'right' ? sponsorMarginDesktop : 0}%;
    top: 5rem;
    flex-wrap: wrap;
    width: ${({position}) => (position === 'right' ? 59 : 55)}%;
  }

  @media (min-width: ${LARGE_BREAKPOINT}px) {
    justify-content: ${({position}) =>
            position === 'right' ? 'flex-end' : 'flex-start'};
    padding-left: ${({position}) =>
            position === 'right' ? 0 : sponsorMarginDesktop}%;
    padding-right: ${({position}) =>
            position === 'right' ? sponsorMarginDesktop : 0}%;
    top: 5rem;
  }
`;

const StyledFlexGrow = styled.div`
  flex: 1;
  display: none;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
  }
`;

const StyledSeparator = styled.div`
  width: 7rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    width: 4rem;
  }
`;

const StyledSponsorIconBig = styled.img`
  height: 5rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 7rem;
  }
`;

const StyledSponsorIconNormal = styled.img`
  height: 2.75rem;
  margin-left: 0.5rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 3.5rem;
    margin-left: 2rem;
  }

  @media (min-width: ${LARGE_BREAKPOINT}px) {
    height: 5rem;
    margin-left: 2.5rem;
  }
`;

const StyledSponsorIconSmall = styled.img`
  height: 2.35rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 3rem;
    margin-right: 2rem;
    margin-bottom: 0.75rem;
  }

  @media (min-width: ${LARGE_BREAKPOINT}px) {
    height: 3.25rem;
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const StyledSponsorIconNano = styled.img`
  height: 1.5rem;
  margin-bottom: 1rem;

  margin-left: 0.75rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 1.75rem;
    margin-left: 1rem;
  }

  @media (min-width: ${LARGE_BREAKPOINT}px) {
    height: 2rem;
    margin-left: 2.5rem;
  }
`;

const StyledSponsorIconMicro = styled.img`
  height: 1.5rem;
  margin-bottom: 1rem;

  margin-left: 0.75rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 1.25rem;
    margin-left: 1rem;
  }

  @media (min-width: ${LARGE_BREAKPOINT}px) {
    height: 1.75rem;
    margin-left: 2.5rem;
  }
`;

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
        <SectionWrapper color={Color.WHITE}>
            <StyledSponsorsContainer>
                <StyledTitleContainer className='TitleContainer'>
                    <StyledTitleImg src={LessThanRedIcon}/>
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
