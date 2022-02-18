import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReadMoreIcon from '../../../assets/images/ReadMoreIcon.svg';
import { Link } from 'react-router-dom';
import FaqsImage3 from '../../../assets/images/FaqsImage3.png';

type FaqCardType = {
  faq: {
    imageUrl: string;
    question: string;
    answer: string;
  };
};

const StyledFaqCard = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const StyledFaqImage = styled(motion.img)`
  height: 10rem;
`;

const StyledFaqInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FaqCard: FC<FaqCardType> = ({ faq }) => {
  return (
    <StyledFaqCard>
      <StyledFaqImage src={FaqsImage3} />
      <StyledFaqInfo>
        <h2>{faq.question}</h2>
        <p>{faq.answer}</p>
        <Link to='/'>
          <img src={ReadMoreIcon} />
        </Link>
      </StyledFaqInfo>
    </StyledFaqCard>
  );
};

export default FaqCard;
