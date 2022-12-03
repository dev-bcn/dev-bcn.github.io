import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  ROUTE_ABOUT_US,
  ROUTE_CODE_OF_CONDUCT,
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
} from "./constants/routes";

import { About } from "./views/About/About";
import { CodeOfConduct } from "./views/CodeOfConduct/CodeOfConduct";
import Footer from "./components/Footer/Footer";
import { HomeWrapper } from "./views/Home/HomeWrapper";
import JobOffers from "./views/JobOffers/JobOffers";
import MeetingDetailContainer from "./views/MeetingDetail/MeetingDetailContainer";
import Navigation from "./components/Navigation/Navigation";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import Schedule from "./views/Schedule/Schedule";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SpeakerDetailContainer from "./views/SpeakerDetail/SpeakerDetailContainer";
import Speakers from "./views/Speakers/Speakers";
import { Talks } from "./views/Talks/Talks";
import styled from "styled-components";
import ReactGa from "react-ga";
import { Diversity } from "./views/Diversity/Diversity";
import { Travel } from "./views/Travel/Travel";

const StyledAppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

const App = () => {
  const tracking_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_API_KEY || "";
  ReactGa.initialize(tracking_ID);

  return (
    <StyledAppWrapper className="AppWrapperAll">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Switch>
          <Route path={ROUTE_TALKS} component={Talks} />
          <Route path={ROUTE_CODE_OF_CONDUCT} component={CodeOfConduct} />
          <PageWrapper>
            <Route path={ROUTE_DIVERSITY} component={Diversity} />
            <Route path={ROUTE_JOB_OFFERS} component={JobOffers} />
            <Route path={ROUTE_SCHEDULE} component={Schedule} />
            <Route path={ROUTE_SPEAKERS} component={Speakers} />
            <Route path={ROUTE_ABOUT_US} component={About} />
            <Route path={ROUTE_TRAVEL} component={Travel} />
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
          </PageWrapper>
        </Switch>
        <Footer />
      </BrowserRouter>
    </StyledAppWrapper>
  );
};

export default App;
