import { Suspense } from "react";

import { StyledLoadingImage } from "@components/Loading/Loading";

import {
  StyledFaqCard,
  StyledFaqImage,
  StyledFaqImageContainer,
  StyledFaqInfo,
  StyledFaqText,
  StyledFaqTitle,
} from "../Faqs.style";

import type { FaqCardType } from "../Faqs.style";
import type { FC } from "react";

const FaqCard: FC<React.PropsWithChildren<FaqCardType>> = ({ faq, index }) => {
  const isOdd = index % 2 === 0;

  return (
    <StyledFaqCard className="faq-card">
      <StyledFaqImageContainer padding={isOdd ? "0 1rem 0 0" : "0 0 0 1rem"}>
        <Suspense fallback={<StyledLoadingImage src="/images/logo.svg" />}>
          <StyledFaqImage src={`images/2023/FaqsImage${index}.png`} />
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
