import { SessionSpeaker } from "../Talks/Talk.types";

export interface IMeeting {
  urlName?: string;
  title: string;
  description: string;
  videoUrl?: string;
  videoTags?: string[];
  speakers?: SessionSpeaker[];
  speakerTitle?: string;
  speakerDescription?: string;
  speakerPhotoUrl?: string;
  speakerTwitterUrl?: string;
  speakerLinkedinUrl?: string;
  level?: string;
}
