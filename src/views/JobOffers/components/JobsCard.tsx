import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledFaqCard,
  StyledFaqImage,
  StyledFaqImageContainer,
  StyledFaqText,
  StyledFaqTitle,
} from '../../Home/components/Faqs/components/FaqsCard';
import styled from 'styled-components';
import { COLOR_BLACK_BLUE, COLOR_PINK, COLOR_WHITE } from '../../../styles/colors';
import { motion } from 'framer-motion';
import LocationIcon from '../../../assets/images/LocationIcon.svg';

type IJobsCardProps = {
  item: {
    title: string;
    location:string;
    text: string;
  };
  index: number;
};

export const StyledJobsInfo = styled(motion.div)<{align:string}>`
  display: flex;
  flex-direction: column;
  color: ${COLOR_BLACK_BLUE};
  align-items: center;
  @media (min-width: 800px) {
    width: 60%;
    align-items: ${({align}) => {
      return align;
    }};
  }
`;

const StyledLocationContainer= styled.div`
  display: flex;
  padding-top: .25rem;
`;

const StyledLocationImage = styled.img`
  height: .75rem;
`;

const StyledLocationText = styled.p`
  font-size: .75rem;
  padding-left: .25rem;
`;

const StyledJobsButton = styled.div`
  background: ${COLOR_PINK};
  padding: 0.25rem 0.75rem;
`;

const StyledJobsText = styled.p`
  color: ${COLOR_WHITE};
`;

const JobsCard: FC<IJobsCardProps> = ({ item, index }) => {
  const isOdd = index % 2 === 0 ? true : false;

  return (
    <StyledFaqCard direction={isOdd ? 'row' : 'row-reverse'}>
      <StyledFaqImageContainer padding={isOdd ? '0 .75rem 0 0' : '0 0 0 .75rem'}>
        <StyledFaqImage
          src={require(`../../../assets/images/FaqsImage1.png`)}
        />
      </StyledFaqImageContainer>
      <StyledJobsInfo align={isOdd ? "flex-start" : "flex-end"}>
        <StyledFaqTitle textAlign={isOdd ? "left" : "right"}>{item.title}</StyledFaqTitle>
        <StyledLocationContainer>
          <StyledLocationImage src={LocationIcon}/>
          <StyledLocationText>{item.location}</StyledLocationText>
        </StyledLocationContainer>
        <StyledFaqText textAlign={isOdd ? "left" : "right"}>{item.text}</StyledFaqText>
        <Link to='/' className="link--text">
          <StyledJobsButton>
            <StyledJobsText>Apply</StyledJobsText>
          </StyledJobsButton>
        </Link>
      </StyledJobsInfo>
    </StyledFaqCard>
  );
};

export default JobsCard;
