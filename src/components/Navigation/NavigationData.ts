import {
  ROUTE_ABOUT_US,
  ROUTE_CFP,
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_HOME,
  ROUTE_JOB_OFFERS,
  ROUTE_SPEAKERS,
  ROUTE_TALKS,
  ROUTE_TRAVEL
} from "../../constants/routes";

export const navigationItems = [
  { id: "HOME", link: ROUTE_HOME },
  { id: "CODE OF CONDUCT", link: ROUTE_CODE_OF_CONDUCT },
  { id: "SPONSORS", link: "/#sponsors" },
  //{ id: "DIVERSITY", link: ROUTE_DIVERSITY },
  //{ id: "SCHEDULE", link: ROUTE_SCHEDULE },
  { id: "TALKS", link: ROUTE_TALKS },
  { id: "JOB OFFERS", link: ROUTE_JOB_OFFERS },
  { id: "SPEAKERS", link: ROUTE_SPEAKERS },
  { id: "ABOUT US", link: ROUTE_ABOUT_US },
  { id: "CFP COMMITTEE", link: ROUTE_CFP },
  { id: "TRAVEL", link: ROUTE_TRAVEL }
];
