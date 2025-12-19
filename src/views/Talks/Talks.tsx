import type { FC } from "react";

import { Color } from "@styles/colors";

import { SelectButton } from "primereact/selectbutton";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TrackInformation from "@components/common/TrackInformation";
import TitleSection from "@components/SectionTitle/TitleSection";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import conferenceData from "@data/2025.json";
import { useFetchTalks } from "@hooks/useFetchTalks";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "@styles/theme.css";
import { useSentryErrorReport } from "@hooks/useSentryErrorReport";

import {
  StyledMarginBottom,
  StyledSpeakersSection,
  StyledTitleContainer,
  StyledTitleIcon,
  StyledWaveContainer,
} from "./Talks.style";

import type {
  TopRatedTalk,
  TopTalkWithSpeaker,
  TrackInfo,
} from "@/types/sessions";
import type { SelectButtonChangeEvent } from "primereact/selectbutton";

interface TalksProps {
  conferenceConfig?: typeof conferenceData;
  topTenTalks?: Array<TopRatedTalk>;
  topThreeTalks?: Array<TopTalkWithSpeaker>;
}

const Talks: FC<React.PropsWithChildren<TalksProps>> = ({
  conferenceConfig = conferenceData,
  topTenTalks = [],
  topThreeTalks = [],
}) => {
  const [selectedGroupId, setSelectedGroupId] = useState<TrackInfo | null>(
    null,
  );
  const { isLoading, error, data } = useFetchTalks(conferenceConfig.edition);

  useEffect(() => {
    const sessionSelectedGroupCode =
      sessionStorage.getItem("selectedGroupCode");
    const sessionSelectedGroupName =
      sessionStorage.getItem("selectedGroupName");

    document.title = `Talks - ${conferenceConfig.title} - ${conferenceConfig.edition}`;

    if (sessionSelectedGroupCode && sessionSelectedGroupName) {
      setSelectedGroupId({
        name: sessionSelectedGroupName,
        code: sessionSelectedGroupCode,
      });
    }
  }, [conferenceConfig.title, conferenceConfig.edition]);

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
          {conferenceConfig.hideTalks ? (
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
                    year={conferenceConfig.edition}
                    openFeedbackId={conferenceConfig.openFeedbackId}
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
