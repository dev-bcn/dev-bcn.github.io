import React, { FC } from "react";
import { Link } from "react-router-dom";
import { StyledJobsInfo } from "../../JobOffers/components/JobsCard";
import { Tag } from "../../../components/Tag/Tag";
import {
  ROUTE_SPEAKER_DETAIL,
  ROUTE_TALK_DETAIL,
} from "../../../constants/routes";
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
import { Color } from "../../../styles/colors";

export interface TalkCardProps {
  index: number;
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
  key: number;
  showTrack?: boolean;
}

export const TalkCard: FC<React.PropsWithChildren<TalkCardProps>> = ({
  showTrack = false,
  talk,
}) => {
  return (
    <StyledSessionCard>
      <StyledJobsInfo>
        <StyledTalkTitle to={`${ROUTE_TALK_DETAIL}/${talk.id}`}>
          {talk.title}
        </StyledTalkTitle>
        <StyledSessionText>
          {talk.speakers.map((speaker: SessionSpeaker) => (
            <StyledTalkSpeaker key={speaker.id}>
              <Link to={`${ROUTE_SPEAKER_DETAIL}/${speaker.id}`}>
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
          {extractSessionCategoryInfo(talk.categories)}{" "}
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
          {extractSessionTags(talk.questionAnswers)?.map((tag) => {
            return <Tag key={tag} text={tag} textColor={Color.WHITE} />;
          })}
        </StyledTagsWrapper>
        <section>
          <StyledVoteTalkLink
            href={`https://openfeedback.io/devbcn24/0/${talk.id}`}
            target={"_blank"}
            rel="noreferrer noopener"
          >
            🗳️ <strong>Vote this talk</strong>
          </StyledVoteTalkLink>
        </section>
      </StyledJobsInfo>
    </StyledSessionCard>
  );
};
