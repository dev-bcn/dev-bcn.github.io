import React, {FC, Suspense} from "react";
import {StyledLoadingImage} from "src/components/Loading/Loading";
import {
    FaqCardType,
    StyledFaqCard,
    StyledFaqImage,
    StyledFaqImageContainer,
    StyledFaqInfo,
    StyledFaqText,
    StyledFaqTitle,
} from "../Faqs.style";

const FaqCard: FC<React.PropsWithChildren<FaqCardType>> = ({ faq, index }) => {
  const isOdd = index % 2 === 0;

  return (
    <StyledFaqCard className="faq-card">
      <StyledFaqImageContainer padding={isOdd ? "0 1rem 0 0" : "0 0 0 1rem"}>
          <Suspense fallback={<StyledLoadingImage/>}>
          <StyledFaqImage
            alt={`DevBcn — image ${index}`}
            src={`images/FaqsImage${index}.jpg`}
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
