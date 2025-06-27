import { MOBILE_BREAKPOINT } from "@constants/BreakPoints";
import { Color } from "@styles/colors";
import { jobOffers } from "./JobsData";

import React, { FC } from "react";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import TitleSection from "@components/SectionTitle/TitleSection";
import { useWindowSize } from "react-use";
import data from "@data/2023.json";
import {
  Companies,
  CompanyNameLink,
  StyledLessIcon,
  StyledMoreIcon,
  StyledTitleContainer,
} from "@styles/JobOffers/JobOffers.Style";
import CompanyOffers from "@components/JobOffers/CompanyOffers";
import { useDocumentTitleUpdater } from "@hooks/useDocumentTitleUpdate";

const NoOffersAvailable = () => (
  <h4 style={{ color: Color.DARK_BLUE }}>No job offers available yet</h4>
);

const MoreThanLessThan = () => (
  <>
    <StyledLessIcon src="/images/LessThanBlueIcon.svg" />
    <StyledMoreIcon src="/images/MoreThanBlueIcon.svg" />
  </>
);

const JobOffers2023: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();

  useDocumentTitleUpdater("Job Offers", data.edition);

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
        {width > MOBILE_BREAKPOINT && <MoreThanLessThan />}
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

export default JobOffers2023;
