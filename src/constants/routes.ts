export const ROUTE_HOME = '/';
export const ROUTE_HOME_ALTERNATE = '/website';
export const ROUTE_TALKS = '/talks';
export const ROUTE_CODE_OF_CONDUCT = '/codeOfConduct';
export const ROUTE_JOB_OFFERS = '/jobOffers';
export const ROUTE_SCHEDULE = '/schedule';
export const ROUTE_SPEAKERS = '/speakers';
export const ROUTE_ABOUT_US = '/aboutUs';

export const ROUTE_TALK_DETAIL = "/meetingDetail/";
export const ROUTE_MEETING_DETAIL_PLAIN = '/meetingDetail/:name';
export const ROUTE_SPEAKER_DETAIL_PLAIN = '/speakerDetail/:name';
export const ROUTE_MEETING_DETAIL = (name: string) => `/meetingDetail/${name}`;
export const ROUTE_SPEAKER_DETAIL = (name: string) => `/speakerDetail/${name}`;
