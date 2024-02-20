import { Link, Route, Routes } from "react-router-dom";
import {
  ROUTE_2023_ATTENDEE,
  ROUTE_2023_CFP,
  ROUTE_2023_COMMUNITIES,
  ROUTE_2023_DIVERSITY,
  ROUTE_2023_HOME,
  ROUTE_2023_JOB_OFFERS,
  ROUTE_2023_SCHEDULE,
  ROUTE_2023_SESSION_FEEDBACK,
  ROUTE_2023_SPEAKER_DETAIL_PLAIN,
  ROUTE_2023_SPEAKER_INFO,
  ROUTE_2023_SPEAKERS,
  ROUTE_2023_TALK_DETAIL_PLAIN,
  ROUTE_2023_TALKS,
  ROUTE_2023_WORKSHOPS,
  ROUTE_ABOUT_US,
  ROUTE_CFP,
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_CONDITIONS,
  ROUTE_COOKIES,
  ROUTE_HOME,
  ROUTE_KCD,
  ROUTE_MEETING_DETAIL_PLAIN,
  ROUTE_SPEAKER_DETAIL_PLAIN,
  ROUTE_SPEAKER_INFO,
  ROUTE_SPEAKERS,
  ROUTE_SPONSORSHIP,
  ROUTE_TALKS,
  ROUTE_TRAVEL,
} from "./constants/routes";

import Footer from "./components/Footer/Footer";
import { HomeWrapper } from "./views/Home/HomeWrapper";
import MeetingDetailContainer from "./views/MeetingDetail/MeetingDetailContainer";
import Navigation from "./components/Navigation/Navigation";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SpeakerDetailContainer from "./views/SpeakerDetail/SpeakerDetailContainer";
import styled from "styled-components";
import React, { FC } from "react";
import { CookieConsent } from "react-cookie-consent";
import { Color } from "./styles/colors";
import Loading from "./components/Loading/Loading";
import { QueryClient, QueryClientProvider } from "react-query";
import Talks from "./views/Talks/Talks";
import CodeOfConduct from "./views/CodeOfConduct/CodeOfConduct";
import Conditions from "./views/Conditions/Conditions";
import Cookies from "./views/Cookies/Cookies";
import Speakers from "./views/Speakers/Speakers";
import SpeakerInformation from "./views/Speakers/SpeakerInformation";
import About from "./views/About/About";
import Travel from "./views/Travel/Travel";
import NotFoundError from "./components/NotFoundError/NotFoundError";
import { Home2023Wrapper } from "./2023/Home/Home2023Wrapper";
import Speakers2023 from "./2023/Speakers/Speakers2023";
import SpeakerDetailContainer2023 from "./2023/SpeakerDetail/SpeakerDetailContainer2023";
import Talks2023 from "./2023/Talks/Talks2023";
import TalkDetailContainer2023 from "./2023/TalkDetail/TalkDetailContainer2023";
import AttendeeInformation2023 from "./2023/Attendee/AttendeeInformation2023";
import SpeakerInformation2023 from "./2023/Speakers/SpeakerInformation2023";
import Communities2023 from "./2023/Communities/Communities2023";
import CfpSection2023 from "./2023/Cfp/CfpSection2023";
import SessionFeedback2023 from "./2023/SessionFeedback/SessionFeedback2023";
import Kcd from "./views/kcd/Kcd";
import Schedule2023 from "./2023/Schedule/Schedule2023";
import Workshops2023 from "./2023/Workshops/Workshops2023";
import JobOffers2023 from "./2023/JobOffers/JobOffers2023";
import Sponsorship from "./views/sponsorship/Sponsorship";
import Diversity2023 from "./2023/Diversity/Diversity2023";
import CfpSection from "./views/Cfp/CfpSection";

const StyledAppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const isDevBcnCookieSet = document.cookie
  .split("; ")
  .some((row) => row.startsWith("DevBcnCookie="));

const RenderCookie = () => (
  <>
    {!isDevBcnCookieSet && (
      <CookieConsent
        debug={true}
        enableDeclineButton={true}
        cookieName="DevBcnCookie"
        style={{ backgroundColor: Color.DARK_BLUE }}
        buttonStyle={{
          backgroundColor: Color.LIGHT_BLUE,
          color: Color.WHITE,
          fontWeight: "bold",
        }}
        declineButtonStyle={{
          fontWeight: "bold",
          backgroundColor: Color.MAGENTA,
        }}
      >
        This website uses cookies to enhance the user experience.{" "}
        <Link to={ROUTE_COOKIES} style={{ color: "white", fontWeight: "bold" }}>
          Read here
        </Link>
      </CookieConsent>
    )}
  </>
);

const App: FC<React.PropsWithChildren<unknown>> = () => {
  const queryClient = new QueryClient();
  return (
    <StyledAppWrapper className="AppWrapperAll">
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/loading" element={<Loading />} />
          <Route path={ROUTE_TALKS} element={<Talks />} />
          {/*<Route path={ROUTE_SESSION_FEEDBACK} element={<SessionFeedback />} />*/}
          <Route path={ROUTE_CODE_OF_CONDUCT} element={<CodeOfConduct />} />
          <Route path={ROUTE_CONDITIONS} element={<Conditions />} />
          <Route path={ROUTE_COOKIES} element={<Cookies />} />
          {/*<Route path={ROUTE_DIVERSITY} element={<Diversity />} />*/}
          {/*<Route path={ROUTE_JOB_OFFERS} element={<JobOffers />} />*/}
          {/*<Route path={ROUTE_SCHEDULE} element={<Schedule />} />*/}
          <Route path={ROUTE_SPEAKERS} element={<Speakers />} />
          <Route path={ROUTE_SPEAKER_INFO} element={<SpeakerInformation />} />
          <Route path={ROUTE_ABOUT_US} element={<About />} />
          <Route path={ROUTE_CFP} element={<CfpSection />} />
          <Route path={ROUTE_TRAVEL} element={<Travel />} />
          {/*<Route path={ROUTE_COMMUNITIES} element={<Communities />} />*/}
          {/*<Route path={ROUTE_ATTENDEE} element={<AttendeeInformation />} />*/}
          <Route path={ROUTE_KCD} element={<Kcd />} />
          <Route
            path={ROUTE_MEETING_DETAIL_PLAIN}
            element={<MeetingDetailContainer />}
          />
          <Route
            path={ROUTE_SPEAKER_DETAIL_PLAIN}
            element={<SpeakerDetailContainer />}
          />
          <Route path={ROUTE_SPONSORSHIP} element={<Sponsorship />} />
          <Route path="/:year" element={<HomeWrapper />} />
          <Route path={ROUTE_HOME} element={<HomeWrapper />} />
          {/* 2023 Edition */}
          <Route path={ROUTE_2023_HOME} element={<Home2023Wrapper />} />
          {<Route path={ROUTE_2023_DIVERSITY} element={<Diversity2023 />} />}
          <Route path={ROUTE_2023_SCHEDULE} element={<Schedule2023 />} />
          <Route path={ROUTE_2023_WORKSHOPS} element={<Workshops2023 />} />
          <Route path={ROUTE_2023_JOB_OFFERS} element={<JobOffers2023 />} />
          <Route
            path={ROUTE_2023_SESSION_FEEDBACK}
            element={<SessionFeedback2023 />}
          />
          <Route path={ROUTE_2023_CFP} element={<CfpSection2023 />} />
          <Route
            path={ROUTE_2023_ATTENDEE}
            element={<AttendeeInformation2023 />}
          />
          <Route path={ROUTE_2023_COMMUNITIES} element={<Communities2023 />} />
          <Route
            path={ROUTE_2023_SPEAKER_INFO}
            element={<SpeakerInformation2023 />}
          />
          <Route path={ROUTE_2023_SPEAKERS} element={<Speakers2023 />} />
          <Route
            path={ROUTE_2023_SPEAKER_DETAIL_PLAIN}
            element={<SpeakerDetailContainer2023 />}
          />
          <Route path={ROUTE_2023_TALKS} element={<Talks2023 />} />
          <Route
            path={ROUTE_2023_TALK_DETAIL_PLAIN}
            element={<TalkDetailContainer2023 />}
          />
          <Route path="*" element={<NotFoundError />} />
        </Routes>
        <RenderCookie />
        <Footer />
      </QueryClientProvider>
    </StyledAppWrapper>
  );
};

export default App;
