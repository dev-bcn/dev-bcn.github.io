import { Suspense, useEffect } from "react";
import { Link } from "react-router";
import { useWindowSize } from "react-use";

import { BIG_BREAKPOINT } from "@constants/BreakPoints";
import { ROUTE_SPEAKERS, ROUTE_TALK_DETAIL } from "@constants/routes";
import conferenceData from "@data/2025.json";
import { Color } from "@styles/colors";

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
import { StyledTalkDescription } from "./SpeakerDetail.style";

import type { ISpeaker } from "@/types/speakers";
import type { FC } from "react";

interface ISpeakerDetailProps {
  speaker: ISpeaker;
  edition?: string;
  speakersRoute?: string;
  talkDetailRoute?: string;
}

const SpeakerDetail: FC<React.PropsWithChildren<ISpeakerDetailProps>> = ({
  speaker,
  edition = conferenceData.edition,
  speakersRoute = ROUTE_SPEAKERS,
  talkDetailRoute = ROUTE_TALK_DETAIL,
}) => {
  const { width } = useWindowSize();

  useEffect(() => {
    document.title = `${speaker.fullName} — ${conferenceData.title} — ${edition}`;
  }, [speaker.fullName, edition]);

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
                  <StyledSocialMediaIcon src="/images/twitterIcon.svg" />
                </StyledLink>
              )}
              {speaker.linkedInUrl && (
                <StyledLink href={speaker.linkedInUrl.url} target={"_blank"}>
                  <StyledSocialMediaIcon
                    src="/images/linkedinIcon.svg"
                    noMargin
                  />
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
                      <StyledSocialMediaIcon src="/images/twitterIcon.svg" />
                    </StyledLink>
                  )}
                  {speaker.linkedInUrl && (
                    <StyledLink
                      href={speaker.linkedInUrl.url}
                      target={"_blank"}
                    >
                      <StyledSocialMediaIcon
                        src="/images/linkedinIcon.svg"
                        noMargin
                      />
                    </StyledLink>
                  )}
                </StyledSocialMediaContainer>
              </>
            )}
            <StyledSlashes src="/images/SlashesWhite.svg" />
          </StyledNameContainer>
          <StyledInfoContainer>
            <StyledFlexCol>
              <StyledSpeakerTitle>{speaker.tagLine}</StyledSpeakerTitle>
              <StyledSpeakerDescription>{speaker.bio}</StyledSpeakerDescription>

              {hasSessions() && (
                <>
                  <h2 style={{ fontSize: "1.5rem" }}>Sessions</h2>
                  <ul
                    style={{
                      paddingLeft: "1.5rem",
                      paddingTop: "0.5rem",
                      listStyleType: "none",
                      marginBottom: "0",
                    }}
                  >
                    {speaker?.sessions?.map((session) => (
                      <li key={session.id}>
                        <StyledTalkDescription
                          to={`${talkDetailRoute}/${session.id}`}
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
                to={speakersRoute}
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
              <StyledMoreThanIcon src="/images/MoreThanBlueIcon.svg" />
            </StyledMoreThanIconContainer>
          </StyledInfoContainer>
        </StyledRightContainer>
      </StyledDetailsContainer>
    </StyledSpeakerDetailContainer>
  );
};

export default SpeakerDetail;
