import { FC } from 'react';
import TitleSection from '../../components/SectionTitle/TitleSection';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { COLOR_BLUE, COLOR_WHITE } from '../../styles/colors';
import styled from 'styled-components';
import MoreThanBlueWhiteIcon from '../../assets/images/LessThanBlueWhiteIcon.svg';
import LessThanBlueWhiteIcon from '../../assets/images/MoreThanBlueWhiteIcon.svg';
import { useWindowSize } from 'react-use';
import { BIG_BREAKPOINT, MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from '../../constants/BreakPoints';

const StyledScheduleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 2rem;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 0 5rem;
  }
  @media (min-width: ${BIG_BREAKPOINT}px) {
    padding: 0 10rem;
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

const Schedule: FC = ({}) => {
  const { width } = useWindowSize();

  return (
    <SectionWrapper color={COLOR_WHITE} marginTop={6}>
      <StyledScheduleSection>
          <TitleSection
            title='SCHEDULE'
            subtitle='Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP.'
            color={COLOR_BLUE}
          />
        {width > MOBILE_BREAKPOINT && (
          <>
            <StyledLessIcon src={LessThanBlueWhiteIcon} />
            <StyledMoreIcon src={MoreThanBlueWhiteIcon} />
          </>
        )}

        {/* TODO:
        - div 3 tracks
        - div backroung image relativa con texto absoluto con width 100%
        - siguiente igual
        - igual que el TRACK 3 con width 100% */}
      </StyledScheduleSection>
    </SectionWrapper>
  );
};

export default Schedule;
