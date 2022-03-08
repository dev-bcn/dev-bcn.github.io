import { BIG_BREAKPOINT, LARGE_BREAKPOINT } from '../../constants/BreakPoints';
import {
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_WHITE,
  COLOR_YELLOW,
} from '../../styles/colors';

import { FC } from 'react';
import { ISpeakerDetail } from './SpeakerDetailData';
import MoreThanGreenIcon from '../../assets/images/MoreThanGreenIcon.svg';
import SlashesWhite from '../../assets/images/SlashesWhite.svg';
import linkedinIcon from '../../assets/images/linkedinIcon.svg';
import styled from 'styled-components';
import twitterIcon from '../../assets/images/twitterIcon.svg';
import { useWindowSize } from 'react-use';

const StyledSpeakerDetailContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background: ${COLOR_BLUE};
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

const StyledInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledFlexCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    align-items: flex-start;
  }
`;

const StyledMorethanIconContainer = styled.div`
  display: none;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
    align-items: flex-end;
    padding-bottom: 2.5rem;
    width: 18%;
  }

  @media only screen and (min-width: ${LARGE_BREAKPOINT}px) {
    padding-bottom: 1.5rem;
  }
`;

const StyledMoreThanIcon = styled.img`
  display: none;

  @media only screen and (min-width: ${BIG_BREAKPOINT}px) {
    display: flex;
    width: 100%;
  }
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
    height: 250px;
  }

  @media only screen and (min-width: ${LARGE_BREAKPOINT}px) {
    padding: 0.2rem;
    height: 325px;
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
  margin-bottom: 1.5rem;

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

interface ISpeakerDetailProps {
  speaker: ISpeakerDetail;
}

const SpeakerDetail: FC<ISpeakerDetailProps> = ({ speaker }) => {
  const { width } = useWindowSize();

  function buildSlashes(module: number) {
    const slashesElement = document.getElementById('Slashes');

    const slashesWidth = slashesElement?.offsetWidth || 0;

    let slashes = '';
    for (let index = 0; index < slashesWidth; index++) {
      if (index % module === 0) slashes += '/ ';
    }

    return slashes;
  }

  return (
    <>
      <StyledSpeakerDetailContainer className='DetailsContainer'>
        <StyledDetailsContainer className='DetailsContainerInner'>
          {width > BIG_BREAKPOINT && (
            <StyledImageContainer>
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
            <StyledNameContainer className='DetailsTitle'>
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
            <StyledInfoContainer>
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
              <StyledMorethanIconContainer>
                <StyledMoreThanIcon src={MoreThanGreenIcon} />
              </StyledMorethanIconContainer>
            </StyledInfoContainer>
          </StyledRightContainer>
        </StyledDetailsContainer>
      </StyledSpeakerDetailContainer>
    </>
  );
};

export default SpeakerDetail;
