import {
  BIG_BREAKPOINT,
  LARGE_BREAKPOINT,
  MOBILE_BREAKPOINT,
} from '../../constants/BreakPoints';
import {
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_PINK,
  COLOR_YELLOW,
} from '../../styles/colors';

import { FC } from 'react';
import { IMeeting } from './MeetingDetailData';
import LessThanRedIcon from '../../assets/images/LessThanRedIcon.svg';
import MoreThanRedIcon from '../../assets/images/MoreThanRedIcon.svg';
import TagBadge from '../../components/TagBadge/TagBadge';
import styled from 'styled-components';
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
            <TagBadge text={tag} color={getRandomColor()} />
          ))}
        </StyledVideoTagsContainer>
      </StyledVideoContainer>
    </StyledContainer>
  );
};

export default MeetingDetail;
