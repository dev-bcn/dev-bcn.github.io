import { Link, Route, Routes } from "react-router-dom";
import {
    ROUTE_HOME_2023,
    ROUTE_ABOUT_US,
    ROUTE_ACCOMMODATION,
    ROUTE_CODE_OF_CONDUCT,
    ROUTE_CONDITIONS,
    ROUTE_COOKIES,
    ROUTE_DIVERSITY,
    ROUTE_HOME,
    ROUTE_JOB_OFFERS,
    ROUTE_KCD,
    ROUTE_MEETING_DETAIL_PLAIN,
    ROUTE_SPEAKER_DETAIL_PLAIN,
    ROUTE_SPEAKER_INFO,
    ROUTE_SPONSORSHIP,
    ROUTE_TRAVEL,
    ROUTE_TALKS_PARAMETERIZED,
    ROUTE_SPEAKERS_PARAMETERIZED,
    ROUTE_HOME_2024,
    ROUTE_CFP_PARAMETERIZED,
    ROUTE_SCHEDULE_PARAMETERIZED,
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
import Conditions from "./views/Conditions/Conditions";
import Cookies from "./views/Cookies/Cookies";
import Speakers from "./views/Speakers/Speakers";
import SpeakerInformation from "./views/Speakers/SpeakerInformation";
import About from "./views/About/About";
import Travel from "./views/Travel/Travel";
import NotFoundError from "./components/NotFoundError/NotFoundError";
import { Home2023Wrapper } from "./2023/Home/Home2023Wrapper";
import Kcd from "./views/kcd/Kcd";
import Sponsorship from "./views/sponsorship/Sponsorship";
import CfpSection from "./views/Cfp/CfpSection";
import { CodeOfConduct } from "./views/CodeOfConduct/CodeOfConduct";
import { Accommodation } from "./views/Travel/Accommodation";
import Schedule from "./views/Schedule/Schedule";
import Diversity from "./views/Diversity/Diversity";
import LiveView from "./views/Talks/LiveView";
import JobOffers from "./views/JobOffers/JobOffers";
import { Home2024Wrapper } from "./2024/Home/components/Home/Home2024Wrapper";

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
          <Route
            path={ROUTE_TALKS_PARAMETERIZED}
            element={
              <React.Suspense fallback={<Loading />}>
                <Talks />
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
                  <JobOffers />
                </React.Suspense>
              }
            />
          }
          <Route
            path={ROUTE_SCHEDULE_PARAMETERIZED}
            element={
              <React.Suspense fallback={<Loading />}>
                <Schedule />
              </React.Suspense>
            }
          />
          */
          <Route
            path={ROUTE_SPEAKERS_PARAMETERIZED}
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
            path={ROUTE_CFP_PARAMETERIZED}
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
                <MeetingDetailContainer />
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
            path={ROUTE_HOME_2024}
            element={
              <React.Suspense fallback={<Loading />}>
                <Home2024Wrapper />
              </React.Suspense>
            }
          />
          <Route
            path={ROUTE_HOME_2023}
            element={
              <React.Suspense fallback={<Loading />}>
                {/* HOME PAGE SHOULD BE PARAMETERIZED */}
                <Home2023Wrapper />
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
          <Route
            path="*"
            element={
              <React.Suspense fallback={<Loading />}>
                <NotFoundError />
              </React.Suspense>
            }
          />
        </Routes>
        <RenderCookie />
        <Footer />
      </QueryClientProvider>
    </StyledAppWrapper>
  );
};

export default App;
