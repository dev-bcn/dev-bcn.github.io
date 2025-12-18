import { LazyExoticComponent, ComponentType } from "react";
import * as LazyComponents from "../utils/lazyComponents";

/**
 * Route configuration for a specific year
 * Maps route names to their lazy-loaded components
 */
export interface YearRouteComponents {
    home: LazyExoticComponent<ComponentType<any>>;
    schedule?: LazyExoticComponent<ComponentType<any>>;
    speakers?: LazyExoticComponent<ComponentType<any>>;
    talks?: LazyExoticComponent<ComponentType<any>>;
    workshops?: LazyExoticComponent<ComponentType<any>>;
    jobOffers?: LazyExoticComponent<ComponentType<any>>;
    diversity?: LazyExoticComponent<ComponentType<any>>;
    cfp?: LazyExoticComponent<ComponentType<any>>;
    speakerInfo?: LazyExoticComponent<ComponentType<any>>;
    speakerDetail?: LazyExoticComponent<ComponentType<any>>;
    talkDetail?: LazyExoticComponent<ComponentType<any>>;
    sessionFeedback?: LazyExoticComponent<ComponentType<any>>;
    attendee?: LazyExoticComponent<ComponentType<any>>;
    communities?: LazyExoticComponent<ComponentType<any>>;
    sponsorship?: LazyExoticComponent<ComponentType<any>>;
    codeOfConduct?: LazyExoticComponent<ComponentType<any>>;
}

/**
 * Year-specific route configurations
 * Each year maps to its specific components
 */
export const yearRouteConfigs: Record<string, YearRouteComponents> = {
    "2026": {
        home: LazyComponents.HomeWrapper2026,
        schedule: LazyComponents.Schedule2026,
        speakers: LazyComponents.Speakers2026,
        talks: LazyComponents.Talks2026,
        workshops: LazyComponents.Workshops2026,
        jobOffers: LazyComponents.JobOffersList2026,
        diversity: LazyComponents.Diversity2026,
        cfp: LazyComponents.CfpSection2026,
        speakerInfo: LazyComponents.SpeakerInformation2026,
        speakerDetail: LazyComponents.SpeakerDetailContainer2026,
        talkDetail: LazyComponents.TalkDetailContainer2026,
        sponsorship: LazyComponents.Sponsorship,
        codeOfConduct: LazyComponents.CodeOfConduct,
    },
    "2025": {
        home: LazyComponents.HomeWrapper2025,
        schedule: LazyComponents.Schedule2025,
        speakers: LazyComponents.Speakers2025,
        talks: LazyComponents.Talks2025,
        workshops: LazyComponents.Workshops2025,
        jobOffers: LazyComponents.JobOffers2025,
        diversity: LazyComponents.Diversity2025,
        cfp: LazyComponents.CfpSection2025,
        speakerInfo: LazyComponents.SpeakerInformation2025,
        speakerDetail: LazyComponents.SpeakerDetailContainer2025,
        talkDetail: LazyComponents.TalkDetailContainer2025,
        sessionFeedback: LazyComponents.SessionFeedback2025,
        attendee: LazyComponents.AttendeeInformation2025,
        communities: LazyComponents.Communities2025,
        sponsorship: LazyComponents.Sponsorship,
        codeOfConduct: LazyComponents.CodeOfConduct,
    },
    "2024": {
        home: LazyComponents.HomeWrapper2024,
        schedule: LazyComponents.Schedule2024,
        speakers: LazyComponents.Speakers2024,
        talks: LazyComponents.Talks2024,
        workshops: LazyComponents.Workshops,
        jobOffers: LazyComponents.JobOffers2024,
        diversity: LazyComponents.Diversity,
        cfp: LazyComponents.CfpSection2024,
        speakerInfo: LazyComponents.SpeakerInformation2023, // Reusing 2023
        speakerDetail: LazyComponents.SpeakerDetailContainer2024,
        talkDetail: LazyComponents.MeetingDetailContainer2024,
        sessionFeedback: LazyComponents.SessionFeedback2023,
        attendee: LazyComponents.AttendeeInformation2023,
        communities: LazyComponents.Communities2023,
        sponsorship: LazyComponents.Sponsorship,
        codeOfConduct: LazyComponents.CodeOfConduct,
    },
    "2023": {
        home: LazyComponents.Home2023Wrapper,
        diversity: LazyComponents.Diversity2023,
        schedule: LazyComponents.Schedule2023,
        workshops: LazyComponents.Workshops2023,
        jobOffers: LazyComponents.JobOffers2023,
        cfp: LazyComponents.CfpSection2023,
        speakers: LazyComponents.Speakers2023,
        speakerDetail: LazyComponents.SpeakerDetailContainer2023,
        talks: LazyComponents.Talks2023,
        talkDetail: LazyComponents.TalkDetailContainer2023,
        sessionFeedback: LazyComponents.SessionFeedback2023,
        attendee: LazyComponents.AttendeeInformation2023,
        communities: LazyComponents.Communities2023,
        speakerInfo: LazyComponents.SpeakerInformation2023,
        sponsorship: LazyComponents.Sponsorship,
        codeOfConduct: LazyComponents.CodeOfConduct,
    },
};

/**
 * List of years with route configurations
 */
export const CONFIGURED_YEARS = Object.keys(yearRouteConfigs);
