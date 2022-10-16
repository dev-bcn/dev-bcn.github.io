import {
  BIG_BREAKPOINT,
  LARGE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from '../../constants/BreakPoints';
import {
  Color
} from '../../styles/colors';

import { FC } from 'react';
import { IMeeting } from './MeetingDetailData';
import LessThanIconWhite from '../../assets/images/LessThanIconWhite.svg';
import LessThanRedIcon from '../../assets/images/LessThanRedIcon.svg';
import MoreThanRedIcon from '../../assets/images/MoreThanRedIcon.svg';
import OurSponsors from '../../components/OurSponsors/OurSponsors';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SlashesRed from '../../assets/images/SlashesRed.svg';
import TagBadge from '../../components/TagBadge/TagBadge';
import linkedinIcon from '../../assets/images/linkedinIcon.svg';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import twitterIcon from '../../assets/images/twitterIcon.svg';
import { useWindowSize } from 'react-use';

const StyledContainer = styled.div`
  padding-top: 2rem;
`;

const StyledMeetingTitleContainer = styled.div`
  display: flex;
  width: 100px;
  margin-bottom: 3rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: space-between;
  }
`;

const StyledTitleImg = styled(motion.img)`
  display: none;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    width: 10%;
    display: flex;
    align-items: end;
  }
`;

const StyledTitle = styled(motion.h1)`
  font-weight: 600;
  font-size: 2rem;
  color: ${Color.PINK};
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    text-align: left;
  }
`;

const StyledDescription = styled.p`
  color: ${Color.PINK};
  text-align: center;
  width: 100%;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    text-align: right;
    padding-left: 30%;
  }
`;

const StyledFlexCol = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    align-items: start;
    padding: 0 4rem;
  }
`;

const StyledVideoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  margin-bottom: 2rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    align-items: start;
    padding: 0 calc(10% + 4rem);
  }
`;

const StyledVideoTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const StyledSpeakerDetailContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${Color.GREEN};
  color: ${Color.WHITE};
  width: 100%;
  padding: 1.5rem;
  padding-bottom: 3rem;

  margin-bottom: 2rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: start;
    align-items: start;
    padding: 0;
  }
`;

const StyledLessThan = styled.img`
  display: none;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
    width: 10%;
  }
`;

const StyledDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    flex-direction: row;
    padding: 3rem 0 3rem 3rem;
  }
`;

const StyledImageContainer = styled.div`
  flex-direction: column;
  width: 25%;
  padding: 0 1rem;
  display: none;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
  }
`;

const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    flex-direction: row;
    margin-bottom: 1rem;
  }
`;

const StyledName = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    width: 25%;
    margin-bottom: 0;
    text-align: left;
  }
`;

const StyledSpeakerImgBorder = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 0.75rem;
  padding: 0.3rem;
  border: 1px solid ${Color.YELLOW};

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    padding: 0.2rem;
    height: 200px;
  }

  @media only screen and (min-width: ${LARGE_BREAKPOINT}px) {
    padding: 0.2rem;
    height: 275px;
  }
`;

const StyledSpeakerImg = styled.div<{ photo: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ photo }) => photo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const StyledSlashes = styled.img`
  width: 80%;
  margin-bottom: 0.75rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    margin-bottom: 0;
    width: 75%;
  }
`;

const StyledSpeakerTitle = styled.h4`
  font-size: 1.15rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    text-align: left;
  }
`;

const StyledSocialMediaContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 0.75rem;
`;

const StyledSpeakerDescription = styled.p`
  text-align: justify;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    padding-right: 4rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${Color.WHITE};
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledSocialMediaIcon = styled.img<{ noMargin?: boolean }>`
  height: 1.5rem;
  margin-right: ${({ noMargin }) => (noMargin ? '0' : '0.75rem')};

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    margin-right: ${({ noMargin }) => (noMargin ? '0' : '0.5rem')};
  }
`;

const StyledAbsoluteSlashes = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  color: ${Color.PINK};
  font-size: 2rem;
  height: 2rem;
  font-weight: 900;
  bottom: -0.65rem;
  left: 0;
`;

function getVideoHeight(windowWidth: number) {
  let videoHeight;
  if (windowWidth < MOBILE_BREAKPOINT) {
    videoHeight = 250;
  } else if (windowWidth >= MOBILE_BREAKPOINT && windowWidth < BIG_BREAKPOINT) {
    videoHeight = 300;
  } else if (windowWidth >= BIG_BREAKPOINT && windowWidth < LARGE_BREAKPOINT) {
    videoHeight = 450;
  } else {
    videoHeight = 600;
  }

  return videoHeight.toString();
}

const leftVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const rightVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

const downVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const opacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
interface IMeetingDetailProps {
  meeting: IMeeting;
}

const MeetingDetail: FC<IMeetingDetailProps> = ({ meeting }) => {
  const { width } = useWindowSize();

  let previousColor = 0;

  function getRandomColor() {
    let randomNum = 0;
    do {
      randomNum = Math.floor(Math.random() * 4);
    } while (randomNum === previousColor);

    previousColor = randomNum;

    const mappedColors: any = {
      0: Color.PINK,
      1: Color.YELLOW,
      2: Color.GREEN,
      3: Color.BLUE,
    };

    return mappedColors[randomNum];
  }

  return (
    <SectionWrapper color={Color.WHITE}>
      <StyledContainer className='MeetingDetail'>
        <StyledMeetingTitleContainer className='TitleContainer'>
          <StyledTitleImg
            initial='initial'
            animate='animate'
            variants={leftVariants}
            src={LessThanRedIcon}
          />
          <StyledFlexCol
            initial='initial'
            animate='animate'
            variants={downVariants}
          >
            <StyledTitle>/ {meeting.meetingTitle}</StyledTitle>
            <StyledDescription>{meeting.meetingDescription}</StyledDescription>
          </StyledFlexCol>
          <StyledTitleImg
            initial='initial'
            animate='animate'
            variants={rightVariants}
            src={MoreThanRedIcon}
          />
        </StyledMeetingTitleContainer>
        <StyledVideoContainer
          initial='initial'
          animate='animate'
          variants={opacityVariants}
        >
          <iframe
            width='100%'
            height={getVideoHeight(width)}
            src='https://www.youtube.com/embed/IxqTPYeXk3k'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <StyledVideoTagsContainer>
            {meeting.videoTags.map((tag) => (
              <TagBadge text={tag} color={getRandomColor()} key={tag} />
            ))}
          </StyledVideoTagsContainer>
        </StyledVideoContainer>
        <StyledSpeakerDetailContainer className='DetailsContainer'>
          <StyledLessThan src={LessThanIconWhite} />
          <StyledDetailsContainer className='DetailsContainerInner'>
            {width > BIG_BREAKPOINT && (
              <StyledImageContainer>
                <StyledSpeakerImgBorder>
                  <StyledSpeakerImg photo={meeting.speakerPhotoUrl} />
                </StyledSpeakerImgBorder>
                <StyledSocialMediaContainer>
                  <StyledLink
                    href={meeting.speakerTwitterUrl}
                    target={'_blank'}
                  >
                    <StyledSocialMediaIcon src={twitterIcon} />
                  </StyledLink>
                  <StyledLink
                    href={meeting.speakerLinkedinUrl}
                    target={'_blank'}
                  >
                    <StyledSocialMediaIcon src={linkedinIcon} noMargin />
                  </StyledLink>
                </StyledSocialMediaContainer>
              </StyledImageContainer>
            )}
            <StyledRightContainer>
              <StyledNameContainer className='DetailsTitle'>
                <StyledName>{meeting.speakerName}</StyledName>
                {width < BIG_BREAKPOINT && (
                  <>
                    <StyledSpeakerImgBorder>
                      <StyledSpeakerImg photo={meeting.speakerPhotoUrl} />
                    </StyledSpeakerImgBorder>
                    <StyledSocialMediaContainer>
                      <StyledLink
                        href={meeting.speakerTwitterUrl}
                        target={'_blank'}
                      >
                        <StyledSocialMediaIcon src={twitterIcon} />
                      </StyledLink>
                      <StyledLink
                        href={meeting.speakerLinkedinUrl}
                        target={'_blank'}
                      >
                        <StyledSocialMediaIcon src={linkedinIcon} noMargin />
                      </StyledLink>
                    </StyledSocialMediaContainer>
                  </>
                )}
                <StyledSlashes src={SlashesRed} />
              </StyledNameContainer>
              <StyledSpeakerTitle>{meeting.speakerTitle}</StyledSpeakerTitle>
              <StyledSpeakerDescription>
                {meeting.speakerDescription}
              </StyledSpeakerDescription>
            </StyledRightContainer>
          </StyledDetailsContainer>
          <StyledAbsoluteSlashes>
            / / / / / / / / / / / / / / / / /
          </StyledAbsoluteSlashes>
        </StyledSpeakerDetailContainer>
        <OurSponsors />
      </StyledContainer>
    </SectionWrapper>
  );
};

export default MeetingDetail;
