import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";
import { jobsAdevintaData, jobsMangoData, jobsWordlineData } from "./JobsData";

import React, { FC } from "react";
import JobsCard from "./components/JobsCard";
import { LeftHashWithText } from "../../components/LeftHashWithText/LeftHashWithText";
import LessThanBlueIcon from "../../assets/images/LessThanBlueIcon.svg";
import MoreThanBlueIcon from "../../assets/images/MoreThanBlueIcon.svg";
import { RightHashWithText } from "../../components/RightHashWithText/RightHashWithText";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import TitleSection from "../../components/SectionTitle/TitleSection";
import { useWindowSize } from "react-use";
import data from "../../data/2023.json";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledTitleContainer,
  StyledWrapperSection,
} from "./JobOffers.Style";

const JobOffers: FC = () => {
  const { width } = useWindowSize();

  React.useEffect(() => {
    document.title = `Job Offers - DevBcn - ${data.edition}`;
  }, []);

  return (
    <SectionWrapper color={Color.WHITE} marginTop={6}>
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
            <RightHashWithText color={Color.DARK_BLUE} text="ADEVINTA" />
            {jobsAdevintaData.map((item, index) => (
              <JobsCard item={item} index={index} key={index} />
            ))}
            <LeftHashWithText color={Color.DARK_BLUE} text="MANGO" />
            {jobsMangoData.map((item, index) => (
              <JobsCard item={item} index={index} key={index} />
            ))}
            <RightHashWithText color={Color.DARK_BLUE} text="WORDLINE" />
            {jobsWordlineData.map((item, index) => (
              <JobsCard item={item} index={index} key={index} />
            ))}
          </>
        )}
      </StyledWrapperSection>
    </SectionWrapper>
  );
};

export default JobOffers;
