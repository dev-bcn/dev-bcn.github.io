import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";
import { jobOffers } from "./JobsData";

import React, { FC } from "react";
import LessThanBlueIcon from "../../assets/images/LessThanBlueIcon.svg";
import MoreThanBlueIcon from "../../assets/images/MoreThanBlueIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import TitleSection from "../../components/SectionTitle/TitleSection";
import { useWindowSize } from "react-use";
import data from "../../data/2023.json";
import { StyledLessIcon, StyledMoreIcon, StyledTitleContainer, StyledWrapperSection } from "./JobOffers.Style";
import CompanyOffers from "./CompanyOffers";

const JobOffers: FC = () => {
  const { width } = useWindowSize();

  React.useEffect(() => {
    document.title = `Job Offers - DevBcn - ${data.edition}`;
  }, []);

  return (
    <SectionWrapper color={Color.WHITE} marginTop={6} paddingBottom={100}>
      <StyledWrapperSection>
        <StyledTitleContainer>
          <TitleSection
            title="JOB OFFERS"
            subtitle="Have a look at some opportunities"
            color={Color.BLACK_BLUE}
          />
        </StyledTitleContainer>
        {width > MOBILE_BREAKPOINT && (
          <>
            <StyledLessIcon src={LessThanBlueIcon} />
            <StyledMoreIcon src={MoreThanBlueIcon} />
          </>
        )}
        {!data.jobOffers.enabled && (
          <h4 style={{ color: Color.DARK_BLUE }}>
            No job offers available yet
          </h4>
        )}
        {data.jobOffers.enabled && (
          <>
            {jobOffers.map((company) => (
              <CompanyOffers company={company} key={company.id} />
            ))}
          </>
        )}
      </StyledWrapperSection>
    </SectionWrapper>
  );
};

export default JobOffers;
