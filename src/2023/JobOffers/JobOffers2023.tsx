import {MOBILE_BREAKPOINT} from "src/constants/BreakPoints";
import {Color} from "src/styles/colors";
import {jobOffers} from "./JobsData";

import React, {FC} from "react";
import SectionWrapper from "src/components/SectionWrapper/SectionWrapper";
import TitleSection from "src/components/SectionTitle/TitleSection";
import {useWindowSize} from "react-use";
import {edition} from "src/data/2023";
import {
  Companies,
  CompanyNameLink,
  StyledLessIcon,
  StyledMoreIcon,
  StyledTitleContainer,
} from "./JobOffers.Style";
import CompanyOffers from "./CompanyOffers";

const NoOffersAvailable = () => (
  <>
    {!edition.jobOffers.enabled && (
      <h4 style={{ color: Color.DARK_BLUE }}>No job offers available yet</h4>
    )}
  </>
);

const MoreThanLessThan = (props: { width: number }) => (
  <>
    {props.width > MOBILE_BREAKPOINT && (
      <>
        <StyledLessIcon src="images/LessThanBlueIcon.svg"/>
        <StyledMoreIcon src="images/MoreThanBlueIcon.svg"/>
      </>
    )}
  </>
);

const JobOffers2023: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();

  React.useEffect(() => {
    document.title = `Job Offers - DevBcn - ${edition.edition}`;
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
        <MoreThanLessThan width={width} />
        <NoOffersAvailable />
        {edition.jobOffers.enabled && (
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
