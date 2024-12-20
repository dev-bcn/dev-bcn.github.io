import { FC } from "react";
import { Link } from "react-router";
import { StyledJobsInfo } from "../../JobOffers/components/JobsCard";
import { Tag } from "../../../components/Tag/Tag";
import {
  ROUTE_2023_TALK_DETAIL,
  ROUTE_SPEAKER_DETAIL,
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
} from "../Talks.style";
import { Color } from "../../../styles/colors";

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
    track: string;
    recordingUrl?: string;
    categories: SessionCategory[];
    questionAnswers: QuestionAnswers[];
  };
  key: number;
  showTrack?: boolean;
}

export const TalkCard: FC<React.PropsWithChildren<TalkCardProps>> = ({ showTrack = false, talk }) => {
  return (
    <StyledSessionCard>
      <StyledJobsInfo>
        <StyledTalkTitle to={`${ROUTE_2023_TALK_DETAIL}/${talk.id}`}>
          {talk.title} {talk.recordingUrl ? " 🎥 " : ""}
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
            CategoryItemEnum.Format
          )} `}
          {extractSessionCategoryInfo(talk.categories)}{" "}
        </StyledSessionText>
        {showTrack && (
          <StyledSessionText>
            <strong>Track: </strong>
            {extractSessionCategoryInfo(
              talk.categories,
              CategoryItemEnum.Track
            )}
          </StyledSessionText>
        )}
        <StyledTagsWrapper>
          {extractSessionTags(talk.questionAnswers)?.map((tag) => {
            return <Tag key={tag} text={tag} textColor={Color.WHITE} />;
          })}
        </StyledTagsWrapper>
      </StyledJobsInfo>
    </StyledSessionCard>
  );
};
