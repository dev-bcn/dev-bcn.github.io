import { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledFaqsCard = styled(motion.div)`
  display: flex;
  align-items: center;
`;
const FaqsCard: FC = () => {
  return <StyledFaqsCard></StyledFaqsCard>;
};

export default FaqsCard;
