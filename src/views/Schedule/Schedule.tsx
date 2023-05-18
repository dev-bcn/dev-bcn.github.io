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
} from "./Schedule.style";

const Schedule: FC = () => {
  const { width } = useWindowSize();

  React.useEffect(() => {
    document.title = `Schedule - DevBcn - ${data.edition}`;
    const script = document.createElement("script");
    script.src = "https://sessionize.com/api/v2/a2sw0wks/view/GridSmart";
    script.type = "text/javascript";
    const schedule = document.getElementById("#schedule");
    if (schedule !== null) {
      schedule.appendChild(script);
    }

    return () => {
      // @ts-ignore
      document.getElementById("#schedule").removeChild(script);
    };
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
        {data.schedule.enabled && <div id="#schedule">Schedule</div>}
      </StyledScheduleSection>
    </SectionWrapper>
  );
};

export default Schedule;
