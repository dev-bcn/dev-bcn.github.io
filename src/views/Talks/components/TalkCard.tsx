import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledJobsInfo } from "../../JobOffers/components/JobsCard";
import { Tag } from "../../../components/Tag/Tag";
import {
  ROUTE_SPEAKER_DETAIL,
  ROUTE_TALK_DETAIL,
} from "../../../constants/routes";
import {
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
} from "../Talks.style";

interface TalkCardProps {
  index: number;
  talk: {
    id: number;
    title: string;
    talkImage?: number;
    speakers: SessionSpeaker[];
    level?: string;
    link?: string;
    tags?: string[];
    categories: SessionCategory[];
    questionAnswers: QuestionAnswers[];
  };
  key: number;
}

export const TalkCard: FC<TalkCardProps> = ({ talk }) => {
  return (
    <StyledSessionCard>
      <StyledJobsInfo align={"flex-start"}>
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
          Level: {extractSessionCategoryInfo(talk.categories)}
        </StyledSessionText>
        <StyledTagsWrapper>
          {extractSessionTags(talk.questionAnswers)?.map((tag) => {
            return <Tag key={tag} text={tag} />;
          })}
        </StyledTagsWrapper>
      </StyledJobsInfo>
    </StyledSessionCard>
  );
};
