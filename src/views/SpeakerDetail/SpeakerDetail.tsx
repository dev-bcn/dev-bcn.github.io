import {BIG_BREAKPOINT} from '../../constants/BreakPoints';

import {FC} from 'react';
import {ISpeakerDetail} from './SpeakerDetailData';
import MoreThanGreenIcon from '../../assets/images/MoreThanGreenIcon.svg';
import SlashesWhite from '../../assets/images/SlashesWhite.svg';
import linkedinIcon from '../../assets/images/linkedinIcon.svg';
import twitterIcon from '../../assets/images/twitterIcon.svg';
import {useWindowSize} from 'react-use';
import {
  downVariants,
  leftVariants,
  noVariants,
  rightVariants,
  StyledDetailsContainer,
  StyledFlexCol,
  StyledImageContainer,
  StyledInfoContainer,
  StyledLink,
  StyledMoreThanIcon,
  StyledMoreThanIconContainer,
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
  StyledSpeakerTitle
} from "./Speaker.style";

interface ISpeakerDetailProps {
  speaker: ISpeakerDetail;
}

const SpeakerDetail: FC<ISpeakerDetailProps> = ({ speaker }) => {
  const { width } = useWindowSize();
  return (
    <>
      <StyledSpeakerDetailContainer
        className='DetailsContainer'
        initial='initial'
        animate='animate'
        variants={width < BIG_BREAKPOINT ? downVariants : noVariants}
      >
        <StyledDetailsContainer className='DetailsContainerInner'>
          {width > BIG_BREAKPOINT && (
            <StyledImageContainer
              initial='initial'
              animate='animate'
              variants={leftVariants}
            >
              <StyledSpeakerImgBorder>
                <StyledSpeakerImg photo={speaker.photoUrl} />
              </StyledSpeakerImgBorder>
              <StyledSocialMediaContainer>
                <StyledLink href={speaker.twitterUrl} target={'_blank'}>
                  <StyledSocialMediaIcon src={twitterIcon} />
                </StyledLink>
                <StyledLink href={speaker.linkedinUrl} target={'_blank'}>
                  <StyledSocialMediaIcon src={linkedinIcon} noMargin />
                </StyledLink>
              </StyledSocialMediaContainer>
            </StyledImageContainer>
          )}
          <StyledRightContainer>
            <StyledNameContainer
              className='DetailsTitle'
              initial='initial'
              animate='animate'
              variants={width < BIG_BREAKPOINT ? noVariants : rightVariants}
            >
              <StyledName>{speaker.name}</StyledName>
              {width < BIG_BREAKPOINT && (
                <>
                  <StyledSpeakerImgBorder>
                    <StyledSpeakerImg photo={speaker.photoUrl} />
                  </StyledSpeakerImgBorder>
                  <StyledSocialMediaContainer>
                    <StyledLink href={speaker.twitterUrl} target={'_blank'}>
                      <StyledSocialMediaIcon src={twitterIcon} />
                    </StyledLink>
                    <StyledLink href={speaker.linkedinUrl} target={'_blank'}>
                      <StyledSocialMediaIcon src={linkedinIcon} noMargin />
                    </StyledLink>
                  </StyledSocialMediaContainer>
                </>
              )}
              <StyledSlashes src={SlashesWhite} />
            </StyledNameContainer>
            <StyledInfoContainer
              initial='initial'
              animate='animate'
              variants={downVariants}
            >
              <StyledFlexCol>
                <StyledSpeakerTitle>{speaker.title1}</StyledSpeakerTitle>
                <StyledSpeakerDescription>
                  {speaker.description1}
                </StyledSpeakerDescription>

                <StyledSpeakerTitle>{speaker.title2}</StyledSpeakerTitle>
                <StyledSpeakerDescription>
                  {speaker.description2}
                </StyledSpeakerDescription>
              </StyledFlexCol>
              <StyledMoreThanIconContainer>
                <StyledMoreThanIcon src={MoreThanGreenIcon} />
              </StyledMoreThanIconContainer>
            </StyledInfoContainer>
          </StyledRightContainer>
        </StyledDetailsContainer>
      </StyledSpeakerDetailContainer>
    </>
  );
};

export default SpeakerDetail;
