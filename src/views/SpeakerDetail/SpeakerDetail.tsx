import { BIG_BREAKPOINT } from "../../constants/BreakPoints";

import { FC } from "react";
import MoreThanIcon from "../../assets/images/MoreThanBlueIcon.svg";
import SlashesWhite from "../../assets/images/SlashesWhite.svg";
import linkedinIcon from "../../assets/images/linkedinIcon.svg";
import twitterIcon from "../../assets/images/twitterIcon.svg";
import { useWindowSize } from "react-use";
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
  StyledSpeakerTitle,
} from "./Speaker.style";
import { ROUTE_SPEAKERS, ROUTE_TALK_DETAIL } from "../../constants/routes";
import { StyledTalkDescription } from "./SpeakerDetail.style";
import { Link } from "react-router-dom";
import { Color } from "../../styles/colors";
import { ISpeaker } from "../Speakers/Speaker.types";

interface ISpeakerDetailProps {
  speaker: ISpeaker;
}

const SpeakerDetail: FC<ISpeakerDetailProps> = ({ speaker }) => {
  const { width } = useWindowSize();
  return (
    <>
      <StyledSpeakerDetailContainer
        className="DetailsContainer"
        initial="initial"
        animate="animate"
        variants={width < BIG_BREAKPOINT ? downVariants : noVariants}
      >
        <StyledDetailsContainer className="DetailsContainerInner">
          {width > BIG_BREAKPOINT && (
            <StyledImageContainer
              initial="initial"
              animate="animate"
              variants={leftVariants}
            >
              <StyledSpeakerImgBorder>
                <StyledSpeakerImg photo={speaker.speakerImage} />
              </StyledSpeakerImgBorder>
              <StyledSocialMediaContainer>
                {speaker.twitterUrl && (
                  <StyledLink href={speaker.twitterUrl.url} target={"_blank"}>
                    <StyledSocialMediaIcon src={twitterIcon} />
                  </StyledLink>
                )}
                {speaker.linkedInUrl && (
                  <StyledLink href={speaker.linkedInUrl.url} target={"_blank"}>
                    <StyledSocialMediaIcon src={linkedinIcon} noMargin />
                  </StyledLink>
                )}
              </StyledSocialMediaContainer>
            </StyledImageContainer>
          )}
          <StyledRightContainer>
            <StyledNameContainer
              className="DetailsTitle"
              initial="initial"
              animate="animate"
              variants={width < BIG_BREAKPOINT ? noVariants : rightVariants}
            >
              <StyledName>{speaker.fullName}</StyledName>
              {width < BIG_BREAKPOINT && (
                <>
                  <StyledSpeakerImgBorder>
                    <StyledSpeakerImg photo={speaker.speakerImage} />
                  </StyledSpeakerImgBorder>
                  <StyledSocialMediaContainer>
                    {speaker.twitterUrl && (
                      <StyledLink
                        href={speaker.twitterUrl.url}
                        target={"_blank"}
                      >
                        <StyledSocialMediaIcon src={twitterIcon} />
                      </StyledLink>
                    )}
                    {speaker.linkedInUrl && (
                      <StyledLink
                        href={speaker.linkedInUrl.url}
                        target={"_blank"}
                      >
                        <StyledSocialMediaIcon src={linkedinIcon} noMargin />
                      </StyledLink>
                    )}
                  </StyledSocialMediaContainer>
                </>
              )}
              <StyledSlashes src={SlashesWhite} />
            </StyledNameContainer>
            <StyledInfoContainer
              initial="initial"
              animate="animate"
              variants={downVariants}
            >
              <StyledFlexCol>
                <StyledSpeakerTitle>{speaker.tagLine}</StyledSpeakerTitle>
                <StyledSpeakerDescription>
                  {speaker.bio}
                </StyledSpeakerDescription>

                {speaker.sessions && <h2>Sessions</h2>}
                <ul>
                  {speaker.sessions &&
                    speaker.sessions.map((session, index) => (
                      <li key={index}>
                        <StyledTalkDescription
                          to={ROUTE_TALK_DETAIL + session.id}
                        >
                          <StyledSpeakerTitle>
                            {session.name}
                          </StyledSpeakerTitle>
                        </StyledTalkDescription>
                      </li>
                    ))}
                </ul>

                <Link
                  to={ROUTE_SPEAKERS}
                  style={{
                    color: Color.MAGENTA,
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  🔙 Go back
                </Link>
              </StyledFlexCol>
              <StyledMoreThanIconContainer>
                <StyledMoreThanIcon src={MoreThanIcon} />
              </StyledMoreThanIconContainer>
            </StyledInfoContainer>
          </StyledRightContainer>
        </StyledDetailsContainer>
      </StyledSpeakerDetailContainer>
    </>
  );
};

export default SpeakerDetail;
