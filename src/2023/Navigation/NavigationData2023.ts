import {
  ROUTE_2023_ATTENDEE,
  ROUTE_CFP_PARAMETERIZED,
  ROUTE_COMMUNITIES_PARAMETERIZED,
  ROUTE_DIVERSITY_PARAMETERIZED,
  ROUTE_HOME_2023,
  ROUTE_JOB_OFFERS_PARAMETERIZED,
  ROUTE_SCHEDULE_PARAMETERIZED,
  ROUTE_SESSION_FEEDBACK_PARAMETERIZED,
  ROUTE_SPEAKER_INFO_PARAMETERIZED,
  ROUTE_SPEAKERS_PARAMETERIZED,
  ROUTE_TALKS_PARAMETERIZED,
  ROUTE_WORKSHOPS_PARAMETERIZED,
  ROUTE_ABOUT_US,
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_TRAVEL,
} from "../../constants/routes";

interface NavigationItem {
  id: string;
  link: string;
}

export const navigationItems2023: NavigationItem[] = [
  { id: "Home", link: ROUTE_HOME_2023 },
  { id: "Code of Conduct", link: ROUTE_CODE_OF_CONDUCT },
  { id: "Sponsors", link: "/2023/#sponsors" },
  { id: "SCHEDULE", link: ROUTE_SCHEDULE_PARAMETERIZED },
  { id: "Talks", link: ROUTE_TALKS_PARAMETERIZED },
  { id: "Workshops", link: ROUTE_WORKSHOPS_PARAMETERIZED },
  { id: "JOB OFFERS", link: ROUTE_JOB_OFFERS_PARAMETERIZED },
  { id: "Communities", link: ROUTE_COMMUNITIES_PARAMETERIZED },
  { id: "Speakers", link: ROUTE_SPEAKERS_PARAMETERIZED },
  { id: "About Us", link: ROUTE_ABOUT_US },
  { id: "Travel", link: ROUTE_TRAVEL },
];

export const subMenuItems2023: NavigationItem[] = [
  { id: "DIVERSITY", link: ROUTE_DIVERSITY_PARAMETERIZED },
  { id: "Cfp Committee", link: ROUTE_CFP_PARAMETERIZED },
  { id: "Attendee information", link: ROUTE_2023_ATTENDEE },
  { id: "Speaker information", link: ROUTE_SPEAKER_INFO_PARAMETERIZED },
  { id: "Session feedback", link: ROUTE_SESSION_FEEDBACK_PARAMETERIZED },
];
