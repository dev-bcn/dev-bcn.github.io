import {BIG_BREAKPOINT} from "src/constants/BreakPoints";

import {FC, Suspense, useEffect} from "react";
import {useWindowSize} from "react-use";
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
  ROUTE_SPEAKERS_PARAMETERIZED,
  ROUTE_TALK_DETAIL,
} from "src/constants/routes";
import {StyledTalkDescription} from "./SpeakerDetail.style";
import {Link} from "react-router-dom";
import {Color} from "src/styles/colors";
import {ISpeaker} from "../Speakers/Speaker.types";

interface ISpeakerDetailProps {
  speaker: ISpeaker;
  edition: string;
}

const SpeakerDetail: FC<React.PropsWithChildren<ISpeakerDetailProps>> = ({
  speaker,
  edition,
}) => {
  const { width } = useWindowSize();

  useEffect(() => {
    document.title = `${speaker.fullName} — DevBcn - Barcelona Developers Conference — ${edition}`;
  }, [edition, speaker.fullName]);

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
                  <StyledSocialMediaIcon src="images/twitterIcon.svg"/>
                </StyledLink>
              )}
              {speaker.linkedInUrl && (
                <StyledLink href={speaker.linkedInUrl.url} target={"_blank"}>
                  <StyledSocialMediaIcon src="images/linkedinIcon.svg"
                                         noMargin/>
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
                      <StyledSocialMediaIcon src="images/twitterIcon.svg"/>
                    </StyledLink>
                  )}
                  {speaker.linkedInUrl && (
                    <StyledLink
                      href={speaker.linkedInUrl.url}
                      target={"_blank"}
                    >
                      <StyledSocialMediaIcon src="images/linkedinIcon.svg"
                                             noMargin/>
                    </StyledLink>
                  )}
                </StyledSocialMediaContainer>
              </>
            )}
            <StyledSlashes src="images/SlashesWhite.svg"/>
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
                          to={`${ROUTE_TALK_DETAIL}/${session.id}`}
                        >
                          <StyledSpeakerTitle>
                            <img
                                src="/images/MoreThanIcon.svg"
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
                to={ROUTE_SPEAKERS_PARAMETERIZED.replace(":year", edition)}
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
              <StyledMoreThanIcon src="images/LessThanBlueWhiteIcon.svg"/>
            </StyledMoreThanIconContainer>
          </StyledInfoContainer>
        </StyledRightContainer>
      </StyledDetailsContainer>
    </StyledSpeakerDetailContainer>
  );
};

export default SpeakerDetail;
