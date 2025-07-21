import { Link, Route, Routes } from "react-router";
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
  ROUTE_2024_ATTENDEE,
  ROUTE_2024_CFP,
  ROUTE_2024_COMMUNITIES,
  ROUTE_2024_DIVERSITY,
  ROUTE_2024_HOME,
  ROUTE_2024_JOB_OFFERS,
  ROUTE_2024_SCHEDULE,
  ROUTE_2024_SESSION_FEEDBACK,
  ROUTE_2024_SPEAKER_DETAIL_PLAIN,
  ROUTE_2024_SPEAKER_INFO,
  ROUTE_2024_SPEAKERS,
  ROUTE_2024_TALK_DETAIL_PLAIN,
  ROUTE_2024_TALKS,
  ROUTE_2024_WORKSHOPS,
  ROUTE_ABOUT_US,
  ROUTE_ACCOMMODATION,
  ROUTE_CFP,
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_CONDITIONS,
  ROUTE_COOKIES,
  ROUTE_DIVERSITY,
  ROUTE_HOME,
  ROUTE_JOB_OFFERS,
  ROUTE_KCD,
  ROUTE_MEETING_DETAIL_PLAIN,
  ROUTE_SCHEDULE,
  ROUTE_SPEAKER_DETAIL_PLAIN,
  ROUTE_SPEAKER_INFO,
  ROUTE_SPEAKERS,
  ROUTE_SPONSORSHIP,
  ROUTE_TALKS,
  ROUTE_TRAVEL,
  ROUTE_WORKSHOPS,
} from "@constants/routes";

import { Footer } from "@components/Footer/Footer";
import { HomeWrapper } from "@views/Home/HomeWrapper";
import { Navigation } from "@components/Navigation/Navigation";
import { ScrollToTop } from "@components/ScrollToTop/ScrollToTop";
import { SpeakerDetailContainer } from "@views/SpeakerDetail/SpeakerDetailContainer";
import { styled } from "styled-components";
import React, { FC, lazy } from "react";
import { CookieConsent } from "react-cookie-consent";
import { Color } from "@styles/colors";
import { Loading } from "@components/Loading/Loading";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionFeedback2023 } from "./2023/SessionFeedback/SessionFeedback2023";
import { AttendeeInformation2023 } from "./2023/Attendee/AttendeeInformation2023";
import { Communities2023 } from "./2023/Communities/Communities2023";
import { SpeakerInformation2023 } from "./2023/Speakers/SpeakerInformation2023";
import QrCodeSection from "@views/QrCode/QrCodeSection";

//<editor-fold desc="2025">
const Talks = lazy(() => import("./views/Talks/Talks"));
const Conditions = lazy(() => import("./views/Conditions/Conditions"));
const Cookies = lazy(() => import("./views/Cookies/Cookies"));
const Speakers = lazy(() => import("./views/Speakers/Speakers"));
const SpeakerInformation = lazy(() =>
  import("./views/Speakers/SpeakerInformation").then((value) => ({
    default: value.SpeakerInformation,
  })),
);
const About = lazy(() => import("./views/About/About"));
const Travel = lazy(() => import("./views/Travel/Travel"));
const NotFoundError = lazy(() =>
  import("./components/NotFoundError/NotFoundError").then((value) => ({
    default: value.NotFoundError,
  })),
);
const Kcd = lazy(() => import("./views/kcd/Kcd"));
const Sponsorship = lazy(() => import("./views/sponsorship/Sponsorship"));
const CfpSection = lazy(() => import("./views/Cfp/CfpSection"));
const CodeOfConduct = lazy(() => import("./views/CodeOfConduct/CodeOfConduct"));
const Accommodation = lazy(() =>
  import("./views/Travel/Accommodation").then((value) => ({
    default: value.Accommodation,
  })),
);
const Schedule = lazy(() => import("./views/Schedule/Schedule"));
const Diversity = lazy(() =>
  import("./views/Diversity/Diversity").then((value) => ({
    default: value.Diversity,
  })),
);
const LiveView = lazy(() =>
  import("./views/Talks/LiveView").then((value) => ({
    default: value.LiveView,
  })),
);

const TalkDetailContainer = lazy(
  () => import("./views/MeetingDetail/TalkDetailContainer"),
);

const JobOffersList = lazy(() => import("@components/JobOffers/JobOffersList"));
//</editor-fold>
//<editor-fold desc="2024">
const HomeWrapper2024 = lazy(() =>
  import("./2024/HomeWrapper2024").then((value) => ({
    default: value.HomeWrapper2024,
  })),
);
const Speakers2024 = lazy(() =>
  import("./components/YearSpecific/Speakers/Speakers2024").then((value) => ({
    default: value.Speakers2024,
  })),
);
const SpeakerDetailContainer2024 = lazy(() =>
  import("./2024/SpeakerDetail/SpeakerDetailContainer2024").then((value) => ({
    default: value.SpeakerDetailContainer2024,
  })),
);
const CfpSection2024 = lazy(() => import("./2024/Cfp/CfpSection2024"));
const Talks2024 = lazy(() => import("./2024/Talks/Talks2024"));
const Workshops = lazy(() => import("./views/Workshops/Workshops"));
const Schedule2024 = lazy(() => import("./2024/Schedule/Schedule2024"));
const JobOffers2024 = lazy(() => import("./2024/JobOffers/JobOffers2024"));
const MeetingDetailContainer2024 = lazy(() =>
  import("./2024/TalkDetail/MeetingDetailContainer2024").then((value) => ({
    default: value.MeetingDetailContainer2024,
  })),
);
//</editor-fold>
//<editor-fold desc="2023">
const Home2023Wrapper = lazy(() => import("./2023/Home/Home2023Wrapper"));
const Diversity2023 = lazy(() => import("./2023/Diversity/Diversity2023"));
const Schedule2023 = lazy(() => import("./2023/Schedule/Schedule2023"));
const Workshops2023 = lazy(() => import("./2023/Workshops/Workshops2023"));
const JobOffers2023 = lazy(() => import("./2023/JobOffers/JobOffers2023"));
const CfpSection2023 = lazy(() => import("./2023/Cfp/CfpSection2023"));
const Speakers2023 = lazy(() => import("./2023/Speakers/Speakers2023"));
const SpeakerDetailContainer2023 = lazy(
  () => import("./2023/SpeakerDetail/SpeakerDetailContainer2023"),
);
const Talks2023 = lazy(() => import("./2023/Talks/Talks2023"));
const TalkDetailContainer2023 = lazy(
  () => import("./2023/TalkDetail/TalkDetailContainer2023"),
);
//</editor-fold>

const StyledAppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const isDevBcnCookieSet = document.cookie
  .split("; ")
  .some((row) => row.startsWith("DevBcnCookie="));

const RenderCookie = () => (
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
);

const App: FC<React.PropsWithChildren<unknown>> = () => {
  const queryClient = new QueryClient();
  return (
    <StyledAppWrapper className="AppWrapperAll">
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Navigation />
        <Routes>
          {/* <editor-fold desc="2025 edition"> */}
          <Route path="/loading" element={<Loading />} />
          <Route
            path={ROUTE_TALKS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Talks />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_WORKSHOPS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Workshops />
              </React.Suspense>
            }
          />
          {/*<Route path={ROUTE_SESSION_FEEDBACK} element={<React.Suspense fallback={<Loading />}>
                <SessionFeedback />
              </React.Suspense>} />*/}
          <Route
            path={ROUTE_CODE_OF_CONDUCT}
            element={
              <React.Suspense fallback={<Loading />}>
                <CodeOfConduct />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_CONDITIONS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Conditions />
              </React.Suspense>
            }
          />
          <Route
            path={"live-view"}
            element={
              <React.Suspense fallback={<Loading />}>
                <LiveView />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_COOKIES}
            element={
              <React.Suspense fallback={<Loading />}>
                <Cookies />
              </React.Suspense>
            }
          />
          {
            <Route
              path={ROUTE_DIVERSITY}
              element={
                <React.Suspense fallback={<Loading />}>
                  <Diversity />
                </React.Suspense>
              }
            />
          }
          {
            <Route
              path={ROUTE_JOB_OFFERS}
              element={
                <React.Suspense fallback={<Loading />}>
                  <JobOffersList />
                </React.Suspense>
              }
            />
          }
          <Route
            path={ROUTE_SCHEDULE}
            element={
              <React.Suspense fallback={<Loading />}>
                <Schedule />
              </React.Suspense>
            }
          />
          */
          <Route
            path={ROUTE_SPEAKERS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Speakers />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_SPEAKER_INFO}
            element={
              <React.Suspense fallback={<Loading />}>
                <SpeakerInformation />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_ABOUT_US}
            element={
              <React.Suspense fallback={<Loading />}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_CFP}
            element={
              <React.Suspense fallback={<Loading />}>
                <CfpSection />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_TRAVEL}
            element={
              <React.Suspense fallback={<Loading />}>
                <Travel />
              </React.Suspense>
            }
          />
          {/*<Route path={ROUTE_COMMUNITIES} element={<React.Suspense fallback={<Loading />}>
                <Communities />
              </React.Suspense>} />*/}
          {/*<Route path={ROUTE_ATTENDEE} element={<React.Suspense fallback={<Loading />}>
                <AttendeeInformation />
              </React.Suspense>} />*/}
          <Route
            path={ROUTE_KCD}
            element={
              <React.Suspense fallback={<Loading />}>
                <Kcd />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_MEETING_DETAIL_PLAIN}
            element={
              <React.Suspense fallback={<Loading />}>
                <TalkDetailContainer />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_SPEAKER_DETAIL_PLAIN}
            element={
              <React.Suspense fallback={<Loading />}>
                <SpeakerDetailContainer />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_SPONSORSHIP}
            element={
              <React.Suspense fallback={<Loading />}>
                <Sponsorship />
              </React.Suspense>
            }
          />
          <Route
            path="/:year"
            element={
              <React.Suspense fallback={<Loading />}>
                <HomeWrapper />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_ACCOMMODATION}
            element={
              <React.Suspense fallback={<Loading />}>
                <Accommodation />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_HOME}
            element={
              <React.Suspense fallback={<Loading />}>
                <HomeWrapper />
              </React.Suspense>
            }
          />
          {/* </editor-fold> */}
          {/* <editor-fold desc="2024 edition> */}
          <Route
            path="/qr-code"
            element={
              <React.Suspense fallback={<Loading />}>
                <QrCodeSection />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_HOME}
            element={
              <React.Suspense fallback={<Loading />}>
                <HomeWrapper2024 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_DIVERSITY}
            element={
              <React.Suspense fallback={<Loading />}>
                <Diversity />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_SCHEDULE}
            element={
              <React.Suspense fallback={<Loading />}>
                <Schedule2024 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_WORKSHOPS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Workshops />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_JOB_OFFERS}
            element={
              <React.Suspense fallback={<Loading />}>
                <JobOffers2024 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_SESSION_FEEDBACK}
            element={
              <React.Suspense fallback={<Loading />}>
                <SessionFeedback2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_CFP}
            element={
              <React.Suspense fallback={<Loading />}>
                <CfpSection2024 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_ATTENDEE}
            element={
              <React.Suspense fallback={<Loading />}>
                <AttendeeInformation2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_COMMUNITIES}
            element={
              <React.Suspense fallback={<Loading />}>
                <Communities2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_SPEAKER_INFO}
            element={
              <React.Suspense fallback={<Loading />}>
                <SpeakerInformation2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_SPEAKERS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Speakers2024 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_SPEAKER_DETAIL_PLAIN}
            element={
              <React.Suspense fallback={<Loading />}>
                <SpeakerDetailContainer2024 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_TALKS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Talks2024 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2024_TALK_DETAIL_PLAIN}
            element={
              <React.Suspense fallback={<Loading />}>
                <MeetingDetailContainer2024 />
              </React.Suspense>
            }
          />
          {/* </editor-fold> */}
          {/* <editor-fold desc="2023 Edition> */}
          <Route
            path={ROUTE_2023_HOME}
            element={
              <React.Suspense fallback={<Loading />}>
                <Home2023Wrapper />
              </React.Suspense>
            }
          />
          {
            <Route
              path={ROUTE_2023_DIVERSITY}
              element={
                <React.Suspense fallback={<Loading />}>
                  <Diversity2023 />
                </React.Suspense>
              }
            />
          }
          <Route
            path={ROUTE_2023_SCHEDULE}
            element={
              <React.Suspense fallback={<Loading />}>
                <Schedule2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_WORKSHOPS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Workshops2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_JOB_OFFERS}
            element={
              <React.Suspense fallback={<Loading />}>
                <JobOffers2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_SESSION_FEEDBACK}
            element={
              <React.Suspense fallback={<Loading />}>
                <SessionFeedback2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_CFP}
            element={
              <React.Suspense fallback={<Loading />}>
                <CfpSection2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_ATTENDEE}
            element={
              <React.Suspense fallback={<Loading />}>
                <AttendeeInformation2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_COMMUNITIES}
            element={
              <React.Suspense fallback={<Loading />}>
                <Communities2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_SPEAKER_INFO}
            element={
              <React.Suspense fallback={<Loading />}>
                <SpeakerInformation2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_SPEAKERS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Speakers2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_SPEAKER_DETAIL_PLAIN}
            element={
              <React.Suspense fallback={<Loading />}>
                <SpeakerDetailContainer2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_TALKS}
            element={
              <React.Suspense fallback={<Loading />}>
                <Talks2023 />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_2023_TALK_DETAIL_PLAIN}
            element={
              <React.Suspense fallback={<Loading />}>
                <TalkDetailContainer2023 />
              </React.Suspense>
            }
          />
          {/* </editor-fold> */}
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Loading />}>
                <NotFoundError />
              </React.Suspense>
            }
          />
        </Routes>
        {!isDevBcnCookieSet && <RenderCookie />}
        <Footer />
      </QueryClientProvider>
    </StyledAppWrapper>
  );
};

export default App;
