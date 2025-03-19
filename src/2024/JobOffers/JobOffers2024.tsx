import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";
import { jobOffers } from "./JobsData";

import React, { FC } from "react";
import LessThanBlueIcon from "../../assets/images/LessThanBlueIcon.svg";
import MoreThanBlueIcon from "../../assets/images/MoreThanBlueIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import TitleSection from "../../components/SectionTitle/TitleSection";
import { useWindowSize } from "react-use";
import data from "../../data/2024.json";
import {
  Companies,
  CompanyNameLink,
  StyledLessIcon,
  StyledMoreIcon,
  StyledTitleContainer,
} from "../../styles/JobOffers/JobOffers.Style";
import CompanyOffers from "../../components/JobOffers/CompanyOffers";

const NoOffersAvailable = () => (
  <h4 style={{ color: Color.DARK_BLUE }}>No job offers available yet</h4>
);

const MoreThanLessThan = () => (
  <>
    <StyledLessIcon src={LessThanBlueIcon} />
    <StyledMoreIcon src={MoreThanBlueIcon} />
  </>
);

const JobOffers2024: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();

  React.useEffect(() => {
    document.title = `Job Offers - ${data.title} - ${data.edition}`;
  }, []);

  return (
    <SectionWrapper color={Color.WHITE} marginTop={6} paddingBottom={100}>
      <section>
        <StyledTitleContainer>
          <TitleSection
            title="JOB OFFERS"
            subtitle="Have a look at some opportunities"
            color={Color.BLACK_BLUE}
          />
        </StyledTitleContainer>
        {width > MOBILE_BREAKPOINT && <MoreThanLessThan/>}
        {!data.jobOffers.enabled && <NoOffersAvailable />}
        {data.jobOffers.enabled && (
          <div id="job-offers">
            <Companies id="companies">
              {jobOffers.map((company) => (
                <CompanyNameLink
                  href={` #${company.name.replaceAll(" ", "-").toLowerCase()}`}
                  key={company.id}
                >
                  {company.name}
                </CompanyNameLink>
              ))}
            </Companies>
            <div id="offers">
              {jobOffers.map((company) => (
                <CompanyOffers company={company} key={company.id} />
              ))}
            </div>
          </div>
        )}
      </section>
    </SectionWrapper>
  );
};

export default JobOffers2024;
