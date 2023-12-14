import {
  ROUTE_2023_ATTENDEE,
  ROUTE_2023_CFP,
  ROUTE_2023_COMMUNITIES,
  ROUTE_2023_DIVERSITY,
  ROUTE_2023_HOME,
  ROUTE_2023_JOB_OFFERS,
  ROUTE_2023_SCHEDULE,
  ROUTE_2023_SESSION_FEEDBACK,
  ROUTE_2023_SPEAKER_INFO,
  ROUTE_2023_SPEAKERS,
  ROUTE_2023_TALKS,
  ROUTE_2023_WORKSHOPS,
  ROUTE_ABOUT_US,
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_TRAVEL,
} from "../../constants/routes";

interface NavigationItem {
  id: string;
  link: string;
}

export const navigationItems2023: NavigationItem[] = [
  { id: "Home", link: ROUTE_2023_HOME },
  { id: "Code of Conduct", link: ROUTE_CODE_OF_CONDUCT },
  { id: "Sponsors", link: "/2023/#sponsors" },
  { id: "SCHEDULE", link: ROUTE_2023_SCHEDULE },
  { id: "Talks", link: ROUTE_2023_TALKS },
  { id: "Workshops", link: ROUTE_2023_WORKSHOPS },
  { id: "JOB OFFERS", link: ROUTE_2023_JOB_OFFERS },
  { id: "Communities", link: ROUTE_2023_COMMUNITIES },
  { id: "Speakers", link: ROUTE_2023_SPEAKERS },
  { id: "About Us", link: ROUTE_ABOUT_US },
  { id: "Travel", link: ROUTE_TRAVEL },
];

export const subMenuItems2023: NavigationItem[] = [
  { id: "DIVERSITY", link: ROUTE_2023_DIVERSITY },
  { id: "Cfp Committee", link: ROUTE_2023_CFP },
  { id: "Attendee information", link: ROUTE_2023_ATTENDEE },
  { id: "Speaker information", link: ROUTE_2023_SPEAKER_INFO },
  { id: "Session feedback", link: ROUTE_2023_SESSION_FEEDBACK },
];
