import {
  BIG_BREAKPOINT,
  MOBILE_BREAKPOINT,
  TABLET_BREAKPOINT,
} from '../../constants/BreakPoints';
import {
  COLOR_BLACK_BLUE,
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_YELLOW,
} from '../../styles/colors';
import {
  ROUTE_MEETING_DETAIL,
  ROUTE_SPEAKER_DETAIL,
} from '../../constants/routes';
import { scheduleData1, scheduleData2, scheduleData3 } from './ScheduleData';

import { AvatarCard } from './components/AvatarCard';
import { FC } from 'react';
import LessThanBlueWhiteIcon from '../../assets/images/MoreThanBlueWhiteIcon.svg';
import { Link } from 'react-router-dom';
import MoreThanBlueWhiteIcon from '../../assets/images/LessThanBlueWhiteIcon.svg';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import SpeakersPlanning from '../../assets/images/SpeakersPlanning.jpg';
import SpeakersWelcomer from '../../assets/images/SpeakersWelcomer.jpg';
import TitleSection from '../../components/SectionTitle/TitleSection';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';

const StyledScheduleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 2rem 0rem 2rem;
  margin-bottom: 5rem;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 0 5rem 0rem 2rem;
    margin-bottom: 10rem;
  }
  @media (min-width: ${BIG_BREAKPOINT}px) {
    padding: 0 10rem 0rem 10rem;
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

const StyledScheduleContainer = styled.div`
  padding-top: 3rem;
  width: 100%;
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding-top: 5rem;
  }
`;

const StyledTracksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const StyledTrack = styled.div<{
  background: string;
  color: string;
  width: string;
}>`
  width: ${({ width }) => {
    return width;
  }};
  padding: 0.5rem 0;
  background: ${({ background }) => {
    return background;
  }};
  color: ${({ color }) => {
    return color;
  }};
  font-family: SpaceGrotesk-Bold;
  margin-top: 1rem;
`;

const StyledWelcomerImage = styled.div`
  width: 100%;
  height: 5rem;
  background-image: url(${SpeakersWelcomer});
  background-size: cover;
  background-position: center center;
  position: relative;
  margin-top: 1rem;
`;

export const StyledWelcomerTextContainer = styled.div`
  position: absolute;
  bottom: 0.25rem;
  left: 0.5rem;
`;

export const StyledWelcomerText = styled.p<{ color: string }>`
  color: ${({ color }) => {
    return color;
  }};
  font-family: SpaceGrotesk-Bold;
  text-align: start;
`;

export const StyledWelcomerTextLink = styled.p<{ color: string }>`
  color: ${({ color }) => {
    return color;
  }};
  font-family: SpaceGrotesk-Bold;
  text-align: start;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledPlanningImage = styled.div`
  width: 100%;
  height: 10rem;
  background-image: url(${SpeakersPlanning});
  background-size: cover;
  background-position: center center;
  position: relative;
  margin-top: 1rem;
`;

export const StyledAvatarContainer = styled.div`
  width: 80%;
  margin-top: 1rem;
  position: relative;

  @media only screen and (min-width: ${TABLET_BREAKPOINT}px) {
    width: 30%;

    position: relative;
  }
`;
export const StyledAvatarImage = styled.img`
  width: 100%;
  height: auto;
`;

const Schedule: FC = () => {
  const { width } = useWindowSize();

  const meetingDetailUrl = ROUTE_MEETING_DETAIL('grace-jansen');
  const speakerDetailUrl = ROUTE_SPEAKER_DETAIL('grace-jansen');

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

        <StyledScheduleContainer>
          <StyledTracksContainer>
            <StyledTrack
              width={width < BIG_BREAKPOINT ? '100%' : '30%'}
              background={COLOR_PINK}
              color={COLOR_WHITE}
            >
              TRACK 1
            </StyledTrack>
            <StyledTrack
              width={width < BIG_BREAKPOINT ? '100%' : '30%'}
              background={COLOR_YELLOW}
              color={COLOR_BLUE}
            >
              TRACK 2
            </StyledTrack>
            <StyledTrack
              width={width < BIG_BREAKPOINT ? '100%' : '30%'}
              background={COLOR_GREEN}
              color={COLOR_BLACK_BLUE}
            >
              TRACK 3
            </StyledTrack>
          </StyledTracksContainer>
          <StyledWelcomerImage>
            <StyledWelcomerTextContainer>
              <StyledWelcomerText color={COLOR_YELLOW}>
                WELCOME ALL!
              </StyledWelcomerText>
              <StyledWelcomerText color={COLOR_PINK}>
                08:40 - 09:00
              </StyledWelcomerText>
            </StyledWelcomerTextContainer>
          </StyledWelcomerImage>
          <StyledPlanningImage>
            <StyledWelcomerTextContainer>
              <Link to={meetingDetailUrl} className='link--text'>
                <StyledWelcomerTextLink color={COLOR_BLUE}>
                  THE FUTURE IS <br />
                  KUBERNETES-NATIVE
                </StyledWelcomerTextLink>
              </Link>
              <Link to={speakerDetailUrl} className='link--text'>
                <StyledWelcomerTextLink color={COLOR_PINK}>
                  Grace Jansen
                </StyledWelcomerTextLink>
              </Link>
              <StyledWelcomerText color={COLOR_BLUE}>
                08:40 - 09:00
              </StyledWelcomerText>
            </StyledWelcomerTextContainer>
          </StyledPlanningImage>

          <StyledTrack
            width={'100%'}
            background={COLOR_GREEN}
            color={COLOR_BLACK_BLUE}
          >
            BREAK
          </StyledTrack>

          <StyledTracksContainer>
            {scheduleData1.map((meet, index) => (
              <AvatarCard key={index} meet={meet} />
            ))}
          </StyledTracksContainer>

          <StyledTrack
            width={'100%'}
            background={COLOR_YELLOW}
            color={COLOR_BLUE}
          >
            BREAK
          </StyledTrack>

          <StyledTracksContainer>
            {scheduleData2.map((meet, index) => (
              <AvatarCard key={index} meet={meet} />
            ))}
          </StyledTracksContainer>

          <StyledTrack
            width={'100%'}
            background={COLOR_PINK}
            color={COLOR_WHITE}
          >
            LUNCH BREAK
          </StyledTrack>

          <StyledTracksContainer>
            {scheduleData3.map((meet, index) => (
              <AvatarCard key={index} meet={meet} />
            ))}
          </StyledTracksContainer>

          <StyledTrack
            width={'100%'}
            background={COLOR_GREEN}
            color={COLOR_BLACK_BLUE}
          >
            AFTERNOON BREAK
          </StyledTrack>

          <StyledPlanningImage>
            <StyledWelcomerTextContainer>
              <Link to={meetingDetailUrl} className='link--text'>
                <StyledWelcomerTextLink color={COLOR_BLUE}>
                  THE FUTURE IS <br />
                  KUBERNETES-NATIVE
                </StyledWelcomerTextLink>
              </Link>
              <Link to={speakerDetailUrl} className='link--text'>
                <StyledWelcomerTextLink color={COLOR_PINK}>
                  Grace Jansen
                </StyledWelcomerTextLink>
              </Link>
              <StyledWelcomerText color={COLOR_BLUE}>
                08:40 - 09:00
              </StyledWelcomerText>
            </StyledWelcomerTextContainer>
          </StyledPlanningImage>

          <StyledTrack
            width={'100%'}
            background={COLOR_GREEN}
            color={COLOR_BLACK_BLUE}
          >
            BREAK
          </StyledTrack>

          <StyledTracksContainer>
            {scheduleData1.map((meet, index) => (
              <AvatarCard key={index} meet={meet} />
            ))}
          </StyledTracksContainer>

          <StyledTrack
            width={'100%'}
            background={COLOR_YELLOW}
            color={COLOR_BLUE}
          >
            BREAK
          </StyledTrack>

          <StyledTracksContainer>
            {scheduleData2.map((meet, index) => (
              <AvatarCard key={index} meet={meet} />
            ))}
          </StyledTracksContainer>

          <StyledTrack
            width={'100%'}
            background={COLOR_PINK}
            color={COLOR_WHITE}
          >
            LUNCH BREAK
          </StyledTrack>

          <StyledTracksContainer>
            {scheduleData3.map((meet, index) => (
              <AvatarCard key={index} meet={meet} />
            ))}
          </StyledTracksContainer>

          <StyledTrack
            width={'100%'}
            background={COLOR_PINK}
            color={COLOR_WHITE}
          >
            BREAK
          </StyledTrack>

          <StyledTracksContainer>
            {scheduleData1.map((meet, index) => (
              <AvatarCard key={index} meet={meet} />
            ))}
          </StyledTracksContainer>

          <StyledTrack
            width={'100%'}
            background={COLOR_GREEN}
            color={COLOR_BLACK_BLUE}
          >
            CLOSING CEREMONY
          </StyledTrack>
        </StyledScheduleContainer>
      </StyledScheduleSection>
    </SectionWrapper>
  );
};

export default Schedule;
