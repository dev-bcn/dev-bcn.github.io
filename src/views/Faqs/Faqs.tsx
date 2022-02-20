import { FC } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { COLOR_PINK } from "../../styles/colors";
import { faqsData } from "./FaqsData";
import FaqCard from "./components/FaqsCard";

const StyledFaqSection = styled(motion.section)`
  background: ${COLOR_PINK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  @media (min-width: 650px) {
    padding: 3rem 5rem;
  }
`;

const StyledWaveContainer = styled.div`
  background: ${COLOR_PINK};
  overflow-y: hidden;
  height: 5rem;
`;

const Faqs: FC = () => {
  return (
    <>
      <StyledFaqSection>
        {faqsData.map((faq, index) => (
          <FaqCard faq={faq} index={index} key={index} />
        ))}
      </StyledFaqSection>
      <StyledWaveContainer>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C335.50,45.89 358.63,106.09 501.41,81.42 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#06d6a0" }}
          ></path>
        </svg>
      </StyledWaveContainer>
    </>
  );
};


export default Faqs;
