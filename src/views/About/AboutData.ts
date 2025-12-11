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
    job: "Developer Advocate",
    jobColor: Color.DARK_BLUE,
    profileUrl: new URL("https://avatars.githubusercontent.com/u/1836434?v=4"),
    twitterUrl: new URL("https://twitter.com/vilojona"),
    linkedinUrl: new URL("https://www.linkedin.com/in/jonathanvila"),
  },
  {
    id: 2,
    name: "Nacho Cougil",
    nameColor: Color.DARK_BLUE,
    job: "Java Engineer",
    jobColor: Color.BLUE,
    profileUrl: new URL("https://www.devbcn.com/images/nacho.jpg"),
    twitterUrl: new URL("https://twitter.com/icougil"),
    linkedinUrl: new URL("https://www.linkedin.com/in/icougil"),
  },
];
