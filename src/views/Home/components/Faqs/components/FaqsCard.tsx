import React, { FC, Suspense } from "react";
import { StyledLoadingImage } from "@components/Loading/Loading";
import { motion } from "motion/react";
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
    <StyledFaqCard
      className="faq-card"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <StyledFaqImageContainer padding={isOdd ? "0 1rem 0 0" : "0 0 0 1rem"}>
        <Suspense fallback={<StyledLoadingImage src="/images/logo.svg" />}>
          <StyledFaqImage
            alt={`DevBcn — image ${index}`}
            src={`/images/FaqsImage${index}.jpg`}
            initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          />
        </Suspense>
      </StyledFaqImageContainer>
      <StyledFaqInfo
        align={isOdd ? "flex-start" : "flex-end"}
        initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <StyledFaqTitle
          as={motion.h2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {faq.question}
        </StyledFaqTitle>
        <StyledFaqText
          as={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {faq.answer}
        </StyledFaqText>
      </StyledFaqInfo>
    </StyledFaqCard>
  );
};

export default FaqCard;
