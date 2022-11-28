import {BIG_BREAKPOINT, LARGE_BREAKPOINT, MOBILE_BREAKPOINT,} from '../../constants/BreakPoints';
import {Color} from '../../styles/colors';

import {FC} from 'react';
import {IMeeting} from './MeetingDetailData';
import LessThanIconWhite from '../../assets/images/LessThanIconWhite.svg';
import LessThanIcon from '../../assets/images/LessThanBlueIcon.svg';
import MoreThanIcon from '../../assets/images/MoreThanBlueIcon.svg';
import OurSponsors from '../../components/OurSponsors/OurSponsors';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import Slashes from '../../assets/images/SlashesWhite.svg';
import TagBadge from '../../components/TagBadge/TagBadge';
import linkedinIcon from '../../assets/images/linkedinIcon.svg';
import twitterIcon from '../../assets/images/twitterIcon.svg';
import {useWindowSize} from 'react-use';
import {
  StyledAbsoluteSlashes,
  StyledContainer,
  StyledDescription,
  StyledDetailsContainer,
  StyledFlexCol,
  StyledImageContainer,
  StyledLessThan,
  StyledLink,
  StyledMeetingTitleContainer,
  StyledName,
  StyledNameContainer,
  StyledRightContainer,
  StyledSlashes,
  StyledSocialMediaContainer,
  StyledSocialMediaIcon,
  StyledSpeakerDescription,
  StyledSpeakerDetailContainer,
  StyledSpeakerImg,
  StyledSpeakerImgBorder,
  StyledSpeakerTitle,
  StyledTitle,
  StyledTitleImg,
  StyledVideoContainer,
  StyledVideoTagsContainer
} from "./Style.MeetingDetail";
const getVideoHeight = (windowWidth: number) => {
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
};

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

  const getRandomColor = () => {
    let randomNum = 0;
    do {
      randomNum = Math.floor(Math.random() * 4);
    } while (randomNum === previousColor);

    previousColor = randomNum;

    const mappedColors: any = {
      0: Color.DARK_BLUE,
      1: Color.YELLOW,
      2: Color.DARK_BLUE,
      3: Color.BLUE,
    };

    return mappedColors[randomNum];
  };

  return (
    <SectionWrapper color={Color.WHITE}>
      <StyledContainer className='MeetingDetail'>
        <StyledMeetingTitleContainer className='TitleContainer'>
          <StyledTitleImg
            initial='initial'
            animate='animate'
            variants={leftVariants}
            src={LessThanIcon}
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
            src={MoreThanIcon}
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
                <StyledSlashes src={Slashes} />
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
