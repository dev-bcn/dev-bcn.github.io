import { MOBILE_BREAKPOINT } from "@constants/BreakPoints";
import { Color } from "@styles/colors";
import React, { FC } from "react";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import TitleSection from "@components/SectionTitle/TitleSection";
import { useWindowSize } from "react-use";
import data from "@data/2025.json";

import * as Sentry from "@sentry/react";
import { Link } from "react-router";
import {
  StyledLessIcon,
  StyledMoreIcon,
  StyledScheduleSection,
} from "@styles/Schedule/Schedule.style";
import { useDocumentTitleUpdater } from "@hooks/useDocumentTitleUpdate";

const Schedule: FC<React.PropsWithChildren<unknown>> = () => {
  const { width } = useWindowSize();

  React.useEffect(() => {
    fetch("https://sessionize.com/api/v2/kdiixcgx/view/GridSmart")
      .then((value) => value.text())
      .then((value) => {
        const sched = document.getElementById("schedule");
        if (sched !== null) {
          sched.innerHTML = value;
        }
      })
      .catch((err) => Sentry.captureException(err));
  }, []);

  useDocumentTitleUpdater("Schedule", data.edition);

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
            <StyledLessIcon src="/images/MoreThanBlueWhiteIcon.svg" />
            <StyledMoreIcon src="/images/LessThanBlueWhiteIcon.svg" />
          </>
        )}
        {data.schedule.enabled ? (
          <div className={"flex items-center"}>
            <Link
              to="/live-view"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                margin: "0.5rem",
              }}
            >
              📅 See Live schedule
            </Link>
            <Link to={"https://t.me/ConfAiBot"}>
              <img src={"images/confAiBot.png"} alt={"ConfAiBot"} />
            </Link>
            <div style={{ width: "100%", margin: "0 auto" }} id="schedule">
              &nbsp;
            </div>
          </div>
        ) : (
          <p style={{ color: Color.DARK_BLUE }}>
            Schedule is not available yet. Keep in touch on social media as we
            announce the speakers and their talks/workshops
          </p>
        )}
      </StyledScheduleSection>
    </SectionWrapper>
  );
};

export default Schedule;
