import {createBrowserRouter} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import {
  ROUTE_ABOUT_US,
  ROUTE_ACCOMMODATION,
  ROUTE_CFP_PARAMETERIZED,
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_CONDITIONS,
  ROUTE_COOKIES,
  ROUTE_DIVERSITY,
  ROUTE_HOME,
  ROUTE_JOB_OFFERS,
  ROUTE_KCD,
  ROUTE_MEETING_DETAIL_PLAIN,
  ROUTE_SCHEDULE_PARAMETERIZED,
  ROUTE_SPEAKER_DETAIL_PLAIN,
  ROUTE_SPEAKER_INFO,
  ROUTE_SPEAKERS_PARAMETERIZED,
  ROUTE_SPONSORSHIP,
  ROUTE_TALKS_PARAMETERIZED,
  ROUTE_TRAVEL,
} from "./constants/routes";
import Talks from "./views/Talks/Talks";
import {CodeOfConduct} from "./views/CodeOfConduct/CodeOfConduct";
import Conditions from "./views/Conditions/Conditions";
import LiveView from "./views/Talks/LiveView";
import Cookies from "./views/Cookies/Cookies";
import Diversity from "./views/Diversity/Diversity";
import JobOffers from "./views/JobOffers/JobOffers";
import Schedule from "./views/Schedule/Schedule";
import Speakers from "./views/Speakers/Speakers";
import SpeakerInformation from "./views/Speakers/SpeakerInformation";
import About from "./views/About/About";
import CfpSection from "./views/Cfp/CfpSection";
import Travel from "./views/Travel/Travel";
import Kcd from "./views/kcd/Kcd";
import MeetingDetailContainer
  from "./views/MeetingDetail/MeetingDetailContainer";
import SpeakerDetailContainer
  from "./views/SpeakerDetail/SpeakerDetailContainer";
import Sponsorship from "./views/sponsorship/Sponsorship";
import {HomeWrapper} from "./views/Home/HomeWrapper";
import {Accommodation} from "./views/Travel/Accommodation";
import NotFoundError from "./components/NotFoundError/NotFoundError";

export const routes = createBrowserRouter([
  {
    path: "/loading",
    Component: Loading,
  },
  {
    path: ROUTE_TALKS_PARAMETERIZED,
    Component: Talks,
    loader: () => import("./components/Loading/Loading"),
  },
  {
    path: ROUTE_CODE_OF_CONDUCT,
    Component: CodeOfConduct,
    loader: () => import("./components/Loading/Loading"),
  },
  {
    path: ROUTE_CONDITIONS,
    Component: Conditions,
    loader: () => import("./components/Loading/Loading"),
  },
  {
    path: "live-view",
    Component: LiveView,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: ROUTE_COOKIES,
    Component: Cookies,
    loader: () => import("./components/Loading/Loading"),
  },
  {
    path: ROUTE_DIVERSITY,
    Component: Diversity,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: ROUTE_JOB_OFFERS,
    Component: JobOffers,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: ROUTE_SCHEDULE_PARAMETERIZED,
    Component: Schedule,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: ROUTE_SPEAKERS_PARAMETERIZED,
    Component: Speakers,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: ROUTE_SPEAKER_INFO,
    Component: SpeakerInformation,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: ROUTE_ABOUT_US,
    Component: About,
    loader: () => import("./components/Loading/Loading"),
  },
  {
    path: ROUTE_CFP_PARAMETERIZED,
    Component: CfpSection,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: ROUTE_TRAVEL,
    Component: Travel,
    loader: () => import("./components/Loading/Loading"),
  },
  {
    path: ROUTE_KCD,
    Component: Kcd,
    loader: () => import("./components/Loading/Loading"),
  },
  {
    path: ROUTE_MEETING_DETAIL_PLAIN,
    Component: MeetingDetailContainer,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: ROUTE_SPEAKER_DETAIL_PLAIN,
    Component: SpeakerDetailContainer,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: ROUTE_SPONSORSHIP,
    Component: Sponsorship,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: "/:year",
    Component: HomeWrapper,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: ROUTE_ACCOMMODATION,
    Component: Accommodation,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: ROUTE_HOME,
    Component: HomeWrapper,
    loader: () => import("./components/Loading/Loading"),
  }, //TODO parameterize
  {
    path: "*",
    Component: NotFoundError,
    loader: () => import("./components/Loading/Loading"),
  },
]);
