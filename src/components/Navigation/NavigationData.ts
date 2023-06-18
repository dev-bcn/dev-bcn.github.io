import {
  ROUTE_ABOUT_US,
  ROUTE_CFP,
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_COMMUNITIES,
  ROUTE_DIVERSITY,
  ROUTE_HOME,
  ROUTE_JOB_OFFERS,
  ROUTE_SCHEDULE,
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
  { id: "DIVERSITY", link: ROUTE_DIVERSITY },
  { id: "SCHEDULE", link: ROUTE_SCHEDULE },
  { id: "Talks", link: ROUTE_TALKS },
  { id: "Workshops", link: ROUTE_WORKSHOPS },
  { id: "JOB OFFERS", link: ROUTE_JOB_OFFERS },
  { id: "Communities", link: ROUTE_COMMUNITIES },
  { id: "Speakers", link: ROUTE_SPEAKERS },
  { id: "About Us", link: ROUTE_ABOUT_US },
  { id: "Cfp Committee", link: ROUTE_CFP },
  { id: "Travel", link: ROUTE_TRAVEL },
];
