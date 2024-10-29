import React, {FC} from "react";
import {Link} from "react-router-dom";
import {StyledJobsInfo} from "../../JobOffers/components/JobsCard";
import {Tag} from "src/components/Tag/Tag";
import {
  ROUTE_SPEAKER_DETAIL_PARAMETERIZED,
  ROUTE_TALK_DETAIL,
} from "src/constants/routes";
import {
  CategoryItemEnum,
  QuestionAnswers,
  SessionCategory,
  SessionSpeaker,
} from "../Talk.types";
import {
  extractSessionCategoryInfo,
  extractSessionTags,
} from "../UseFetchTalks";
import {
  StyledSessionCard,
  StyledSessionText,
  StyledTagsWrapper,
  StyledTalkSpeaker,
  StyledTalkTitle,
  StyledVoteTalkLink,
} from "../Talks.style";
import {Color} from "src/styles/colors";
import {Edition} from "../../Home/HomeWrapper";

export interface TalkCardProps {
  talk: {
    id: number;
    title: string;
    talkImage?: number;
    speakers: SessionSpeaker[];
    level?: string;
    link?: string;
    tags?: string[];
    track: string;
    categories: SessionCategory[];
    questionAnswers: QuestionAnswers[];
  };
  showTrack?: boolean;
  openFeedback?: Edition["openFeedback"];
}

export const TalkCard: FC<React.PropsWithChildren<TalkCardProps>> = ({
  showTrack = false,
  talk,
  openFeedback,
}) => {
  const edition = localStorage.getItem("edition") ?? "2025";
  return (
    <StyledSessionCard>
      <StyledJobsInfo>
        <StyledTalkTitle
          to={`${ROUTE_TALK_DETAIL.replace(":year", edition)}/${talk.id}`}
        >
          {talk.title}
        </StyledTalkTitle>
        <StyledSessionText>
          {talk.speakers && Array.isArray(talk.speakers) && talk.speakers.map((speaker: SessionSpeaker) => (
            <StyledTalkSpeaker key={speaker.id}>
              <Link to={`${ROUTE_SPEAKER_DETAIL_PARAMETERIZED}/${speaker.id}`}>
                {speaker.name}
              </Link>
            </StyledTalkSpeaker>
          ))}
        </StyledSessionText>
        <StyledSessionText>
          {`${extractSessionCategoryInfo(
            talk.categories,
            CategoryItemEnum.Format,
          )} `}
          {extractSessionCategoryInfo(talk.categories || [])}{" "}
        </StyledSessionText>
        {showTrack && (
          <StyledSessionText>
            <strong>Track: </strong>
            {extractSessionCategoryInfo(
              talk.categories,
              CategoryItemEnum.Track,
            )}
          </StyledSessionText>
        )}
        <StyledTagsWrapper>
          {extractSessionTags(talk.questionAnswers || [])?.map((tag, index) => {
            return <Tag key={tag + index} text={tag} textColor={Color.WHITE} />;
          })}
        </StyledTagsWrapper>
        <section>
          {openFeedback?.enabled && (
            <StyledVoteTalkLink
              href={`${openFeedback.url}${talk.id}`}
              target={"_blank"}
              rel="noreferrer noopener"
            >
              🗳️ <strong>Vote this talk</strong>
            </StyledVoteTalkLink>
          )}
        </section>
      </StyledJobsInfo>
    </StyledSessionCard>
  );
};
