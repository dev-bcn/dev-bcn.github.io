import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReadMoreIcon from "../../../assets/images/ReadMoreIcon.svg";
import { Link } from "react-router-dom";
import { COLOR_WHITE } from "../../../styles/colors";

type FaqCardType = {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
};

const StyledFaqCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin-bottom: 2rem;
  @media (min-width: 800px) {
    flex-direction: ${(props) => (props.color ? props.color : "row")};
    max-width: 900px;
    margin-bottom: 1rem;
  }
`;

const StyledFaqImage = styled(motion.img)`
  height: 10rem;
  @media (min-width: 800px) {
    height: auto;
    width: 40%;
  }
`;

const StyledFaqInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: ${COLOR_WHITE};
  @media (min-width: 800px) {
    width: 40%;
    align-items: flex-start;
  }
`;

const StyledFaqTitle = styled.h2`
  padding-top: 1rem;
  @media (min-width: 800px) {
    text-align: start;
    padding: 0 1rem;
  }
`;

const StyledFaqText = styled.p`
  padding: 0.5rem;
  @media (min-width: 800px) {
    text-align: start;
  }
`;

const StyledFaqDetailButton = styled.img`
  width: 6rem;
  @media (min-width: 800px) {
    padding: 0 .5rem;
    width: 7rem;
  }
`;

const FaqCard: FC<FaqCardType> = ({ faq, index }) => {
  const isOdd = index % 2 === 0 ? true : false;

  return (
    <StyledFaqCard color={isOdd ? "row" : "row-reverse"}>
      <StyledFaqImage src={require(`../../../assets/images/FaqsImage${index}.png`)} />
      <StyledFaqInfo>
        <StyledFaqTitle>{faq.question}</StyledFaqTitle>
        <StyledFaqText>{faq.answer}</StyledFaqText>
        <Link to="/">
          <StyledFaqDetailButton src={ReadMoreIcon} />
        </Link>
      </StyledFaqInfo>
    </StyledFaqCard>
  );
};

export default FaqCard;
