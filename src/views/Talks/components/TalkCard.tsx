import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../../styles/colors";
import { StyledFaqTitle } from "../../Home/components/Faqs/components/FaqsCard";
import { StyledJobsInfo } from "../../JobOffers/components/JobsCard";
import { Tag } from "../../../components/Tag/Tag";
import { ROUTE_TALK_DETAIL } from "../../../constants/routes";
import {
  QuestionAnswers,
  SessionCategory,
  SessionSpeaker,
} from "../Talk.types";
import { extractSessionLevel, extractSessionTags } from "../UseFetchTalks";

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

const StyledSessionText = styled.div`
  color: ${Color.WHITE};
  padding: 0.5rem 0;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
    text-align: left;
  }
`;

export const StyledSessionCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 20%;
  max-width: 90%;
  margin-bottom: 3rem;
  @media (min-width: 800px) {
    align-items: flex-start;
    flex-direction: row;
    max-width: 900px;
    margin-bottom: 4rem;
  }
`;

export const StyledTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`;

export const StyledMoreInfoLink = styled(Link)`
  background-color: ${Color.DARK_BLUE};
  font-weight: bold;
  text-decoration: none;
  color: white;
  padding: 3px 5px;
  border-radius: 3px;
`;

export const TalkCard: FC<TalkCardProps> = ({ talk }) => {
  return (
    <StyledSessionCard>
      <StyledJobsInfo align={"flex-start"}>
        <StyledFaqTitle>{talk.title}</StyledFaqTitle>
        <StyledSessionText>
          {talk.speakers.map((speaker: SessionSpeaker) => (
            <p key={speaker.id}>{speaker.name}</p>
          ))}
        </StyledSessionText>
        <StyledSessionText>
          Level: {extractSessionLevel(talk.categories)}
        </StyledSessionText>
        <StyledTagsWrapper>
          {extractSessionTags(talk.questionAnswers)?.map((tag, index) => {
            return <Tag key={index} text={tag} />;
          })}
        </StyledTagsWrapper>
        <StyledMoreInfoLink to={ROUTE_TALK_DETAIL + "/" + talk.id}>
          More info +
        </StyledMoreInfoLink>
      </StyledJobsInfo>
    </StyledSessionCard>
  );
};
