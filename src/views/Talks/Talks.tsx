import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import TitleSection from "@components/SectionTitle/TitleSection";
import { Color } from "@styles/colors";
import conferenceData from "@data/2025.json";
import {
  StyledMarginBottom,
  StyledSpeakersSection,
  StyledTitleContainer,
  StyledTitleIcon,
  StyledWaveContainer,
} from "./Talks.style";
import TrackInformation from "@components/common/TrackInformation";
import { useFetchTalks } from "@hooks/useFetchTalks";
import { SelectButton, SelectButtonChangeEvent } from "primereact/selectbutton";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "@styles/theme.css";
import { useSentryErrorReport } from "@hooks/useSentryErrorReport";
import { ROUTE_MEETING_DETAIL_PLAIN } from "@constants/routes";

interface TrackInfo {
  name: string;
  code?: string;
}

interface TopRatedTalk {
  id: string;
  speaker: string;
  talk: string;
  link: string;
}

interface TopTalkWithSpeaker extends TopRatedTalk {
  speakerImage: string;
  award: string;
}

const Talks: FC<React.PropsWithChildren<unknown>> = () => {
  const [selectedGroupId, setSelectedGroupId] = useState<TrackInfo | null>(
    null,
  );
  const { isLoading, error, data } = useFetchTalks();

  useEffect(() => {
    const sessionSelectedGroupCode =
      sessionStorage.getItem("selectedGroupCode");
    const sessionSelectedGroupName =
      sessionStorage.getItem("selectedGroupName");

    document.title = `Talks - ${conferenceData.title} - ${conferenceData.edition}`;

    if (sessionSelectedGroupCode && sessionSelectedGroupName) {
      setSelectedGroupId({
        name: sessionSelectedGroupName,
        code: sessionSelectedGroupCode,
      });
    }
  }, []);

  useSentryErrorReport(error);

  const removeParenthesesContent = (text: string): string => {
    return text?.replace(/\s*\([^)]*\)/g, "");
  };

  const trackOptions = [
    { name: "All Tracks", code: undefined },
    ...(data !== undefined
      ? data
          .flatMap((group) => ({
            code: group?.groupId?.toString(),
            name: removeParenthesesContent(group.groupName),
          }))
          .sort((a, b) => a.name.localeCompare(b.name))
      : []),
  ];

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

  const filteredTalks = selectedGroupId?.code
    ? data?.filter((talk) => talk.groupId.toString() === selectedGroupId.code)
    : data;

  const onChangeSelectedTrack = (e: SelectButtonChangeEvent) => {
    const value = e.value;
    setSelectedGroupId(value ?? null);
    sessionStorage.setItem("selectedGroupCode", value?.code ?? "");
    sessionStorage.setItem("selectedGroupName", value?.name ?? "");
  };
  return (
    <>
      <SectionWrapper color={Color.DARK_BLUE} marginTop={5}>
        <StyledSpeakersSection>
          <StyledTitleContainer>
            <StyledTitleIcon src="/images/LessThanDarkBlueIcon.svg" />
            <TitleSection
              title="TALKS"
              subtitle="Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP."
              color={Color.WHITE}
            />
            <StyledTitleIcon src="/images/MoreThanBlueIcon.svg" />
          </StyledTitleContainer>
        </StyledSpeakersSection>
      </SectionWrapper>
      <StyledWaveContainer>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#4798CA" }}
          ></path>
        </svg>
      </StyledWaveContainer>
      <SectionWrapper color={Color.LIGHT_BLUE} marginTop={1}>
        <section
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            margin: "1rem auto",
            width: "70vw",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {topThreeTalks.map((talk) => (
            <article key={talk.id} style={{ maxWidth: "256px" }}>
              <h3>{talk.award}</h3>
              <Link
                to={talk.link}
                style={{ color: Color.BLACK_BLUE, textDecoration: "none" }}
              >
                <img
                  src={talk.speakerImage}
                  alt={talk.speaker}
                  width={256}
                  style={{ borderRadius: "5%" }}
                />
                <p>
                  <strong>{talk.speaker}</strong>
                </p>
                <p>{talk.talk}</p>
              </Link>
            </article>
          ))}
        </section>
      </SectionWrapper>
      <SectionWrapper color={Color.WHITE} marginTop={1}>
        <h2>🔝 Top Ten rated talks</h2>
        <section
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            margin: "1rem auto",
            width: "70vw",
          }}
        >
          {topTenTalks.map((talk) => (
            <article key={talk.id}>
              <Link
                to={talk.link}
                style={{ color: Color.BLACK_BLUE, textDecoration: "none" }}
              >{`👉🏽 ${talk.speaker} — ${talk.talk}`}</Link>
            </article>
          ))}
        </section>
      </SectionWrapper>
      <SectionWrapper color={Color.LIGHT_BLUE} marginTop={1}>
        <section>
          {isLoading && <h1>Loading </h1>}
          {conferenceData.hideTalks ? (
            <p style={{ color: Color.WHITE, textAlign: "center" }}>
              No talks selected yet. Keep in tap in our social media for
              upcoming announcements
            </p>
          ) : (
            filteredTalks &&
            Array.isArray(filteredTalks) && (
              <>
                <div style={{ margin: "10px" }}>
                  <label htmlFor="group-id-select">
                    <strong>Filter by Track: </strong>
                  </label>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginTop: "0.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <SelectButton
                      value={selectedGroupId}
                      onChange={onChangeSelectedTrack}
                      options={trackOptions}
                      optionLabel="name"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                      itemTemplate={(option) => (
                        <div
                          style={{
                            padding: "0.5rem 1rem",
                            borderRadius: "2rem",
                            backgroundColor:
                              selectedGroupId?.code === option.code
                                ? Color.LIGHT_BLUE
                                : "transparent",
                            color:
                              selectedGroupId?.code === option.code
                                ? Color.WHITE
                                : Color.SKY_BLUE,
                            cursor: "pointer",
                          }}
                        >
                          {option.name}
                        </div>
                      )}
                    />
                  </div>
                </div>
                {filteredTalks.map((track) => (
                  <TrackInformation
                    key={track.groupId}
                    track={track}
                    year={conferenceData.edition}
                    openFeedbackId={conferenceData.openFeedbackId}
                  />
                ))}
              </>
            )
          )}
        </section>
        <StyledMarginBottom />
      </SectionWrapper>
    </>
  );
};

export default Talks;
