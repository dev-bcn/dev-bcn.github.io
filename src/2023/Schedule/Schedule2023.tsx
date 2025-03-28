import { MOBILE_BREAKPOINT } from "../../constants/BreakPoints";
import { Color } from "../../styles/colors";
import React, { FC } from "react";
import LessThanBlueWhiteIcon from "../../assets/images/MoreThanBlueWhiteIcon.svg";
import MoreThanBlueWhiteIcon from "../../assets/images/LessThanBlueWhiteIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import TitleSection from "../../components/SectionTitle/TitleSection";
import { useWindowSize } from "react-use";
import data from "../../data/2023.json";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledScheduleSection,
} from "../../styles/Schedule/Schedule.style";
import * as Sentry from "@sentry/react";
import { useDocumentTitleUpdater } from "../../hooks/useDocumentTitleUpdate";

const Schedule2023: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();

  useDocumentTitleUpdater("Schedule", data.edition);

  React.useEffect(() => {
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
            <StyledLessIcon src={LessThanBlueWhiteIcon} />
            <StyledMoreIcon src={MoreThanBlueWhiteIcon} />
          </>
        )}
        {!data.schedule.enabled && (
          <p style={{ color: Color.DARK_BLUE }}>
            Schedule is not available yet. Keep in touch on social media as we
            announce the speakers and their talks/workshops
          </p>
        )}
        {data.schedule.enabled && (
          <div style={{ width: "100%", margin: "0 auto" }} id="#schedule">
            &nbsp;
          </div>
        )}
      </StyledScheduleSection>
    </SectionWrapper>
  );
};

export default Schedule2023;
