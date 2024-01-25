import { BIG_BREAKPOINT } from "../../constants/BreakPoints";

import { FC, Suspense } from "react";
import MoreThanIcon from "../../assets/images/MoreThanBlueIcon.svg";
import LessThan from "../../assets/images/MoreThanIcon.svg";
import SlashesWhite from "../../assets/images/SlashesWhite.svg";
import linkedinIcon from "../../assets/images/linkedinIcon.svg";
import twitterIcon from "../../assets/images/twitterIcon.svg";
import { useWindowSize } from "react-use";
import {
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
  StyledSpeakerTitle,
} from "./Speaker.style";
import {
  ROUTE_2023_SPEAKERS,
  ROUTE_2023_TALK_DETAIL,
} from "../../constants/routes";
import { StyledTalkDescription } from "./SpeakerDetail.style";
import { Link } from "react-router-dom";
import { Color } from "../../styles/colors";
import { ISpeaker } from "../Speakers/Speaker.types";

interface ISpeakerDetailProps {
  speaker: ISpeaker;
}

const SpeakerDetail2023: FC<React.PropsWithChildren<ISpeakerDetailProps>> = ({ speaker }) => {
  const { width } = useWindowSize();

  const hasSessions = (): boolean =>
    (speaker.sessions && speaker.sessions.length > 0) || false;

  return (
    <StyledSpeakerDetailContainer className="DetailsContainer">
      <StyledDetailsContainer className="DetailsContainerInner">
        {width > BIG_BREAKPOINT && (
          <StyledImageContainer>
            <Suspense fallback={<p>loading</p>}>
              <StyledSpeakerImg
                src={speaker.speakerImage}
                alt={speaker.fullName}
              />
            </Suspense>
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
          <StyledNameContainer>
            <StyledName>{speaker.fullName}</StyledName>
            {width < BIG_BREAKPOINT && (
              <>
                <Suspense fallback={<p>loading</p>}>
                  <StyledSpeakerImg
                    src={speaker.speakerImage}
                    alt={speaker.fullName}
                  />
                </Suspense>
                <StyledSocialMediaContainer>
                  {speaker.twitterUrl && (
                    <StyledLink href={speaker.twitterUrl.url} target={"_blank"}>
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
          <StyledInfoContainer>
            <StyledFlexCol>
              <StyledSpeakerTitle>{speaker.tagLine}</StyledSpeakerTitle>
              <StyledSpeakerDescription>{speaker.bio}</StyledSpeakerDescription>

              {hasSessions() && (
                <>
                  <h2>Sessions</h2>
                  <ul
                    style={{
                      paddingLeft: "40px",
                      paddingTop: "20px",
                      listStyleType: "none",
                    }}
                  >
                    {speaker?.sessions?.map((session) => (
                      <li key={session.id}>
                        <StyledTalkDescription
                          to={`${ROUTE_2023_TALK_DETAIL}/${session.id}`}
                        >
                          <StyledSpeakerTitle>
                            <img
                              src={LessThan}
                              height={12}
                              alt="session"
                              style={{ paddingRight: "0.5rem" }}
                            />
                            {session.name}
                          </StyledSpeakerTitle>
                        </StyledTalkDescription>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <Link
                to={ROUTE_2023_SPEAKERS}
                style={{
                  color: Color.BLACK_BLUE,
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Go back
              </Link>
            </StyledFlexCol>
            <StyledMoreThanIconContainer>
              <StyledMoreThanIcon src={MoreThanIcon} />
            </StyledMoreThanIconContainer>
          </StyledInfoContainer>
        </StyledRightContainer>
      </StyledDetailsContainer>
    </StyledSpeakerDetailContainer>
  );
};

export default SpeakerDetail2023;
