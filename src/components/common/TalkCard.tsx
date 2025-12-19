import React from "react";
import { Link } from "react-router";

import { CategoryItemEnum } from "@/types/sessions";
import {
  ROUTE_2023_SPEAKER_DETAIL,
  ROUTE_2023_TALK_DETAIL,
  ROUTE_2024_SPEAKER_DETAIL,
  ROUTE_2024_TALK_DETAIL,
  ROUTE_SPEAKER_DETAIL,
  ROUTE_TALK_DETAIL,
} from "@constants/routes";
import {
  extractSessionCategoryInfo,
  extractSessionTags,
} from "@services/sessionsAdapter";
import { Color } from "@styles/colors";
import { StyledVoteTalkLink } from "@views/MeetingDetail/MeetingDetail";
import {
  StyledSessionCard,
  StyledSessionText,
  StyledTagsWrapper,
  StyledTalkSpeaker,
  StyledTalkTitle,
} from "@views/Talks/Talks.style";

import { StyledJobsInfo } from "../JobOffers/JobsCard";
import { Tag } from "../Tag/Tag";

import type {
  QuestionAnswers,
  SessionCategory,
  SessionSpeaker,
} from "@/types/sessions";
import type { FC } from "react";

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
  openFeedbackId: string;
  year: string;
  showTrack?: boolean;
}

const getTalkDetailRoute = (year: string): string => {
  if (year === "2024") {
    return ROUTE_2024_TALK_DETAIL;
  }
  if (year === "2023") {
    return ROUTE_2023_TALK_DETAIL;
  }

  return ROUTE_TALK_DETAIL;
};

const getSpeakerDetailRoute = (year: string): string => {
  if (year === "2023") {
    return ROUTE_2023_SPEAKER_DETAIL;
  }
  if (year === "2024") {
    return ROUTE_2024_SPEAKER_DETAIL;
  }

  return ROUTE_SPEAKER_DETAIL;
};

export const TalkCard: FC<React.PropsWithChildren<TalkCardProps>> = ({
  showTrack = false,
  talk,
  year,
  openFeedbackId,
}) => {
  return (
    <StyledSessionCard
      initial={{ opacity: "0" }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: "0" }}
      transition={{ duration: 0.5 }}
    >
      <StyledJobsInfo>
        <StyledTalkTitle to={`${getTalkDetailRoute(year)}/${talk.id}`}>
          {talk.title}
        </StyledTalkTitle>
        <StyledSessionText>
          {talk.speakers.map((speaker: SessionSpeaker) => (
            <StyledTalkSpeaker key={speaker.id}>
              <Link to={`${getSpeakerDetailRoute(year)}/${speaker.id}`}>
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
        <section style={{ display: "block" }}>
          <StyledVoteTalkLink
            href={`https://openfeedback.io/${openFeedbackId}/0/${talk.id}`}
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
