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
                        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies sapien ante, quis pharetra magna luctus ullamcorper. Mauris porttitor nisl in elit consequat, a pellentesque tortor rhoncus. Quisque vel commodo sapien, eget aliquet ligula. Curabitur ac gravida sem, eget pulvinar tellus. Nunc porttitor id metus in commodo. Etiam ultrices eleifend turpis vel convallis. Fusce at feugiat libero, quis fringilla leo. Praesent rutrum sodales blandit. Integer aliquet ultrices nunc ut blandit. Curabitur condimentum molestie urna, sodales pretium lacus tempor ac. Pellentesque sodales libero vel ligula porta dignissim.

'
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
