import { COLOR_BLUE, COLOR_PINK, COLOR_WHITE } from '../../../../styles/colors';
import { FC, useEffect, useState } from 'react';

import { BIG_BREAKPOINT } from '../../../../constants/BreakPoints';
import LessThanRedIcon from '../../../../assets/images/LessThanRedIcon.svg';
import MoreThanRedIcon from '../../../../assets/images/MoreThanRedIcon.svg';
import SectionWrapper from '../../../../components/SectionWrapper/SectionWrapper';
import SponsorBadge from './SponsorBadge';
import TitleSection from '../../../../components/SectionTitle/TitleSection';
import { debug } from 'console';
import redhatIcon from '../../../../assets/sponsorIcons/redhatIcon.svg';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

const SponsorMargin = 18;

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
  padding-top: 10.25rem;
  z-index: 1;
  margin-bottom: 2rem;
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
    width: ${SponsorMargin}%;
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

const StyledSponsorLogosContainer = styled.div`
  display: flex;
  padding-left: ${SponsorMargin}%;
  width: 100%;
  position: absolute;
  top: 3.25rem;
  z-index: 2;
  background: none;
`;

const StyledSeparator = styled.div`
  width: 2rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    width: 4rem;
  }
`;

const StyledSponsorIconBig = styled.img`
  height: 7rem;
`;

type TSponsorName = 'top' | 'premium' | 'regular' | 'startup' | 'virtual';

const Sponsors: FC = ({}) => {
  const { width } = useWindowSize();

  const [isHovered, setIsHovered] = useState({
    top: false,
  });

  const [slashes, setSlashes] = useState('');

  function buildSlashes() {
    const slashesElement = document.getElementById('Slashes');
    console.log(slashesElement);

    const slashesWidth = slashesElement?.offsetWidth || 0;

    let slashes = '';
    for (let index = 0; index < slashesWidth; index++) {
      if (index % 2 === 0) slashes += '/ ';
    }

    return slashes;
  }

  useEffect(() => {
    const newSlashes = buildSlashes();

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
          className='SponsorItem'
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
              color={isHovered.top ? COLOR_WHITE : COLOR_BLUE}
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
            <StyledSponsorIconBig src={redhatIcon} />
          </StyledSponsorLogosContainer>
        </StyledSponsorItemContainer>
      </StyledSponsorsContainer>
    </SectionWrapper>
  );
};

export default Sponsors;
