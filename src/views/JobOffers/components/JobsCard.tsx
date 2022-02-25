import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledFaqCard,
  StyledFaqDetailButton,
  StyledFaqImage,
  StyledFaqImageContainer,
  StyledFaqInfo,
  StyledFaqText,
  StyledFaqTitle,
  StyledImageAnimation,
} from '../../Home/components/Faqs/components/FaqsCard';
import styled from 'styled-components';
import { COLOR_PINK, COLOR_WHITE } from '../../../styles/colors';

type IJobsCardProps = {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
};

const StyledJobsButton = styled.div`
  background: ${COLOR_PINK};
  padding: 0.25rem 0.5rem;
`;

const StyledJobsText = styled.p`
  color: ${COLOR_WHITE};
`;

const JobsCard: FC<IJobsCardProps> = ({ faq, index }) => {
  const isOdd = index % 2 === 0 ? true : false;

  return (
    <StyledFaqCard color={isOdd ? 'row' : 'row-reverse'}>
      <StyledFaqImageContainer>
        <StyledFaqImage
          src={require(`../../../../../assets/images/FaqsImage${index}.png`)}
        />
        <StyledImageAnimation />
      </StyledFaqImageContainer>
      <StyledFaqInfo>
        <StyledFaqTitle>{faq.question}</StyledFaqTitle>
        <StyledFaqText>{faq.answer}</StyledFaqText>
        <Link to='/'>
          <StyledJobsButton>
            <StyledJobsText>Apply</StyledJobsText>
          </StyledJobsButton>
        </Link>
      </StyledFaqInfo>
    </StyledFaqCard>
  );
};

export default JobsCard;
