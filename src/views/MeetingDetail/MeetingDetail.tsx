import { BIG_BREAKPOINT, MOBILE_BREAKPOINT } from '../../constants/BreakPoints';

import { COLOR_PINK } from '../../styles/colors';
import { FC } from 'react';
import { IMeeting } from './MeetingDetailData';
import LessThanRedIcon from '../../assets/images/LessThanRedIcon.svg';
import MoreThanRedIcon from '../../assets/images/MoreThanRedIcon.svg';
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
  let videoWidth = 0;
  if (windowWidth < MOBILE_BREAKPOINT) {
    videoWidth = 250;
  }

  return videoWidth.toString();
}
interface IMeetingDetailProps {
  meeting: IMeeting;
}

const MeetingDetail: FC<IMeetingDetailProps> = ({ meeting }) => {
  const { width } = useWindowSize();

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
      </StyledVideoContainer>
    </StyledContainer>
  );
};

export default MeetingDetail;
