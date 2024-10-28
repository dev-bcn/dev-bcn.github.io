import {MOBILE_BREAKPOINT} from "src/constants/BreakPoints";
import {Color} from "src/styles/colors";
import React, {FC} from "react";
import SectionWrapper from "src/components/SectionWrapper/SectionWrapper";
import TitleSection from "src/components/SectionTitle/TitleSection";
import {useWindowSize} from "react-use";
import {edition} from "src/data/2023";
import {
    StyledLessIcon,
    StyledMoreIcon,
    StyledScheduleSection,
} from "./Schedule.style";
import * as Sentry from "@sentry/react";

const Schedule2023: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();

  React.useEffect(() => {
      document.title = `Schedule - DevBcn - ${edition.edition}`;

    fetch("https://sessionize.com/api/v2/a2sw0wks/view/GridSmart")
      .then((value) => value.text())
      .then((value) => {
        const sched = document.getElementById("#schedule");
        if (sched !== null) {
          sched.innerHTML = value;
        }
      })
      .catch((err) => Sentry.captureException(err));
  }, []);

  return (
    <SectionWrapper color={Color.WHITE} marginTop={6}>
      <StyledScheduleSection>
        <TitleSection
          title="SCHEDULE"
          subtitle="Speakers coming from all corners of the world join us to
            share their experience in various technologies and to
            invite everyone to participate in Open Source
            Technologies and in the JCP."
          color={Color.BLUE}
        />
        {width > MOBILE_BREAKPOINT && (
          <>
              <StyledLessIcon src="images/MoreThanBlueWhiteIcon.svg"/>
              <StyledMoreIcon src="images/LessThanBlueWhiteIcon.svg"/>
          </>
        )}
          {!edition.schedule.enabled && (
          <p style={{ color: Color.DARK_BLUE }}>
            Schedule is not available yet. Keep in touch on social media as we
            announce the speakers and their talks/workshops
          </p>
        )}
          {edition.schedule.enabled && (
          <div style={{ width: "100%", margin: "0 auto" }} id="#schedule">
            &nbsp;
          </div>
        )}
      </StyledScheduleSection>
    </SectionWrapper>
  );
};

export default Schedule2023;
