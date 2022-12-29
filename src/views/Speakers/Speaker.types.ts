interface Session {
  id: number;
  name: string;
}

interface Link {
  title: string;
  url: string;
  linkType: string;
}

export interface ISpeaker {
  id: string;
  fullName: string;
  bio: string;
  tagLine: string;
  speakerImage: string;
  twitterUrl?: Link;
  linkedInUrl?: Link;
  sessions?: Session[];
}

export interface IResponse {
  id: string;
  fullName: string;
  tagLine: string;
  bio: string;
  profilePicture: string;
  sessions: Session[];

  links: Link[];
}
