import {
    ROUTE_ABOUT_US,
    ROUTE_ACCOMMODATION,
    ROUTE_CFP_PARAMETERIZED,
    ROUTE_CODE_OF_CONDUCT,
    ROUTE_DIVERSITY,
    ROUTE_HOME,
    ROUTE_JOB_OFFERS,
    ROUTE_KCD,
    ROUTE_SCHEDULE_PARAMETERIZED,
    ROUTE_SPEAKERS_PARAMETERIZED,
    ROUTE_SPONSORSHIP,
    ROUTE_TALKS_PARAMETERIZED,
    ROUTE_TRAVEL,
} from "../../constants/routes";

export interface NavigationItem {
    id: string;
    link: string;
}

export const navigationItems = (edition: string): NavigationItem[] => [
    {id: "Home", link: `${ROUTE_HOME}${edition}`},
    {id: "Code of Conduct", link: ROUTE_CODE_OF_CONDUCT},
    {id: "Sponsors", link: `/${edition}/#sponsors`},
    {id: "SCHEDULE", link: ROUTE_SCHEDULE_PARAMETERIZED.replace(":year", edition)},
    {id: "Talks", link: ROUTE_TALKS_PARAMETERIZED.replace(":year", edition)},
    {id: "JOB OFFERS", link: ROUTE_JOB_OFFERS.replace(":year", edition)},
    {
        id: "Speakers",
        link: ROUTE_SPEAKERS_PARAMETERIZED.replace(":year", edition),
    },
    {id: "About Us", link: ROUTE_ABOUT_US},
    {id: "Travel", link: ROUTE_TRAVEL},
    {id: "KCD - Barcelona", link: ROUTE_KCD},
    {id: "Sponsorship", link: ROUTE_SPONSORSHIP},
    //{ id: "Workshops", link: ROUTE_WORKSHOPS },
    //{ id: "Communities", link: ROUTE_COMMUNITIES },
];

export const subMenuItems = (edition: string): NavigationItem[] => [
    {id: "DIVERSITY", link: ROUTE_DIVERSITY},
    {
        id: "Cfp Committee",
        link: ROUTE_CFP_PARAMETERIZED.replace(":year", edition)
    },
    {id: "Accommodation", link: ROUTE_ACCOMMODATION},
    //{ id: "Attendee information", link: ROUTE_ATTENDEE },
    //{ id: "Speaker information", link: ROUTE_SPEAKER_INFO },
    //{ id: "Session feedback", link: ROUTE_SESSION_FEEDBACK },
];
