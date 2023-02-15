import { FC, Suspense } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Color } from "../../../../../styles/colors";
import Logo from "../../../../../assets/images/logo.svg";
import { StyledLoadingImage } from "../../../../../components/Loading/Loading";

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
    flex-direction: ${({ direction }) => direction};
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
  border: 1px solid ${Color.YELLOW};
  display: block;
  height: 242px;
  margin: 3px;
  padding: 5px;
  width: 360px;
`;

export const StyledFaqInfo = styled(motion.div)<{ align: string }>`
  display: flex;
  flex-direction: column;
  color: ${Color.WHITE};
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({ align }) => {
      return align;
    }};
  }
`;

export const StyledFaqTitle = styled.h2`
  padding-top: 1rem;
  @media (min-width: 800px) {
    text-align: left;
    padding-top: unset;
  }
`;

export const StyledFaqText = styled.p`
  padding: 0.5rem 0;
  @media (min-width: 800px) {
    hyphens: auto;
    word-wrap: break-word;
    text-align: left;
  }
`;

const FaqCard: FC<FaqCardType> = ({ faq, index }) => {
  const isOdd = index % 2 === 0;

  return (
    <StyledFaqCard direction={isOdd ? "row" : "row-reverse"}>
      <StyledFaqImageContainer
        padding={isOdd ? "0 .75rem 0 0" : "0 0 0 .75rem"}
      >
        <Suspense fallback={<StyledLoadingImage src={Logo} />}>
          <StyledFaqImage
            src={require(`../../../../../assets/images/FaqsImage${index}.png`)}
          />
        </Suspense>
      </StyledFaqImageContainer>
      <StyledFaqInfo align={isOdd ? "flex-start" : "flex-end"}>
        <StyledFaqTitle>{faq.question}</StyledFaqTitle>
        <StyledFaqText>{faq.answer}</StyledFaqText>
      </StyledFaqInfo>
    </StyledFaqCard>
  );
};

export default FaqCard;
