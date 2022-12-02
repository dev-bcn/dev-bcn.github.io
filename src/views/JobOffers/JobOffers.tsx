import {
    BIG_BREAKPOINT,
    MOBILE_BREAKPOINT,
    TABLET_BREAKPOINT,
} from '../../constants/BreakPoints';
import {Color} from '../../styles/colors';
import {jobsAdevintaData, jobsMangoData, jobsWordlineData} from './JobsData';

import React, {FC} from 'react';
import JobsCard from './components/JobsCard';
import {LeftHashWithText} from '../../components/LeftHashWithText/LeftHashWithText';
import LessThanBlueIcon from '../../assets/images/LessThanBlueIcon.svg';
import MoreThanBlueIcon from '../../assets/images/MoreThanBlueIcon.svg';
import {RightHashWithText} from '../../components/RightHashWithText/RightHashWithText';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import TitleSection from '../../components/SectionTitle/TitleSection';
import styled from 'styled-components';
import {useWindowSize} from 'react-use';
import data from "../../data/2023.json";

export const StyledWrapperSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const StyledTitleContainer = styled.div`
  width: 100%;
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
  top: 2rem;
  height: 5rem;
  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 10rem;
    top: 0;
  }
`;

const StyledMoreIcon = styled.img`
  position: absolute;
  right: -1rem;
  top: 2rem;
  height: 5rem;
  @media (min-width: ${BIG_BREAKPOINT}px) {
    height: 10rem;
    top: 0;
  }
`;

const JobOffers: FC = () => {
    const {width} = useWindowSize();

    React.useEffect(() => {
        document.title = `Job Offers - DevBcn - ${data.edition}`;
    }, []);

    return (
        <SectionWrapper color={Color.WHITE} marginTop={6}>
            <StyledWrapperSection>
                <StyledTitleContainer>
                    <TitleSection
                        title='JOB OFFERS'
                        subtitle='Have a look at some opportunities'
                        color={Color.BLACK_BLUE}
                    />
                </StyledTitleContainer>
                {width > MOBILE_BREAKPOINT && (
                    <>
                        <StyledLessIcon src={LessThanBlueIcon}/>
                        <StyledMoreIcon src={MoreThanBlueIcon}/>
                    </>
                )}
                <RightHashWithText color={Color.DARK_BLUE} text='ADEVINTA'/>
                {jobsAdevintaData.map((item, index) => (
                    <JobsCard item={item} index={index} key={index}/>
                ))}
                <LeftHashWithText color={Color.DARK_BLUE} text='MANGO'/>
                {jobsMangoData.map((item, index) => (
                    <JobsCard item={item} index={index} key={index}/>
                ))}
                <RightHashWithText color={Color.DARK_BLUE} text='WORDLINE'/>
                {jobsWordlineData.map((item, index) => (
                    <JobsCard item={item} index={index} key={index}/>
                ))}
            </StyledWrapperSection>
        </SectionWrapper>
    );
};

export default JobOffers;
