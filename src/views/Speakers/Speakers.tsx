import { FC } from 'react';
import TitleSection from '../../components/SectionTitle/TitleSection';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import {
  COLOR_BLACK_BLUE,
  COLOR_GREEN,
  COLOR_WHITE,
} from '../../styles/colors';
import styled from 'styled-components';
import LessThanBlueIcon from '../../assets/images/LessThanBlueIcon.svg';
import MoreThanBlueIcon from '../../assets/images/MoreThanBlueIcon.svg';
import { useWindowSize } from 'react-use';
import { MOBILE_BREAKPOINT } from '../../constants/BreakPoints';

const StyledSpeakersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitleWrapper = styled.div`
  height: 5rem;
  display: flex;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const StyledLessIcon = styled.img`
  position: absolute;
  left: -1rem;
  top: 0;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const StyledMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 0;
  height: 5rem;
  @media (min-width: 800px) {
    height: 10rem;
  }
`;

const Speakers: FC = ({}) => {
  const { width } = useWindowSize();

  return (
    <SectionWrapper color={COLOR_GREEN} marginTop={8}>
      <StyledSpeakersSection>
        <StyledTitleWrapper>
          <TitleSection
            title='SPEAKERS'
            subtitle='Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.'
            color={COLOR_WHITE}
          />
        </StyledTitleWrapper>
        {width > MOBILE_BREAKPOINT && (
          <>
            <StyledLessIcon src={LessThanBlueIcon} />
            <StyledMoreIcon src={MoreThanBlueIcon} />
          </>
        )}
      </StyledSpeakersSection>
    </SectionWrapper>
  );
};

export default Speakers;
