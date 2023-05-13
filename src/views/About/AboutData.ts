import { Color } from "../../styles/colors";

type Member = {
  id: number;
  name: string;
  nameColor: Color;

  profileUrl: URL;
  job: string;
  jobColor: Color;
  twitterUrl: URL;
  linkedinUrl: URL;
};

export const aboutData: Member[] = [
  {
    id: 1,
    name: "Jonathan Vila",
    nameColor: Color.BLUE,
    job: "Java developer",
    jobColor: Color.DARK_BLUE,
    profileUrl: new URL("https://avatars.githubusercontent.com/u/1836434?v=4"),
    twitterUrl: new URL("https://twitter.com/vilojona"),
    linkedinUrl: new URL("https://www.linkedin.com/in/jonathanvila"),
  },
  {
    id: 2,
    name: "Nacho Cougil",
    nameColor: Color.DARK_BLUE,
    job: "Java engineer",
    jobColor: Color.BLUE,
    profileUrl: new URL(
      "https://pbs.twimg.com/profile_images/1376512940984123393/BvU6hkHj_400x400.jpg"
    ),
    twitterUrl: new URL("https://twitter.com/icougil"),
    linkedinUrl: new URL("https://www.linkedin.com/in/icougil"),
  },
];
