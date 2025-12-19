import * as routes from "@constants/routes";

import { yearRouteConfigs } from "./yearRoutes";
import * as LazyComponents from "../utils/lazyComponents";

/**
 * Interface for a single route configuration
 */
export interface RouteConfig {
  path: string;
  component:
    | React.LazyExoticComponent<React.ComponentType<any>>
    | React.ComponentType<any>;
  exact?: boolean;
}

/**
 * Generate routes for a specific year
 */
export const generateYearRoutes = (year: string): RouteConfig[] => {
  const yearConfig = yearRouteConfigs[year];
  if (!yearConfig) return [];

  const routesList: RouteConfig[] = [
    { path: `/${year}`, component: yearConfig.home },
  ];

  // Add optional routes if they exist
  if (yearConfig.schedule) {
    routesList.push({
      path: `/${year}/schedule`,
      component: yearConfig.schedule,
    });
  }
  if (yearConfig.speakers) {
    routesList.push({
      path: `/${year}/speakers`,
      component: yearConfig.speakers,
    });
  }
  if (yearConfig.talks) {
    routesList.push({ path: `/${year}/talks`, component: yearConfig.talks });
  }
  if (yearConfig.workshops) {
    routesList.push({
      path: `/${year}/workshops`,
      component: yearConfig.workshops,
    });
  }
  if (yearConfig.jobOffers) {
    routesList.push({
      path: `/${year}/jobOffers`,
      component: yearConfig.jobOffers,
    });
  }
  if (yearConfig.diversity) {
    routesList.push({
      path: `/${year}/diversity`,
      component: yearConfig.diversity,
    });
  }
  if (yearConfig.cfp) {
    routesList.push({ path: `/${year}/cfp`, component: yearConfig.cfp });
  }
  if (yearConfig.speakerInfo) {
    routesList.push({
      path: `/${year}/speaker-information`,
      component: yearConfig.speakerInfo,
    });
  }
  if (yearConfig.speakerDetail) {
    routesList.push({
      path: `/${year}/speaker/:id`,
      component: yearConfig.speakerDetail,
    });
  }
  if (yearConfig.talkDetail) {
    routesList.push({
      path: `/${year}/talk/:id`,
      component: yearConfig.talkDetail,
    });
  }
  if (yearConfig.sessionFeedback) {
    routesList.push({
      path: `/${year}/session-feedback`,
      component: yearConfig.sessionFeedback,
    });
  }
  if (yearConfig.attendee) {
    routesList.push({
      path: `/${year}/attendee`,
      component: yearConfig.attendee,
    });
  }
  if (yearConfig.communities) {
    routesList.push({
      path: `/${year}/communities`,
      component: yearConfig.communities,
    });
  }
  if (yearConfig.sponsorship) {
    routesList.push({
      path: `/${year}/sponsorship`,
      component: yearConfig.sponsorship,
    });
  }
  if (yearConfig.codeOfConduct) {
    routesList.push({
      path: `/${year}/codeOfConduct`,
      component: yearConfig.codeOfConduct,
    });
  }

  return routesList;
};

/**
 * Shared/common routes that don't belong to a specific year
 */
export const sharedRoutes: RouteConfig[] = [
  { path: "/loading", component: LazyComponents.Loading },
  { path: routes.ROUTE_TALKS, component: LazyComponents.Talks },
  { path: routes.ROUTE_WORKSHOPS, component: LazyComponents.Workshops },
  {
    path: routes.ROUTE_CODE_OF_CONDUCT,
    component: LazyComponents.CodeOfConduct,
  },
  { path: routes.ROUTE_CONDITIONS, component: LazyComponents.Conditions },
  { path: "live-view", component: LazyComponents.LiveView },
  { path: routes.ROUTE_COOKIES, component: LazyComponents.Cookies },
  { path: routes.ROUTE_DIVERSITY, component: LazyComponents.Diversity },
  { path: routes.ROUTE_JOB_OFFERS, component: LazyComponents.JobOffersList },
  { path: routes.ROUTE_SCHEDULE, component: LazyComponents.Schedule },
  { path: routes.ROUTE_SPEAKERS, component: LazyComponents.Speakers },
  {
    path: routes.ROUTE_SPEAKER_INFO,
    component: LazyComponents.SpeakerInformation,
  },
  { path: routes.ROUTE_ABOUT_US, component: LazyComponents.About },
  { path: routes.ROUTE_CFP, component: LazyComponents.CfpSection },
  { path: routes.ROUTE_TRAVEL, component: LazyComponents.Travel },
  { path: routes.ROUTE_KCD, component: LazyComponents.Kcd },
  {
    path: routes.ROUTE_MEETING_DETAIL_PLAIN,
    component: LazyComponents.TalkDetailContainer,
  },
  {
    path: routes.ROUTE_SPEAKER_DETAIL_PLAIN,
    component: LazyComponents.SpeakerDetailContainer,
  },
  { path: routes.ROUTE_SPONSORSHIP, component: LazyComponents.Sponsorship },
  { path: "/:year", component: LazyComponents.HomeWrapper },
  { path: routes.ROUTE_ACCOMMODATION, component: LazyComponents.Accommodation },
  { path: routes.ROUTE_HOME, component: LazyComponents.HomeWrapper2026 },
  // 404 catch-all - must be last
  { path: "*", component: LazyComponents.NotFoundError },
];

/**
 * Get all route configurations
 */
export const getAllRoutes = (): RouteConfig[] => {
  const allRoutes: RouteConfig[] = [];

  // Add shared routes first (except 404)
  const sharedWithout404 = sharedRoutes.filter((r) => r.path !== "*");
  allRoutes.push(...sharedWithout404);

  // Add year-specific routes
  const years = ["2026", "2025", "2024", "2023"];
  years.forEach((year) => {
    allRoutes.push(...generateYearRoutes(year));
  });

  // Add 404 route last
  const notFound = sharedRoutes.find((r) => r.path === "*");
  if (notFound) {
    allRoutes.push(notFound);
  }

  return allRoutes;
};
