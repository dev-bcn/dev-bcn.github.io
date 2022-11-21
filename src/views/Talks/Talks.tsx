import {FC} from 'react';
import LessThanDarkBlueIcon from '../../assets/images/LessThanDarkBlueIcon.svg';
import MoreThanBlueIcon from '../../assets/images/MoreThanBlueIcon.svg';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import {StyledWrapperSection} from '../JobOffers/JobOffers';
import {TalkCard} from './components/TalkCard';
import TitleSection from '../../components/SectionTitle/TitleSection';
import {Color} from "../../styles/colors";
import data from "../../data/2023.json";
import {
    StyledMarginBottom,
    StyledSpeakersSection,
    StyledTitleContainer,
    StyledTitleIcon,
    StyledWaveContainer
} from "./Talks.style";

export const Talks: FC = () => {
    const currentYearTalks = data.talks;
  return (
    <>
      <SectionWrapper color={Color.DARK_BLUE} marginTop={5}>
        <StyledSpeakersSection>
          <StyledTitleContainer>
            <StyledTitleIcon src={LessThanDarkBlueIcon} />
            <TitleSection
              title='TALKS'
              subtitle='Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP.'
              color={Color.WHITE}
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
            style={{ stroke: 'none', fill: '#4798CA' }}
          ></path>
        </svg>
      </StyledWaveContainer>
      <SectionWrapper color={Color.LIGHT_BLUE} marginTop={1}>
        <StyledWrapperSection>
          {currentYearTalks.map((talk, index) => (
            <TalkCard talk={talk} index={index} />
          ))}
        </StyledWrapperSection>
        <StyledMarginBottom />
      </SectionWrapper>
    </>
  );
};
