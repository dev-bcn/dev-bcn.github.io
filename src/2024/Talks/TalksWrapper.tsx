import React from "react";

import { ROUTE_MEETING_DETAIL_PLAIN } from "@constants/routes";
import data2024 from "@data/2024.json";
import Talks from "@views/Talks/Talks";

import type { TopRatedTalk, TopTalkWithSpeaker } from "@/types/sessions";
import type { FC } from "react";

const topTenTalks: Array<TopRatedTalk> = [
  {
    id: "df057475-0b6a-4fab-8e0d-c5576230dd5c",
    speaker: "Victor Rentea",
    talk: "Top 10 Rest API Design Falls",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "838798"),
  },
  {
    id: "d32cdd87-3c7d-47bb-98ec-b255d1e4b9ba",
    speaker: "Laura Perea",
    talk: "GenAI among us",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "945091"),
  },
  {
    id: "eb3852c1-acf8-42a6-988d-365fad2a5668",
    speaker: "Brian Vermeer",
    talk: "Don't Get Burned! Secure Coding Essentials in Java to protect your application",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "851481"),
  },
  {
    id: "625b53c9-edea-4e47-a5ba-2ee661c539e3",
    speaker: "Álvaro Sánchez-Mariscal",
    talk: "Revealing the magic behind Java annotations",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "843845"),
  },
  {
    id: "7b1c534c-39a5-4398-93e5-626010f00198",
    speaker: "Alexander Chatzizacharias",
    talk: "What is multimodal RAG, and can we build a village with it?",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "832774"),
  },
  {
    id: "ebab2b92-503f-4baa-b3ab-064865853223",
    speaker: "Bert Jan Schrijver",
    talk: "Generic or Specific? Making sensible software design decisions",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "827688"),
  },
  {
    id: "11554c51-dc18-407b-b7b4-b8ad2f925b2a",
    speaker: "Marc Nuri",
    talk: "Model Context Protocol Servers 101: Unlocking the Power of AI",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "874255"),
  },
  {
    id: "10937eaf-a0da-48c9-82d6-8711ca26fb16",
    speaker: "Andres Almiray",
    talk: "Maven Productivity Tips",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "860854"),
  },
  {
    id: "5ce27637-12b4-4dfe-830d-166d88c837ad",
    speaker: "Milen Dyankov",
    talk: "AI for Java Developers - From Buzzword to Code",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "873844"),
  },
  {
    id: "2aea7252-6822-4f42-a9d4-fa830f29df40",
    speaker: "Rijo Sam",
    talk: "Java Beyond Frameworks: Avoiding Lock-In with Agnostic Design",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "875233"),
  },
];

const topThreeTalks: Array<TopTalkWithSpeaker> = [
  {
    id: "df057475-0b6a-4fab-8e0d-c5576230dd5c",
    award: "Funniest talk",
    speaker: "Victor Rentea",
    speakerImage:
      "https://sessionize.com/image/2fde-400o400o1-NVbZAJzrFZpcRjEe5khxjo.png",
    talk: "Top 10 Rest API Design Falls",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "838798"),
  },
  {
    id: "d32cdd87-3c7d-47bb-98ec-b255d1e4b9ba",
    speaker: "Laura Perea",
    award: "Best Rated",
    speakerImage:
      "https://sessionize.com/image/8df6-400o400o1-LKJE9Ej5xvBK92FtxJDo6U.png",
    talk: "GenAI among us",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "945091"),
  },
  {
    id: "11554c51-dc18-407b-b7b4-b8ad2f925b2a",
    speaker: "Marc Nuri",
    award: "Most original",
    speakerImage:
      "https://sessionize.com/image/3a9a-400o400o1-sJBQfR5Ki5BGPEDG8GQgKM.jpg",
    talk: "Model Context Protocol Servers 101: Unlocking the Power of AI",
    link: ROUTE_MEETING_DETAIL_PLAIN.replace(":id", "874255"),
  },
];

export const TalksWrapper: FC = () => {
  return (
    <Talks
      conferenceConfig={data2024}
      topTenTalks={topTenTalks}
      topThreeTalks={topThreeTalks}
    />
  );
};

export default TalksWrapper;
