import type { FC } from "react";


import TrackInformation from "@components/common/TrackInformation";

import "@styles/theme.css";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import React, { useEffect, useState } from "react";

import TitleSection from "@components/SectionTitle/TitleSection";
import { SectionWrapper } from "@components/SectionWrapper/SectionWrapper";
import conferenceData from "@data/2023.json";
import { useFetchTalks } from "@hooks/useFetchTalks";
import { useSentryErrorReport } from "@hooks/useSentryErrorReport";
import { Color } from "@styles/colors";

import {
  StyledMarginBottom,
  StyledSpeakersSection,
  StyledTitleContainer,
  StyledTitleIcon,
  StyledWaveContainer,
} from "./Talks.style";

import type { DropdownChangeEvent } from "primereact/dropdown";

interface TrackInfo {
  name: string;
  code?: string;
}

const Talks2023: FC<React.PropsWithChildren<unknown>> = () => {
  const [selectedGroupId, setSelectedGroupId] = useState<TrackInfo | null>(
    null,
  );
  const { isLoading, error, data } = useFetchTalks("2023");

  useEffect(() => {
    const sessionSelectedGroupCode =
      sessionStorage.getItem("selectedGroupCode");
    const sessionSelectedGroupName =
      sessionStorage.getItem("selectedGroupName");

    document.title = `Talks - DevBcn - ${conferenceData.edition}`;

    if (sessionSelectedGroupCode && sessionSelectedGroupName) {
      setSelectedGroupId({
        name: sessionSelectedGroupName,
        code: sessionSelectedGroupCode,
      });
    }
  }, []);

  useSentryErrorReport(error);

  // Helper function to remove text between parentheses
  const removeParenthesesContent = (text: string): string => {
    return text.replace(/\s*\([^)]*\)/g, "");
  };

  const dropDownOptions = [
    { name: "All Tracks", code: undefined },
    ...(data !== undefined
      ? data.flatMap((group) => ({
        code: group.groupId.toString(),
        name: removeParenthesesContent(group.groupName),
      }))
      : []),
  ];

  const filteredTalks = selectedGroupId?.code
    ? data?.filter((talk) => talk.groupId.toString() === selectedGroupId.code)
    : data;

  const onChangeSelectedTrack = (e: DropdownChangeEvent) => {
    const value = e.value;
    setSelectedGroupId(value || null);
    sessionStorage.setItem("selectedGroupCode", value?.code || "");
    sessionStorage.setItem("selectedGroupName", value?.name || "");
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
        <section>
          {isLoading && <h1>Loading </h1>}
          {data && data?.length === 0 && (
            <p style={{ color: Color.WHITE, textAlign: "center" }}>
              No talks selected yet. Keep in touch in our social media for
              upcoming announcements
            </p>
          )}
          {filteredTalks && Array.isArray(filteredTalks) && (
            <>
              <div style={{ margin: "10px" }}>
                <label htmlFor="group-id-select">
                  <strong>Filter by Track: </strong>
                </label>
                <Dropdown
                  value={selectedGroupId}
                  onChange={onChangeSelectedTrack}
                  options={dropDownOptions}
                  placeholder="Select Track"
                  optionLabel="name"
                  className="w-full md:w-14rem"
                />
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
          )}
        </section>
        <StyledMarginBottom />
      </SectionWrapper>
    </>
  );
};

export default Talks2023;
