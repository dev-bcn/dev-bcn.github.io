import { SessionSpeaker } from "../Talks/Talk.types";

export interface IMeeting {
  urlName?: string;
  title: string;
  description: string;
  videoUrl?: string;
  slidesURL?: string;
  videoTags?: string[];
  speakers: SessionSpeaker[];
  level?: string;
  type?: string;
  language?: string;
  track?: string;
}
