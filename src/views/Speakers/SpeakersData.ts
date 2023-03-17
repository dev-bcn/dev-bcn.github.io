import { ISpeaker } from "./Speaker.types";

export const speakersData: ISpeaker[] = [
  {
    id: "natalia",
    speakerImage: "/images/speakers/natalia-venditto.png",
    tagLine:
      "Principal #JavaScript e2e Lead for #DX  @Microsoft   @Azure  #DevDiv x-  @MongoDB  Architect. ❤️#Devtools, #Serverless, #OSS, Frontend, DBs & Edge/WASM.",
    bio: "",
    fullName: "Natalia Venditto",
    linkedInUrl: {
      url: "https://www.linkedin.com/in/AnfibiaCreativa",
      linkType: "LinkedIn",
      title: "LinkedIn",
    },
    twitterUrl: {
      url: "https://www.twitter.com/AnfibiaCreativa",
      linkType: "Twitter",
      title: "Twitter",
    },
    sessions: [],
  },
  {
    id: "victor",
    speakerImage: "/images/speakers/victor-rentea.jpg",
    tagLine: "Technical trainer and coach",
    bio: "Java Champion - Technical trainer and coach",
    fullName: "Victor Rentea",
    linkedInUrl: {
      url: "https://www.linkedin.com/in/victor-rentea-trainer",
      linkType: "LinkedIn",
      title: "LinkedIn",
    },
    twitterUrl: {
      url: "https://www.twitter.com/victorRentea",
      linkType: "Twitter",
      title: "Twitter",
    },
    sessions: [],
  },
];
