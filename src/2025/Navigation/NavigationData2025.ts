import {
    ROUTE_2025_CFP,
    ROUTE_2025_DIVERSITY,
    ROUTE_2025_HOME,
    ROUTE_2025_JOB_OFFERS,
    ROUTE_2025_SCHEDULE,
    ROUTE_2025_SPEAKERS,
    ROUTE_2025_TALKS,
    ROUTE_2025_WORKSHOPS,
} from "../../constants/routes";
import { NavigationItem } from "../../components/Navigation/NavigationData";

export const navigationItems2025: NavigationItem[] = [
    { id: "Home", link: ROUTE_2025_HOME },
    { id: "Sponsors", link: "/2025#sponsors" },
    { id: "SCHEDULE", link: ROUTE_2025_SCHEDULE },
    { id: "Talks", link: ROUTE_2025_TALKS },
    { id: "Workshops", link: ROUTE_2025_WORKSHOPS },
    { id: "JOB OFFERS", link: ROUTE_2025_JOB_OFFERS },
    { id: "Speakers", link: ROUTE_2025_SPEAKERS },
];

export const subMenuItems2025: NavigationItem[] = [
    { id: "DIVERSITY", link: ROUTE_2025_DIVERSITY },
    { id: "Cfp Committee", link: ROUTE_2025_CFP },
];
