import { FC } from "react";
import {
  StyledFaqCard,
  StyledFaqImage,
  StyledFaqImageContainer,
  StyledFaqText,
  StyledFaqTitle,
} from "../../Home/components/Faqs/components/FaqsCard";
import { StyledJobsInfo } from "../../JobOffers/components/JobsCard";

type TalkCardProps = {
  talk: {
    title: string;
    talkImage: number;
    presenter: string;
    level: string;
    link: string;
  };
  index: number;
};

export const TalkCard: FC<TalkCardProps> = ({ talk, index }) => {
  const isOdd = index % 2 === 0 ? true : false;

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
        <StyledFaqTitle>{talk.title}</StyledFaqTitle>          
      </StyledJobsInfo>
    </StyledFaqCard>
  );
};
