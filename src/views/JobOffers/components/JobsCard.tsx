import { FC } from "react";
import styled from "styled-components";
import { Color } from "../../../styles/colors";
import { motion } from "framer-motion";
import LocationIcon from "../../../assets/images/LocationIcon.svg";
import { Offer } from "../JobsData";
import {
  StyledFaqCard,
  StyledFaqText,
  StyledFaqTitle,
} from "../../Home/components/Faqs/Faqs.style";

type IJobsCardProps = {
  offer: Offer;
  index: number;
};

export const StyledJobsInfo = styled(motion.div)`
  color: ${Color.BLACK_BLUE};
`;

const StyledLocationContainer = styled.div`
  padding-top: 0.25rem;
`;

const StyledLocationImage = styled.img`
  height: 0.75rem;
`;

const StyledLocationText = styled.span`
  font-size: 0.75rem;
  padding-left: 0.25rem;
`;

const JobsCard: FC<IJobsCardProps> = ({ offer }) => {
  return (
    <StyledFaqCard>
      <StyledJobsInfo>
        <StyledFaqTitle>{offer.title}</StyledFaqTitle>
        <StyledLocationContainer>
          <StyledLocationImage src={LocationIcon} />
          <StyledLocationText>{offer.location}</StyledLocationText>
        </StyledLocationContainer>
        <StyledFaqText dangerouslySetInnerHTML={{ __html: offer.text }} />
      </StyledJobsInfo>
    </StyledFaqCard>
  );
};

export default JobsCard;
