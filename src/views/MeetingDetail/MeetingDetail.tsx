import {
  BIG_BREAKPOINT,
  LARGE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from '../../constants/BreakPoints';
import {
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_YELLOW,
} from '../../styles/colors';
import styled, { css } from 'styled-components';

import { FC } from 'react';
import { IMeeting } from './MeetingDetailData';
import LessThanIconWhite from '../../assets/images/LessThanIconWhite.svg';
import LessThanRedIcon from '../../assets/images/LessThanRedIcon.svg';
import MoreThanRedIcon from '../../assets/images/MoreThanRedIcon.svg';
import SlashesRed from '../../assets/images/SlashesRed.svg';
import TagBadge from '../../components/TagBadge/TagBadge';
import linkedinIcon from '../../assets/images/linkedinIcon.svg';
import twitterIcon from '../../assets/images/twitterIcon.svg';
import { useWindowSize } from 'react-use';

const StyledContainer = styled.div`
  padding-top: 2rem;
`;

const StyledMeetingTitleContainer = styled.div`
  display: flex;
  width: 100;
  margin-bottom: 3rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: space-between;
  }
`;

const StyledTitleImg = styled.img`
  display: none;

  @media (min-width: ${BIG_BREAKPOINT}px) {
    width: 10%;
    display: flex;
    align-items: end;
  }
`;

const StyledTitle = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  color: ${COLOR_PINK};
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    text-align: left;
  }
`;

const StyledDescription = styled.p`
  color: ${COLOR_PINK};
  text-align: center;
  width: 100%;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    text-align: right;
    padding-left: 30%;
  }
`;

const StyledFlexCol = styled.div`
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

const StyledVideoContainer = styled.div`
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
  background: ${COLOR_GREEN};
  color: ${COLOR_WHITE};
  width: 100%;
  padding: 1.5rem;
  padding-bottom: 3rem;

  margin-bottom: 2rem;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    justify-content: start;
    padding: 0;
    align-items: start;
    padding-right: 0;
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
    padding: 3rem;
    padding-right: 0;
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
  border: 1px solid ${COLOR_YELLOW};

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
  color: ${COLOR_WHITE};
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
  color: ${COLOR_PINK};
  font-size: 2rem;
  height: 2rem;
  font-weight: 900;
  bottom: -0.65rem;
  left: 0;
`;

function getVideoHeight(windowWidth: number) {
  let videoHeight = 0;
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

function getRandomColor() {
  const randomNum = Math.floor(Math.random() * 4);

  const mappedColors: any = {
    0: COLOR_PINK,
    1: COLOR_YELLOW,
    2: COLOR_GREEN,
    3: COLOR_BLUE,
  };

  return mappedColors[randomNum];
}
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
      0: COLOR_PINK,
      1: COLOR_YELLOW,
      2: COLOR_GREEN,
      3: COLOR_BLUE,
    };

    return mappedColors[randomNum];
  }

  return (
    <StyledContainer className='MeetingDetail'>
      <StyledMeetingTitleContainer className='TitleContainer'>
        <StyledTitleImg src={LessThanRedIcon} />
        <StyledFlexCol>
          <StyledTitle>/ {meeting.meetingTitle}</StyledTitle>
          <StyledDescription>{meeting.meetingDescription}</StyledDescription>
        </StyledFlexCol>
        <StyledTitleImg src={MoreThanRedIcon} />
      </StyledMeetingTitleContainer>
      <StyledVideoContainer>
        <iframe
          width='100%'
          height={getVideoHeight(width)}
          src='https://www.youtube.com/embed/IxqTPYeXk3k'
          title='YouTube video player'
          frameBorder='0'
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
                <StyledLink href={meeting.speakerTwitterUrl} target={'_blank'}>
                  <StyledSocialMediaIcon src={twitterIcon} />
                </StyledLink>
                <StyledLink href={meeting.speakerLinkedinUrl} target={'_blank'}>
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
    </StyledContainer>
  );
};

export default MeetingDetail;
