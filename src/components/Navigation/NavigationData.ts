import {
  ROUTE_2026_CFP,
  ROUTE_2026_CODE_OF_CONDUCT,
  ROUTE_2026_HOME,
  ROUTE_2026_SPONSORSHIP,
  ROUTE_2026_TRAVEL,
  ROUTE_ABOUT_US,
} from "@constants/routes";

export interface NavigationItem {
  id: string;
  link: string;
}

export const navigationItems2026: NavigationItem[] = [
  { id: "Home", link: ROUTE_2026_HOME },
  { id: "Code of Conduct", link: ROUTE_2026_CODE_OF_CONDUCT },
  { id: "Sponsors", link: "/2026/#sponsors" },
  //{ id: "SCHEDULE", link: ROUTE_2026_SCHEDULE },
  //{ id: "Talks", link: ROUTE_2026_TALKS },
  //{ id: "Workshops", link: ROUTE_2026_WORKSHOPS },
  //{ id: "JOB OFFERS", link: ROUTE_2026_JOB_OFFERS },
  //{ id: "Communities", link: ROUTE_COMMUNITIES },
  //{ id: "Speakers", link: ROUTE_2026_SPEAKERS },
  { id: "About Us", link: ROUTE_ABOUT_US },
  { id: "Travel", link: ROUTE_2026_TRAVEL },
  { id: "Sponsorship", link: ROUTE_2026_SPONSORSHIP },
];

export const subMenuItems2026: NavigationItem[] = [
  //{ id: "DIVERSITY", link: ROUTE_2026_DIVERSITY },
  { id: "CFP COMMITTEE", link: ROUTE_2026_CFP },
  //{ id: "Accommodation", link: ROUTE_ACCOMMODATION },
];
