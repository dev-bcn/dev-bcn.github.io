import {FC} from 'react';
import styled from 'styled-components';
import LinkedinIcon from '../../../components/Icons/Linkedin';
import TwitterIcon from '../../../components/Icons/Twitter';

type AboutCardProps = {
    person: {
        imageNumber: number;
        name: string;
        nameColor: string;
        job: string;
        jobColor: string;
        twitterUrl: URL;
        linkedinUrl: URL;
    };
};

const StyledAboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 1rem 0 1rem;
`;

const StyledAboutImage = styled.img`
  width: 100%;
  max-height: 20rem;
`;

const StyledAboutName = styled.h4<{ color: string }>`
  padding-top: 0.25rem;
  color: ${({color}) => {
    return color;
  }};
`;

const StyledAboutJob = styled.p<{ color: string }>`
  color: ${({color}) => {
    return color;
  }};
  font-size: 0.75rem;
`;
const StyledSocialIconsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0.25rem 0;
`;

export const AboutCard: FC<AboutCardProps> = ({person}) => {
    return (
        <StyledAboutCard>
            <StyledAboutImage
                src={require(`../../../assets/images/FaqsImage${person.imageNumber}.png`)}
            />
            <StyledAboutName color={person.nameColor}>{person.name}</StyledAboutName>
            <StyledAboutJob color={person.jobColor}>{person.job}</StyledAboutJob>
            <StyledSocialIconsWrapper>
                <TwitterIcon color={person.nameColor}
                             twitterUrl={`${person.twitterUrl.hostname}/${person.twitterUrl.pathname}`}/>
                <LinkedinIcon
                    color={person.nameColor}
                    linkedinUrl={`${person.linkedinUrl.hostname}/${person.linkedinUrl.pathname}`}
                />
            </StyledSocialIconsWrapper>
        </StyledAboutCard>
    );
};
