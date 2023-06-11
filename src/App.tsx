import { Link, Route, Switch } from "react-router-dom";
import {
  ROUTE_ABOUT_US,
  ROUTE_ATTENDEE,
  ROUTE_CFP,
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_COMMUNITIES,
  ROUTE_CONDITIONS,
  ROUTE_COOKIES,
  ROUTE_DIVERSITY,
  ROUTE_HOME,
  ROUTE_HOME_ALTERNATE,
  ROUTE_JOB_OFFERS,
  ROUTE_MEETING_DETAIL_PLAIN,
  ROUTE_SCHEDULE,
  ROUTE_SPEAKER_DETAIL_PLAIN,
  ROUTE_SPEAKERS,
  ROUTE_TALKS,
  ROUTE_TRAVEL,
  ROUTE_WORKSHOPS,
} from "./constants/routes";

import Footer from "./components/Footer/Footer";
import { HomeWrapper } from "./views/Home/HomeWrapper";
import MeetingDetailContainer from "./views/MeetingDetail/MeetingDetailContainer";
import Navigation from "./components/Navigation/Navigation";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SpeakerDetailContainer from "./views/SpeakerDetail/SpeakerDetailContainer";
import styled from "styled-components";
import React, { FC } from "react";
import NotFoundError from "./components/NotFoundError/NotFoundError";
import { CookieConsent } from "react-cookie-consent";
import { Color } from "./styles/colors";
import Loading from "./components/Loading/Loading";
import { QueryClient, QueryClientProvider } from "react-query";

const StyledAppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const isDevBcnCookieSet = document.cookie
  .split("; ")
  .some((row) => row.startsWith("DevBcnCookie="));

const App: FC = () => {
  const queryClient = new QueryClient();
  return (
    <StyledAppWrapper className="AppWrapperAll">
      <QueryClientProvider client={queryClient}>
        <Route path="/loading" component={Loading} />
        <ScrollToTop />
        <Navigation />
        <Switch>
          <Route
            path={ROUTE_TALKS}
            component={React.lazy(() => import("./views/Talks/Talks"))}
          />
          <Route
            path={ROUTE_CODE_OF_CONDUCT}
            component={React.lazy(
              () => import("./views/CodeOfConduct/CodeOfConduct")
            )}
          />
          <Route
            path={ROUTE_CONDITIONS}
            component={React.lazy(
              () => import("./views/Conditions/Conditions")
            )}
          />
          <Route
            path={ROUTE_COOKIES}
            component={React.lazy(() => import("./views/Cookies/Cookies"))}
          />
          <Route
            path={ROUTE_DIVERSITY}
            component={React.lazy(() => import("./views/Diversity/Diversity"))}
          />
          <Route
            path={ROUTE_JOB_OFFERS}
            component={React.lazy(() => import("./views/JobOffers/JobOffers"))}
          />
          <Route
            path={ROUTE_SCHEDULE}
            component={React.lazy(() => import("./views/Schedule/Schedule"))}
          />
          <Route
            path={ROUTE_SPEAKERS}
            component={React.lazy(() => import("./views/Speakers/Speakers"))}
          />
          <Route
            path={ROUTE_ABOUT_US}
            component={React.lazy(() => import("./views/About/About"))}
          />
          <Route
            path={ROUTE_CFP}
            component={React.lazy(() => import("./views/Cfp/CfpSection"))}
          />
          <Route
            path={ROUTE_TRAVEL}
            component={React.lazy(() => import("./views/Travel/Travel"))}
          />
          <Route
            path={ROUTE_WORKSHOPS}
            component={React.lazy(() => import("./views/Workshops/Workshops"))}
          />
          <Route
            path={ROUTE_COMMUNITIES}
            component={React.lazy(
              () => import("./views/Communities/Communities")
            )}
          />
          <Route
            path={ROUTE_ATTENDEE}
            component={React.lazy(
              () => import("./views/Attendee/AttendeeInformation")
            )}
          />
          <Route
            path={ROUTE_MEETING_DETAIL_PLAIN}
            component={MeetingDetailContainer}
          />
          <Route
            path={ROUTE_SPEAKER_DETAIL_PLAIN}
            component={SpeakerDetailContainer}
          />
          <Route path={ROUTE_HOME} component={HomeWrapper} exact />
          <Route path={ROUTE_HOME_ALTERNATE} component={HomeWrapper} exact />
          <Route path="*" component={NotFoundError} />
        </Switch>
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
            <Link
              to={ROUTE_COOKIES}
              style={{ color: "white", fontWeight: "bold" }}
            >
              Read here
            </Link>
          </CookieConsent>
        )}
        <Footer />
      </QueryClientProvider>
    </StyledAppWrapper>
  );
};

export default App;
