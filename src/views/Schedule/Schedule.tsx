import {MOBILE_BREAKPOINT} from "../../constants/BreakPoints";
import {Color} from "../../styles/colors";
import React, {FC} from "react";
import LessThanBlueWhiteIcon
    from "../../assets/images/MoreThanBlueWhiteIcon.svg";
import MoreThanBlueWhiteIcon
    from "../../assets/images/LessThanBlueWhiteIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import TitleSection from "../../components/SectionTitle/TitleSection";
import {useWindowSize} from "react-use";
import {
    StyledLessIcon,
    StyledMoreIcon,
    StyledScheduleSection,
} from "./Schedule.style";
import * as Sentry from "@sentry/react";
import {Link} from "react-router-dom";
import {useEventEdition} from "../Home/UseEventEdition";

const Schedule: FC<React.PropsWithChildren<unknown>> = () => {
    const {width} = useWindowSize();
    const {edition} = useEventEdition();

    React.useEffect(() => {
        if (edition) {
            document.title = `Schedule — ${edition.title} — ${edition.edition}`;

            fetch(edition?.scheduleApi)
                .then((value) => value.text())
                .then((value) => {
                    const sched = document.getElementById("#schedule");
                    if (sched !== null) {
                        sched.innerHTML = value;
                    }
                })
                .catch((err) => Sentry.captureException(err));
        }
    }, [edition]);

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
                        <StyledLessIcon src={LessThanBlueWhiteIcon}/>
                        <StyledMoreIcon src={MoreThanBlueWhiteIcon}/>
                    </>
                )}
                {edition && edition.schedule.enabled ? (
                    <>
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
                        <div style={{width: "100%", margin: "0 auto"}}
                             id="#schedule">
                            &nbsp;
                        </div>
                    </>
                ) : (
                    <p style={{color: Color.DARK_BLUE}}>
                        Schedule is not available yet. Keep in touch on social
                        media as we
                        announce the speakers and their talks/workshops
                    </p>
                )}
            </StyledScheduleSection>
        </SectionWrapper>
    );
};

export default Schedule;
