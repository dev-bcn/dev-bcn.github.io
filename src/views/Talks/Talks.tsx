import {BIG_BREAKPOINT, TABLET_BREAKPOINT} from '../../constants/BreakPoints';

import {FC} from 'react';
import LessThanBlueIcon from '../../assets/images/LessThanBlueIcon.svg';
import MoreThanBlueIcon from '../../assets/images/MoreThanBlueIcon.svg';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import {StyledWrapperSection} from '../JobOffers/JobOffers';
import {TalkCard} from './components/TalkCard';
import TitleSection from '../../components/SectionTitle/TitleSection';
import styled from 'styled-components';
import {talksData} from './TalksData';
import {Color} from "../../styles/colors";

const StyledTitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const StyledTitleIcon = styled.img`
  width: 8%;
  display: none;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
  }
`;

const StyledSpeakersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem 1rem;
`;

const StyledWaveContainer = styled.div`
  background: ${Color.GREEN};
  overflow-y: hidden;
  height: 8rem;
  width: 100%;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    height: 10rem;
  }
`;

export const StyledMarginBottom = styled.div`
  margin-bottom: 20rem;
`;

export const Talks: FC = () => {
  return (
    <>
      <SectionWrapper color={Color.GREEN} marginTop={5}>
        <StyledSpeakersSection>
          <StyledTitleContainer>
            <StyledTitleIcon src={LessThanBlueIcon} />
            <TitleSection
              title='TALKS'
              subtitle='Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.'
              color={Color.BLACK_BLUE}
            />
            <StyledTitleIcon src={MoreThanBlueIcon} />
          </StyledTitleContainer>
        </StyledSpeakersSection>
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d='M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z'
            style={{ stroke: 'none', fill: '#ffd166' }}
          ></path>
        </svg>
      </StyledWaveContainer>
      <SectionWrapper color={Color.YELLOW} marginTop={1}>
        <StyledWrapperSection>
          {talksData.map((talk, index) => (
            <TalkCard talk={talk} index={index} />
          ))}
        </StyledWrapperSection>
        <StyledMarginBottom />
      </SectionWrapper>
    </>
  );
};
