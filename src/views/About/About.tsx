import React, {FC} from 'react';
import TitleSection from '../../components/SectionTitle/TitleSection';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import {MOBILE_BREAKPOINT} from '../../constants/BreakPoints';
import {
    StyledSpeakersSection,
    StyledLessIcon,
    StyledMoreIcon,
} from '../Speakers/Speakers';
import LessThanBlueWhiteIcon from '../../assets/images/LessThanBlueWhiteIcon.svg';
import MoreThanBlueWhiteIcon from '../../assets/images/MoreThanBlueWhiteIcon.svg';
import {useWindowSize} from 'react-use';
import {aboutData} from './AboutData';
import {AboutCard} from './components/AboutCard';
import styled from 'styled-components';
import {StyledMarginBottom} from '../Talks/Talks';
import {Color} from "../../styles/colors";

const StyledUsersWrapper = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const About: FC = () => {
    const {width} = useWindowSize();

    React.useEffect(() => {
        document.title = "DevBcn - About us";
    }, []);

    return (
        <>
            <SectionWrapper color={Color.WHITE} marginTop={8}>
                <StyledSpeakersSection>
                    <TitleSection
                        title='ABOUT US'
                        subtitle='The Barcelona Java User Group is a non profit association
            with a great team and a broad experience in Java
            technologies. Since 2012, we are organizing talks and
            meetups focused on Java topics, looking forward to spin
            this technology from our hometown to the rest of the
            world.'
                        color={Color.BLUE}
                    />
                    {width > MOBILE_BREAKPOINT && (
                        <>
                            <StyledLessIcon src={MoreThanBlueWhiteIcon}/>
                            <StyledMoreIcon src={LessThanBlueWhiteIcon}/>
                        </>
                    )}
                    <StyledUsersWrapper>
                        {aboutData.map((person) => (
                            <AboutCard person={person}/>
                        ))}
                    </StyledUsersWrapper>
                    <StyledMarginBottom/>
                </StyledSpeakersSection>
            </SectionWrapper>
        </>
    );
};
