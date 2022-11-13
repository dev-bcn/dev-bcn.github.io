import {BIG_BREAKPOINT, MOBILE_BREAKPOINT, TABLET_BREAKPOINT,} from '../../constants/BreakPoints';
import {Color} from '../../styles/colors';

import {FC} from 'react';
import LessThanBlueIcon from '../../assets/images/LessThanBlueIcon.svg';
import MoreThanBlueIcon from '../../assets/images/MoreThanBlueIcon.svg';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import {SpeakerCard} from './components/SpeakersCard';
import TitleSection from '../../components/SectionTitle/TitleSection';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {useWindowSize} from 'react-use';
import data from "../../data/2023.json";

export const StyledSpeakersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 0 5rem;
  }
  @media (min-width: ${BIG_BREAKPOINT}px) {
    padding: 0 10rem;
  }
`;

export const StyledLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 2rem;
  height: 5rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 10rem;
  }
`;

export const StyledMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 10rem;
  }
`;

const SpeakersCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: center;
  z-index: 1;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 5rem 0;
  }
`;

const StyledContainerLeftSlash = styled(motion.div)<{
  positionPercentage: string;
}>`
  position: absolute;
  top: ${({positionPercentage}) => {
    return positionPercentage;
  }};
  left: 0;
  height: 2rem;
  width: 50%;
  opacity: 0.2;
`;

const StyledContainerRightSlash = styled(motion.div)<{
  positionPercentage: string;
}>`
  position: absolute;
  top: ${({ positionPercentage }) => {
    return positionPercentage;
  }};
  right: 0;
  height: 2rem;
  width: 50%;
  opacity: 0.2;
`;

const StyledSlash = styled(motion.p)<{ color: string }>`
  font-family: 'SpaceGrotesk-Bold',sans-serif;
  color: ${({ color }) => {
    return color;
  }};
  font-size: 2rem;
  overflow-y: hidden;
  height: 100%;
`;

const StyledWaveContainer = styled.div`
  background: ${Color.WHITE};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    height: 10rem;
  }
`;

const Speakers: FC = () => {
  const { width } = useWindowSize();
  const speakersCurrentYear = data.speakers;

  return (
    <>
      <SectionWrapper color={Color.GREEN} marginTop={5}>
        <StyledSpeakersSection>
          <TitleSection
            title='SPEAKERS'
            subtitle='Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.'
            color={Color.WHITE}
          />
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyledLessIcon src={LessThanBlueIcon} />
              <StyledMoreIcon src={MoreThanBlueIcon} />
            </>
          )}
          <SpeakersCardsContainer>
            {speakersCurrentYear.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </SpeakersCardsContainer>
          <StyledContainerRightSlash
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
            positionPercentage='20%'
          >
            <StyledSlash color={Color.YELLOW}>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
            </StyledSlash>
          </StyledContainerRightSlash>

          <StyledContainerLeftSlash
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
            positionPercentage='40%'
          >
            <StyledSlash color={Color.PINK}>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
            </StyledSlash>
          </StyledContainerLeftSlash>

          <StyledContainerRightSlash
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
            positionPercentage='60%'
          >
            <StyledSlash color={Color.BLUE}>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
            </StyledSlash>
          </StyledContainerRightSlash>

          <StyledContainerLeftSlash
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
            positionPercentage='80%'
          >
            <StyledSlash color={Color.YELLOW}>
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /
              / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /{' '}
            </StyledSlash>
          </StyledContainerLeftSlash>
        </StyledSpeakersSection>
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d='M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z'
            style={{ stroke: 'none', fill: '#06d6a0' }}
          ></path>
        </svg>
      </StyledWaveContainer>
    </>
  );
};

export default Speakers;
