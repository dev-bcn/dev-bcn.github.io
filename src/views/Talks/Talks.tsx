import React, { FC } from "react";
import LessThanDarkBlueIcon from "../../assets/images/LessThanDarkBlueIcon.svg";
import MoreThanBlueIcon from "../../assets/images/MoreThanBlueIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import TitleSection from "../../components/SectionTitle/TitleSection";
import { Color } from "../../styles/colors";
import conferenceData from "../../data/2023.json";
import {
  StyledMarginBottom,
  StyledSpeakersSection,
  StyledTitleContainer,
  StyledTitleIcon,
  StyledWaveContainer,
} from "./Talks.style";
import TrackInformation from "./components/TrackInformation";
import { useFetchTalks, useHardCodedTalks } from "./UseFetchTalks";
import styled from "styled-components";
import * as Sentry from "@sentry/react";
import { IGroup } from "./Talk.types";

export const StyledSessionSection = styled.section``;

interface TrackInfo {
  id: number;
  name: string;
}

const Talks: FC = () => {
  const sessionSelectedGroupId = sessionStorage.getItem("selectedGroupId");

  const { data } = useHardCodedTalks();
  const [selectedGroupId, setSelectedGroupId] = React.useState<
    number | undefined
  >();

  const { isLoading, error, data: apiTalks } = useFetchTalks();

  const mergedTalks: IGroup[] = [...(data ?? []), ...(apiTalks ?? [])];

  const handleChangeGroup = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGroupId(Number.parseInt(event.target.value));
    const SESSION_SELECTED_GROUP_ID = "selectedGroupId";
    sessionStorage.setItem(SESSION_SELECTED_GROUP_ID, event.target.value);
  };

  if (error) {
    Sentry.captureException(error);
  }

  const groupMap: TrackInfo[] = mergedTalks.map((group) => {
    return {
      id: group.groupId,
      name: group.groupName,
    };
  });

  const filteredTalks = mergedTalks.filter(
    (talk) => !selectedGroupId || talk.groupId === selectedGroupId
  );
  React.useEffect(() => {
    document.title = `Talks - DevBcn - ${conferenceData.edition}`;
    if (sessionSelectedGroupId !== "" && sessionSelectedGroupId !== null) {
      setSelectedGroupId(Number.parseInt(sessionSelectedGroupId));
    }
  }, [sessionSelectedGroupId]);
  return (
    <>
      <SectionWrapper color={Color.DARK_BLUE} marginTop={5}>
        <StyledSpeakersSection>
          <StyledTitleContainer>
            <StyledTitleIcon src={LessThanDarkBlueIcon} />
            <TitleSection
              title="TALKS"
              subtitle="Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP."
              color={Color.WHITE}
            />
            <StyledTitleIcon src={MoreThanBlueIcon} />
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
        <StyledSessionSection>
          {isLoading && <h1>Loading </h1>}
          {mergedTalks && mergedTalks?.length === 0 && (
            <p style={{ color: Color.WHITE, textAlign: "center" }}>
              No talks selected yet. Keep in touch in our social media for
              upcoming announcements
            </p>
          )}
          {mergedTalks && Array.isArray(mergedTalks) && (
            <>
              <div style={{ margin: "10px" }}>
                <label htmlFor="group-id-select">
                  <strong>Filter by Track:</strong>
                </label>
                <select
                  id="group-id-select"
                  value={selectedGroupId}
                  onChange={handleChangeGroup}
                  style={{
                    padding: "5px",
                    color: "#002454",
                    backgroundColor: "#4798CA",
                    border: "none",
                  }}
                >
                  <option value="">All tracks</option>
                  {groupMap.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </div>
              {filteredTalks.map((track) => (
                <TrackInformation key={track.groupId} track={track} />
              ))}
            </>
          )}
        </StyledSessionSection>
        <StyledMarginBottom />
      </SectionWrapper>
    </>
  );
};

export default Talks;
