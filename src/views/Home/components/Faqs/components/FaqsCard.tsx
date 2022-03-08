import { FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReadMoreIcon from "../../../../../assets/images/ReadMoreIcon.svg";
import { Link } from "react-router-dom";
import { COLOR_WHITE } from "../../../../../styles/colors";

type FaqCardType = {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
};

export const StyledFaqCard = styled.div<{ direction: string }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin-bottom: 3rem;
  @media (min-width: 800px) {
    align-items: flex-start;
    flex-direction: ${({ direction }) => {
      return direction;
    }};
    max-width: 900px;
    margin-bottom: 4rem;
  }
`;

export const StyledFaqImageContainer = styled.div<{ padding: string }>`
  height: 10rem;
  position: relative;
  @media (min-width: 800px) {
    height: auto;
    width: 40%;
    padding: ${({ padding }) => {
      return padding;
    }};
  }
`;
export const StyledFaqImage = styled(motion.img)`
  display: block;
  height: 100%;
  width: 100%;
`;

export const StyledImageAnimation = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.25s linear;
  background-color: rgba(255, 209, 102, 0.5);
  &:hover {
    opacity: 1;
  }
`;

export const StyledFaqInfo = styled(motion.div)<{ align: string }>`
  display: flex;
  flex-direction: column;
  color: ${COLOR_WHITE};
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({ align }) => {
      return align;
    }};
  }
`;

export const StyledFaqTitle = styled.h2<{ textAlign: string }>`
  padding-top: 1rem;
  @media (min-width: 800px) {
    text-align: ${({ textAlign }) => {
      return textAlign;
    }};
    padding-top: unset;
  }
`;

export const StyledFaqText = styled.p<{ textAlign: string }>`
  padding: 0.5rem 0rem;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
    text-align: ${({ textAlign }) => {
      return textAlign;
    }};
  }
`;

export const StyledFaqDetailButton = styled.img`
  width: 6rem;
  @media (min-width: 800px) {
    width: 7rem;
  }
`;

const FaqCard: FC<FaqCardType> = ({ faq, index }) => {
  const isOdd = index % 2 === 0 ? true : false;

  return (
    <StyledFaqCard direction={isOdd ? "row" : "row-reverse"}>
      <StyledFaqImageContainer
        padding={isOdd ? "0 .75rem 0 0" : "0 0 0 .75rem"}
      >
        <StyledFaqImage
          src={require(`../../../../../assets/images/FaqsImage${index}.png`)}
        />
        <StyledImageAnimation />
      </StyledFaqImageContainer>
      <StyledFaqInfo align={isOdd ? "flex-start" : "flex-end"}>
        <StyledFaqTitle textAlign={isOdd ? "left" : "right"}>
          {faq.question}
        </StyledFaqTitle>
        <StyledFaqText textAlign={isOdd ? "left" : "right"}>{faq.answer}</StyledFaqText>
        <Link to="/">
          <StyledFaqDetailButton src={ReadMoreIcon} />
        </Link>
      </StyledFaqInfo>
    </StyledFaqCard>
  );
};

export default FaqCard;
