import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../../styles/colors";
import {
  StyledFaqCard,
  StyledFaqTitle,
} from "../../Home/components/Faqs/components/FaqsCard";
import { StyledJobsInfo } from "../../JobOffers/components/JobsCard";
import { Tag } from "../../../components/Tag/Tag";
import { ROUTE_TALK_DETAIL } from "../../../constants/routes";
import {
  QuestionAnswers,
  SessionCategory,
  SessionSpeaker,
} from "../Talk.types";

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
}

const StyledTalkText = styled.div`
  color: ${Color.WHITE};
  padding: 0.5rem 0;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
    text-align: left;
  }
`;

export const StyledTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  const extractSessionTags = (
    questionAnswers: QuestionAnswers[]
  ): string[] | undefined => {
    let tags = questionAnswers
      .filter((question) => question.question === "Tags/Topics")
      .map((question) => question.answer)
      .at(0);
    return tags?.split(",");
  };
  const extractSessionLevel = (
    categories: SessionCategory[]
  ): string | undefined =>
    categories
      .filter((category) => category.name === "Level")
      .map((categories) => categories.categoryItems)
      .flat(1)
      .map((item) => item.name)
      .at(0);

  return (
    <StyledFaqCard direction={"row"}>
      <StyledJobsInfo align={"flex-start"}>
        <StyledFaqTitle>{talk.title}</StyledFaqTitle>
        <StyledTalkText>
          {talk.speakers.map((speaker: SessionSpeaker) => (
            <p>{speaker.name}</p>
          ))}
        </StyledTalkText>
        <StyledTalkText>
          Level: {extractSessionLevel(talk.categories)}
        </StyledTalkText>
        <StyledTagsWrapper>
          {extractSessionTags(talk.questionAnswers)?.map((tag, index) => {
            return <Tag key={index} text={tag} />;
          })}
        </StyledTagsWrapper>
        <StyledMoreInfoLink to={ROUTE_TALK_DETAIL + "/" + talk.id}>
          More info +
        </StyledMoreInfoLink>
      </StyledJobsInfo>
    </StyledFaqCard>
  );
};
