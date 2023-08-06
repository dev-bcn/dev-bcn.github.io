import {
  ROUTE_ABOUT_US,
  ROUTE_ATTENDEE,
  ROUTE_CFP,
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_COMMUNITIES,
  ROUTE_DIVERSITY,
  ROUTE_HOME,
  ROUTE_JOB_OFFERS,
  ROUTE_SCHEDULE,
  ROUTE_SESSION_FEEDBACK,
  ROUTE_SPEAKER_INFO,
  ROUTE_SPEAKERS,
  ROUTE_TALKS,
  ROUTE_TRAVEL,
  ROUTE_WORKSHOPS,
} from "../../constants/routes";

interface NavigationItem {
  id: string;
  link: string;
}

export const navigationItems: NavigationItem[] = [
  { id: "Home", link: ROUTE_HOME },
  { id: "Code of Conduct", link: ROUTE_CODE_OF_CONDUCT },
  { id: "Sponsors", link: "/#sponsors" },
  { id: "SCHEDULE", link: ROUTE_SCHEDULE },
  { id: "Talks", link: ROUTE_TALKS },
  { id: "Workshops", link: ROUTE_WORKSHOPS },
  { id: "JOB OFFERS", link: ROUTE_JOB_OFFERS },
  { id: "Communities", link: ROUTE_COMMUNITIES },
  { id: "Speakers", link: ROUTE_SPEAKERS },
  { id: "About Us", link: ROUTE_ABOUT_US },
  { id: "Travel", link: ROUTE_TRAVEL },
];

export const subMenuItems: NavigationItem[] = [
  { id: "DIVERSITY", link: ROUTE_DIVERSITY },
  { id: "Cfp Committee", link: ROUTE_CFP },
  { id: "Attendee information", link: ROUTE_ATTENDEE },
  { id: "Speaker information", link: ROUTE_SPEAKER_INFO },
  { id: "Session feedback", link: ROUTE_SESSION_FEEDBACK },
];
