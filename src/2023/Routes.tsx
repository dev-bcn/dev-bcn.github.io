import { Route } from "react-router-dom";
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
} from "@constants/routes";
import React, { lazy } from "react";
import { Loading } from "@components/Loading/Loading";

const Home2023Wrapper = lazy(() => import("./Home/Home2023Wrapper"));
const Speakers2023 = lazy(
  () => import("./Speakers/SpeakersWrapper"),
);
const SpeakerDetailContainer2023 = lazy(
  () => import("./SpeakerDetail/SpeakerDetailContainer2023"),
);
const Talks2023 = lazy(() => import("./Talks/Talks2023"));
const TalkDetailContainer2023 = lazy(
  () => import("./TalkDetail/TalkDetailContainer2023"),
);
const AttendeeInformation2023 = lazy(
  () => import("./Attendee/AttendeeInformation2023"),
);
const SpeakerInformation2023 = lazy(
  () => import("./Speakers/SpeakerInformation2023"),
);
const Communities2023 = lazy(() => import("./Communities/Communities2023"));
const CfpSection2023 = lazy(() => import("./Cfp/CfpSectionWrapper"));
const SessionFeedback2023 = lazy(
  () => import("./SessionFeedback/SessionFeedback2023"),
);
const Schedule2023 = lazy(() => import("./Schedule/Schedule2023"));
const Workshops2023 = lazy(() => import("./Workshops/Workshops2023"));
const JobOffers2023 = lazy(() => import("./JobOffers/JobOffers2023"));
const Diversity2023 = lazy(() => import("./Diversity/Diversity2023"));

const Routes2023 = () => (
  <>
    <Route
      path={ROUTE_2023_HOME}
      element={
        <React.Suspense fallback={<Loading />}>
          <Home2023Wrapper />
        </React.Suspense>
      }
    />
    <Route
      path={ROUTE_2023_DIVERSITY}
      element={
        <React.Suspense fallback={<Loading />}>
          <Diversity2023 />
        </React.Suspense>
      }
    />
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
  </>
);

export default Routes2023;
