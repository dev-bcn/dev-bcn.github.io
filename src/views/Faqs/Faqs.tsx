import { FC } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { COLOR_PINK } from '../../styles/colors';
import { MOBILE_BREAKPOINT } from '../../constants/BreakPoints';
import { faqsData } from './FaqsData';
import FaqCard from './components/FaqsCard';

const StyledFaqSection = styled(motion.section)`
  background: ${COLOR_PINK};
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
`;

const Faqs: FC = () => {
  return (
    <StyledFaqSection>
      {faqsData.map((faq) => (
        <FaqCard faq={faq} />
      ))}
    </StyledFaqSection>
  );
};

export default Faqs;
