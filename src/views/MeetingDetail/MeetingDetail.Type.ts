import {SessionSpeaker} from "../../types/sessions";

export interface IMeeting {
  id: number;
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
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}
