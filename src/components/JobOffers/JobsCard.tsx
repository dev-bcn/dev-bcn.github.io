import { motion } from "motion/react";
import { styled } from "styled-components";

import { Color } from "@styles/colors";
// @ts-expect-error some quirky import
import {
  StyledFaqCard,
  StyledFaqText,
  StyledFaqTitle,
} from "@views/Home/components/Faqs/Faqs.style";

import type { Offer } from "@/types/jobOffers";
import type { FC } from "react";

export type IJobsCardProps = {
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

const JobsCard: FC<React.PropsWithChildren<IJobsCardProps>> = ({ offer }) => {
  return (
    <StyledFaqCard>
      <StyledJobsInfo>
        <StyledFaqTitle>{offer.title}</StyledFaqTitle>
        <StyledLocationContainer>
          <StyledLocationImage src="/images/LocationIcon.svg" />
          <StyledLocationText>{offer.location}</StyledLocationText>
        </StyledLocationContainer>
        <StyledFaqText dangerouslySetInnerHTML={{ __html: offer.text }} />
      </StyledJobsInfo>
    </StyledFaqCard>
  );
};

export default JobsCard;
