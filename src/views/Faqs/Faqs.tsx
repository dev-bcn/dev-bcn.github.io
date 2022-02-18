import { FC } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { COLOR_PINK } from '../../styles/colors';
import { MOBILE_BREAKPOINT } from '../../constants/BreakPoints';

const StyledFaqSection = styled(motion.section)`
  background: ${COLOR_PINK};
  padding-top: 3rem;
  height: 10rem;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
  }
`;

const Faqs: FC = () => {
  return <StyledFaqSection></StyledFaqSection>;
};

export default Faqs;
