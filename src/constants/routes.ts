export const ROUTE_HOME = '/jbcn-conf';
export const ROUTE_TALKS = '/jbcn-conf/talks';
export const ROUTE_CODE_OF_CONDUCT = '/jbcn-conf/codeOfConduct';
export const ROUTE_JOB_OFFERS = '/jbcn-conf/jobOffers';
export const ROUTE_SCHEDULE = '/jbcn-conf/schedule';
export const ROUTE_SPEAKERS = '/jbcn-conf/speakers';
export const ROUTE_ABOUT_US = '/jbcn-conf/aboutUs';
export const ROUTE_MEETING_DETAIL_PLAIN = '/jbcn-conf/meetingDetail/:name';
export const ROUTE_SPEAKER_DETAIL_PLAIN = '/jbcn-conf/speakerDetail/:name';
export const ROUTE_MEETING_DETAIL = (name: string) =>
  `/jbcn-conf/meetingDetail/${name}`;
export const ROUTE_SPEAKER_DETAIL = (name: string) =>
  `/jbcn-conf/speakerDetail/${name}`;
