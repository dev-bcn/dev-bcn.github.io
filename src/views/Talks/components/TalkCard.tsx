import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledFaqTitle } from "../../Home/components/Faqs/components/FaqsCard";
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
  StyledMoreInfoLink,
  StyledSessionCard,
  StyledSessionText,
  StyledTagsWrapper,
  StyledTalkSpeaker,
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
        <StyledFaqTitle>{talk.title}</StyledFaqTitle>
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
          {extractSessionTags(talk.questionAnswers)?.map((tag, index) => {
            return <Tag key={index} text={tag} />;
          })}
        </StyledTagsWrapper>
        <StyledMoreInfoLink to={`${ROUTE_TALK_DETAIL}/${talk.id}`}>
          More info +
        </StyledMoreInfoLink>
      </StyledJobsInfo>
    </StyledSessionCard>
  );
};
