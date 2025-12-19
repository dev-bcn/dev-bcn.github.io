import { lazy } from "react";

// ============================================
// SHARED COMPONENTS (No year prefix)
// ============================================

export const Loading = lazy(() =>
  import("@components/Loading/Loading").then((value) => ({
    default: value.Loading,
  })),
);

export const NotFoundError = lazy(() =>
  import("../components/NotFoundError/NotFoundError").then((value) => ({
    default: value.NotFoundError,
  })),
);

export const HomeWrapper = lazy(() =>
  import("../views/Home/HomeWrapper").then((value) => ({
    default: value.HomeWrapper,
  })),
);

export const About = lazy(() => import("../views/About/About"));
export const Accommodation = lazy(() =>
  import("../views/Travel/Accommodation").then((value) => ({
    default: value.Accommodation,
  })),
);
export const CfpSection = lazy(() => import("../views/Cfp/CfpSection"));
export const CodeOfConduct = lazy(
  () => import("../views/CodeOfConduct/CodeOfConduct"),
);
export const Conditions = lazy(() => import("../views/Conditions/Conditions"));
export const Cookies = lazy(() => import("../views/Cookies/Cookies"));
export const Diversity = lazy(() =>
  import("../views/Diversity/Diversity").then((value) => ({
    default: value.Diversity,
  })),
);
export const JobOffersList = lazy(
  () => import("@components/JobOffers/JobOffersList"),
);
export const Kcd = lazy(() => import("../views/kcd/Kcd"));
export const LiveView = lazy(() =>
  import("../views/Talks/LiveView").then((value) => ({
    default: value.LiveView,
  })),
);
export const Schedule = lazy(() => import("../views/Schedule/Schedule"));
export const Speakers = lazy(() => import("../views/Speakers/Speakers"));
export const SpeakerDetailContainer = lazy(() =>
  import("../views/SpeakerDetail/SpeakerDetailContainer").then((module) => ({
    default: module.SpeakerDetailContainer,
  })),
);
export const SpeakerInformation = lazy(() =>
  import("../views/Speakers/SpeakerInformation").then((value) => ({
    default: value.SpeakerInformation,
  })),
);
export const Sponsorship = lazy(
  () => import("../views/sponsorship/Sponsorship"),
);
export const TalkDetailContainer = lazy(
  () => import("../views/MeetingDetail/TalkDetailContainer"),
);
export const Talks = lazy(() => import("../views/Talks/Talks"));
export const Travel = lazy(() => import("../views/Travel/Travel"));
export const Workshops = lazy(() => import("../views/Workshops/Workshops"));

// ============================================
// 2026 COMPONENTS
// ============================================

// 2026 uses mostly shared components, just re-export them with year suffix for consistency
export const HomeWrapper2026 = HomeWrapper;
export const Schedule2026 = Schedule;
export const Speakers2026 = Speakers;
export const Talks2026 = Talks;
export const Workshops2026 = Workshops;
export const JobOffersList2026 = JobOffersList;
export const Diversity2026 = Diversity;
export const CfpSection2026 = CfpSection;
export const SpeakerInformation2026 = SpeakerInformation;
export const SpeakerDetailContainer2026 = SpeakerDetailContainer;
export const TalkDetailContainer2026 = TalkDetailContainer;

// ============================================
// 2025 COMPONENTS
// ============================================

export const HomeWrapper2025 = lazy(() =>
  import("../2025/Home/HomeWrapper2025").then((value) => ({
    default: value.HomeWrapper2025,
  })),
);
export const Schedule2025 = lazy(() => import("../views/Schedule/Schedule"));
export const Speakers2025 = lazy(() =>
  import("../2025/Speakers/SpeakersWrapper2025").then((value) => ({
    default: value.SpeakersWrapper2025,
  })),
);
export const Talks2025 = lazy(() => import("../views/Talks/Talks"));
export const SpeakerInformation2025 = lazy(() =>
  import("../views/Speakers/SpeakerInformation").then((module) => ({
    default: module.SpeakerInformation,
  })),
);
export const SpeakerDetailContainer2025 = lazy(() =>
  import("../views/SpeakerDetail/SpeakerDetailContainer").then((module) => ({
    default: module.SpeakerDetailContainer,
  })),
);
export const TalkDetailContainer2025 = lazy(
  () => import("../views/MeetingDetail/TalkDetailContainer"),
);
export const Workshops2025 = lazy(() => import("../views/Workshops/Workshops"));
export const JobOffers2025 = lazy(
  () => import("@components/JobOffers/JobOffersList"),
);
export const Diversity2025 = lazy(() =>
  import("../views/Diversity/Diversity").then((module) => ({
    default: module.Diversity,
  })),
);
export const CfpSection2025 = lazy(() =>
  import("../2025/Cfp/CfpSectionWrapper2025").then((value) => ({
    default: value.CfpSectionWrapper2025,
  })),
);
export const SessionFeedback2025 = lazy(
  () => import("../2023/SessionFeedback/SessionFeedback2023"),
);
export const AttendeeInformation2025 = lazy(
  () => import("../2023/Attendee/AttendeeInformation2023"),
);
export const Communities2025 = lazy(
  () => import("../2023/Communities/Communities2023"),
);

// ============================================
// 2024 COMPONENTS
// ============================================

export const HomeWrapper2024 = lazy(() =>
  import("../2024/HomeWrapper2024").then((value) => ({
    default: value.HomeWrapper2024,
  })),
);
export const Speakers2024 = lazy(() =>
  import("../2024/Speakers/SpeakersWrapper").then((value) => ({
    default: value.SpeakersWrapper,
  })),
);
export const SpeakerDetailContainer2024 = lazy(() =>
  import("../2024/SpeakerDetail/SpeakerDetailContainer2024").then((value) => ({
    default: value.SpeakerDetailContainer2024,
  })),
);
export const CfpSection2024 = lazy(
  () => import("../2024/Cfp/CfpSectionWrapper"),
);
export const Talks2024 = lazy(() => import("../2024/Talks/TalksWrapper"));
export const Schedule2024 = lazy(() => import("../2024/Schedule/Schedule2024"));
export const JobOffers2024 = lazy(
  () => import("../2024/JobOffers/JobOffers2024"),
);
export const MeetingDetailContainer2024 = lazy(() =>
  import("../2024/TalkDetail/MeetingDetailContainer2024").then((value) => ({
    default: value.MeetingDetailContainer2024,
  })),
);

// ============================================
// 2023 COMPONENTS
// ============================================

export const Home2023Wrapper = lazy(
  () => import("../2023/Home/Home2023Wrapper"),
);
export const Diversity2023 = lazy(
  () => import("../2023/Diversity/Diversity2023"),
);
export const Schedule2023 = lazy(() => import("../2023/Schedule/Schedule2023"));
export const Workshops2023 = lazy(
  () => import("../2023/Workshops/Workshops2023"),
);
export const JobOffers2023 = lazy(
  () => import("../2023/JobOffers/JobOffers2023"),
);
export const CfpSection2023 = lazy(
  () => import("../2023/Cfp/CfpSectionWrapper"),
);
export const Speakers2023 = lazy(
  () => import("../2023/Speakers/SpeakersWrapper"),
);
export const SpeakerDetailContainer2023 = lazy(
  () => import("../2023/SpeakerDetail/SpeakerDetailContainer2023"),
);
export const Talks2023 = lazy(() => import("../2023/Talks/Talks2023"));
export const TalkDetailContainer2023 = lazy(
  () => import("../2023/TalkDetail/TalkDetailContainer2023"),
);
export const SessionFeedback2023 = lazy(
  () => import("../2023/SessionFeedback/SessionFeedback2023"),
);
export const AttendeeInformation2023 = lazy(
  () => import("../2023/Attendee/AttendeeInformation2023"),
);
export const Communities2023 = lazy(
  () => import("../2023/Communities/Communities2023"),
);
export const SpeakerInformation2023 = lazy(
  () => import("../2023/Speakers/SpeakerInformation2023"),
);

// QR Code (appears to be 2024-specific)
export const QrCodeSection = lazy(
  () => import("../views/QrCode/QrCodeSection"),
);
