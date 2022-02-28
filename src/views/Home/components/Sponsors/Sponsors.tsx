import {
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_PINK,
  COLOR_WHITE,
} from '../../../../styles/colors';
import { FC, useEffect, useState } from 'react';

import { BIG_BREAKPOINT } from '../../../../constants/BreakPoints';
import LessThanRedIcon from '../../../../assets/images/LessThanRedIcon.svg';
import MoreThanRedIcon from '../../../../assets/images/MoreThanRedIcon.svg';
import SectionWrapper from '../../../../components/SectionWrapper/SectionWrapper';
import SponsorBadge from './SponsorBadge';
import TitleSection from '../../../../components/SectionTitle/TitleSection';
import adevintaLogo from '../../../../assets/sponsorIcons/adevintaLogo.svg';
import ocadoLogo from '../../../../assets/sponsorIcons/ocadoLogo.svg';
import redhatLogo from '../../../../assets/sponsorIcons/redhatLogo.svg';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

const SponsorMargin = 11;
const sponsorMarginDesktop = 18;

const StyledSponsorsContainer = styled.div`
  position: relative;
  padding-top: 4rem;
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
  padding: 1rem 0;
  padding-top: 11.5rem;
  z-index: 1;
  margin-bottom: 0.5rem;

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
  font-family: 'SpaceGrotesk-Bold';
  color: ${({ color }) => color};
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

const StyledSponsorLogosContainer = styled.div<{ position?: 'left' | 'right' }>`
  display: flex;
  padding-left: ${({ position }) =>
    position === 'right' ? 0 : SponsorMargin}%;
  padding-right: ${({ position }) =>
    position === 'right' ? SponsorMargin : 0}%;
  width: 100%;
  position: absolute;
  top: 4.25rem;
  z-index: 2;
  background: none;
  justify-content: ${({ position }) =>
    position === 'right' ? 'flex-end' : 'flex-start'};

  @media (min-width: ${BIG_BREAKPOINT}px) {
    padding-left: ${({ position }) =>
      position === 'right' ? 0 : sponsorMarginDesktop}%;
    padding-right: ${({ position }) =>
      position === 'right' ? sponsorMarginDesktop : 0}%;
    top: 5rem;
  }
`;

const StyledSeparator = styled.div`
  width: 10rem;

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
  height: 3rem;
  margin-left: 0.5rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 5rem;
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

const Sponsors: FC = ({}) => {
  const { width } = useWindowSize();

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
    <SectionWrapper color={COLOR_WHITE}>
      <StyledSponsorsContainer>
        <StyledTitleContainer className='TitleContainer'>
          <StyledTitleImg src={LessThanRedIcon} />
          <TitleSection
            title='SPONSORS'
            subtitle='Are you a technology company? Interested in meeting
          enthusiasts and geek people for technology? This is a
          priceless opportunity to participate in the first big Java
          and JVM conference in Spain, to pr mote your company
          and to support technological communities.'
            color={COLOR_PINK}
          />
          <StyledTitleImg src={MoreThanRedIcon} />
        </StyledTitleContainer>

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
            color={COLOR_BLUE}
            position='left'
            isVisible={isHovered.top}
          />
          <StyledSponsorTitleContainer className='SponsorTitle'>
            <StyledSponsorTitleMargin />
            <StyledSponsorTitleSlashesContainer
              color={
                isHovered.top && width >= BIG_BREAKPOINT
                  ? COLOR_WHITE
                  : COLOR_BLUE
              }
              id='Slashes'
            >
              TOP
              <StyledSeparator />
              <StyledSlashes>{slashes}</StyledSlashes>
            </StyledSponsorTitleSlashesContainer>
            {width >= BIG_BREAKPOINT && (
              <StyledSponsorTitleSlashesContainer color={COLOR_BLUE}>
                <StyledSlashes>{slashes}</StyledSlashes>
              </StyledSponsorTitleSlashesContainer>
            )}
          </StyledSponsorTitleContainer>

          <StyledSponsorLogosContainer className='SponsorLogos'>
            <StyledSponsorIconBig
              src={isHovered.top ? redhatLogo : redhatLogo}
            />
          </StyledSponsorLogosContainer>
        </StyledSponsorItemContainer>

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
            color={COLOR_GREEN}
            position='right'
            isVisible={isHovered.premium}
          />
          <StyledSponsorTitleContainer className='SponsorTitle'>
            <StyledSponsorTitleSlashesContainer
              color={COLOR_GREEN}
              id='Slashes'
            >
              <StyledSlashes>{slashes}</StyledSlashes>
              <StyledSeparator />

              {width < BIG_BREAKPOINT && 'PREMIUM'}
            </StyledSponsorTitleSlashesContainer>
            {width >= BIG_BREAKPOINT && (
              <StyledSponsorTitleSlashesContainer
                color={
                  isHovered.premium && width >= BIG_BREAKPOINT
                    ? COLOR_WHITE
                    : COLOR_GREEN
                }
              >
                <StyledSlashes>{slashes}</StyledSlashes>
                PREMIUM
              </StyledSponsorTitleSlashesContainer>
            )}
            <StyledSponsorTitleMargin />
          </StyledSponsorTitleContainer>

          <StyledSponsorLogosContainer
            className='SponsorLogos'
            position='right'
          >
            <StyledSponsorIconNormal
              src={isHovered.premium ? redhatLogo : redhatLogo}
            />
            <StyledSponsorIconNormal
              src={isHovered.premium ? redhatLogo : redhatLogo}
            />
          </StyledSponsorLogosContainer>
        </StyledSponsorItemContainer>
      </StyledSponsorsContainer>
    </SectionWrapper>
  );
};

export default Sponsors;
