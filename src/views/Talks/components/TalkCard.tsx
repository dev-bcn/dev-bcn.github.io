import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR_WHITE } from "../../../styles/colors";
import {
  StyledFaqCard,
  StyledFaqDetailButton,
  StyledFaqImage,
  StyledFaqImageContainer,
  StyledFaqTitle,
} from "../../Home/components/Faqs/components/FaqsCard";
import { StyledJobsInfo } from "../../JobOffers/components/JobsCard";
import ReadMoreIcon from '../../../assets/images/ReadMoreIcon.svg';

type TalkCardProps = {
  talk: {
    title: string;
    talkImage: number;
    presenter: string;
    level: string;
    link: string;
    tags: string[];
  };
  index: number;
};

export const TalkCard: FC<TalkCardProps> = ({ talk, index }) => {
  const isOdd = index % 2 === 0 ? true : false;

  const StyledTalkText = styled.div<{ textAlign: string }>`
    color: ${COLOR_WHITE};
    padding: 0.5rem 0rem;
    @media (min-width: 800px) {
      hyphens: auto;
      word-wrap: break-word;
      text-align: ${({ textAlign }) => {
        return textAlign;
      }};
    }
  `;

  return (
    <StyledFaqCard direction={isOdd ? "row" : "row-reverse"}>
      <StyledFaqImageContainer
        padding={isOdd ? "0 .75rem 0 0" : "0 0 0 .75rem"}
      >
        <StyledFaqImage
          src={require(`../../../assets/images/FaqsImage1.png`)}
        />
      </StyledFaqImageContainer>
      <StyledJobsInfo align={isOdd ? "flex-start" : "flex-end"}>
        <StyledFaqTitle textAlign={isOdd ? "left" : "right"}>
          {talk.title}
        </StyledFaqTitle>
        <StyledTalkText textAlign={isOdd ? "left" : "right"}>
          {talk.presenter}
        </StyledTalkText>
        <StyledTalkText textAlign={isOdd ? "left" : "right"}>
          Level: {talk.level}
        </StyledTalkText>
        {/* aqui van los tags */}
        <Link to="/">
          <StyledFaqDetailButton src={ReadMoreIcon} />
        </Link>
      </StyledJobsInfo>
    </StyledFaqCard>
  );
};
