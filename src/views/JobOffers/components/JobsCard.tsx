import { FC } from "react";
import { Link } from "react-router-dom";
import {
  StyledFaqCard,
  StyledFaqImage,
  StyledFaqImageContainer,
  StyledFaqText,
  StyledFaqTitle,
} from "../../Home/components/Faqs/components/FaqsCard";
import styled from "styled-components";
import { Color } from "../../../styles/colors";
import { motion } from "framer-motion";
import LocationIcon from "../../../assets/images/LocationIcon.svg";

type IJobsCardProps = {
  item: {
    title: string;
    location: string;
    text: string;
  };
  index: number;
};

export const StyledJobsInfo = styled(motion.div)<{ align: string }>`
  display: flex;
  flex-direction: column;
  color: ${Color.BLACK_BLUE};
  align-items: center;
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({ align }) => {
      return align;
    }};
  }
`;

const StyledLocationContainer = styled.div`
  display: flex;
  padding-top: 0.25rem;
`;

const StyledLocationImage = styled.img`
  height: 0.75rem;
`;

const StyledLocationText = styled.p`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;

const StyledJobsButton = styled.div`
  background: ${Color.DARK_BLUE};
  padding: 0.25rem 0.75rem;
`;

const StyledJobsText = styled.p`
  color: ${Color.WHITE};
`;

const JobsCard: FC<IJobsCardProps> = ({ item, index }) => {
  const isOdd = index % 2 === 0;

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
        <StyledFaqTitle>{item.title}</StyledFaqTitle>
        <StyledLocationContainer>
          <StyledLocationImage src={LocationIcon} />
          <StyledLocationText>{item.location}</StyledLocationText>
        </StyledLocationContainer>
        <StyledFaqText>{item.text}</StyledFaqText>
        <Link to="/" className="link--text">
          <StyledJobsButton>
            <StyledJobsText>Apply</StyledJobsText>
          </StyledJobsButton>
        </Link>
      </StyledJobsInfo>
    </StyledFaqCard>
  );
};

export default JobsCard;
