import { FC } from 'react';
import TitleSection from '../../components/SectionTitle/TitleSection';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { COLOR_BLACK_BLUE, COLOR_WHITE } from '../../styles/colors';
import styled from 'styled-components';
import LessThanBlueIcon from '../../assets/images/LessThanBlueIcon.svg';
import MoreThanBlueIcon from '../../assets/images/MoreThanBlueIcon.svg';
import { useWindowSize } from 'react-use';
import { MOBILE_BREAKPOINT } from '../../constants/BreakPoints';

const StyledJobsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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

const JobOffers: FC = ({}) => {
  const { width } = useWindowSize();

  return (
    <SectionWrapper color={COLOR_WHITE} marginTop={6}>
      <StyledJobsSection>
        <StyledTitleWrapper>
          <TitleSection
            title='JOB OFFERS'
            subtitle='Have a look at some opportunities'
            color={COLOR_BLACK_BLUE}
          />
        </StyledTitleWrapper>

        {width > MOBILE_BREAKPOINT && (
          <>
            <StyledLessIcon src={LessThanBlueIcon} />
            <StyledMoreIcon src={MoreThanBlueIcon} />
          </>
        )}
      </StyledJobsSection>
    </SectionWrapper>
  );
};

export default JobOffers;
