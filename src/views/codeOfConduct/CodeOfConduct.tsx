import {
  BIG_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../constants/BreakPoints';
import {
  COLOR_BLACK_BLUE,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_YELLOW,
} from '../../styles/colors';
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledSpeakersSection,
} from '../Speakers/Speakers';

import { CodeOfConductTags } from './CodeOfConductData';
import { FC } from 'react';
import { LeftHashWithText } from '../../components/LeftHashWithText/LeftHashWithText';
import LessThanRedIcon from '../../assets/images/LessThanRedIcon.svg';
import LessThanTransparentIcon from '../../assets/images/LessThanTransparentIcon.svg';
import MoreThanRedIcon from '../../assets/images/MoreThanRedIcon.svg';
import MoreThanTransparentIcon from '../../assets/images/MoreThanTransparentIcon.svg';
import { RightHashWithText } from '../../components/RightHashWithText/RightHashWithText';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { StyledMarginBottom } from '../Talks/Talks';
import { StyledTagsWrapper } from '../Talks/components/TalkCard';
import { Tag } from '../../components/Tag/Tag';
import TitleSection from '../../components/SectionTitle/TitleSection';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

const StyledWaveContainer = styled.div`
  background: ${COLOR_PINK};
  overflow-y: hidden;
  height: 3rem;
  width: 100%;
`;

const StyledSectionsSeparator = styled.div`
  background: ${COLOR_WHITE};
  height: 3rem;
  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 5rem;
  }
`;

const StyledConductText = styled.p`
  text-align: start;
  color: ${COLOR_BLACK_BLUE};
`;

const StyleLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 12rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const StyleMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

export const CodeOfConduct: FC = () => {
  const { width } = useWindowSize();

  return (
    <>
      <SectionWrapper color={COLOR_WHITE} marginTop={5}>
        <StyledSpeakersSection>
          <TitleSection
            title='CODE OF CONDUCT'
            subtitle='The JBCNConf is the yearly event
            organised by the non-profit Java User
            Group Barcelona on 23rd of July 2021.
            Conference Talks will held on Friday
            23rd of July 2021.'
            color={COLOR_PINK}
          />
          {width > MOBILE_BREAKPOINT && (
            <>
              <StyledLessIcon src={LessThanRedIcon} />
              <StyledMoreIcon src={MoreThanRedIcon} />
            </>
          )}
        </StyledSpeakersSection>
      </SectionWrapper>
      <StyledSectionsSeparator />
      <SectionWrapper color={COLOR_PINK} marginTop={0}>
        <LeftHashWithText color={COLOR_YELLOW} text='TOPICS' />
        <StyledSpeakersSection>
          <StyledTagsWrapper>
            {CodeOfConductTags.map((tag) => (
              <Tag text={tag} />
            ))}
          </StyledTagsWrapper>
        </StyledSpeakersSection>
      </SectionWrapper>

      <StyledWaveContainer>
        <svg
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d='M-16.64,37.02 C233.92,117.94 330.41,-50.80 555.58,103.13 L500.00,150.00 L0.00,150.00 Z'
            style={{ stroke: 'none', fill: '#ffd166' }}
          ></path>
        </svg>
      </StyledWaveContainer>

      <SectionWrapper color={COLOR_YELLOW} marginTop={0}>
        <RightHashWithText color={COLOR_PINK} text='CODE OF CONDUCT' />
        {width > MOBILE_BREAKPOINT && (
          <>
            <StyleMoreIcon src={LessThanTransparentIcon} />
            <StyleLessIcon src={MoreThanTransparentIcon} />
          </>
        )}
        <StyledSpeakersSection>
          <StyledConductText>
            Our conference is dedicated to providing a harassment-free
            conference experience for everyone, regardless of gender, gender
            identity and expression, age, sexual orientation, disability,
            physical appearance, body size, race, ethnicity, religion (or lack
            thereof), or technology choices.
          </StyledConductText>
          <br />
          <StyledConductText>
            We do not tolerate harassment of conference participants in any
            form. Sexual language and imagery is not appropriate for any
            conference venue, including talks, workshops, parties, Twitter and
            other online media. Conference participants violating these rules
            may be sanctioned or expelled from the conference without a refund
            at the discretion of the conference organisers.
          </StyledConductText>
        </StyledSpeakersSection>
        <StyledMarginBottom />
      </SectionWrapper>
    </>
  );
};
