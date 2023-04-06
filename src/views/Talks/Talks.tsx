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
import { useFetchTalks } from "./UseFetchTalks";
import styled from "styled-components";
import * as Sentry from "@sentry/react";
import { IGroup } from "./Talk.types";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "../../styles/theme.css";
import "primereact/resources/primereact.min.css";

export const StyledSessionSection = styled.section``;

interface TrackInfo {
  name: string;
  code?: string;
}

const useSessionStorage = (key: string) => {
  return sessionStorage.getItem(key);
};

const Talks: FC = () => {
  //region Initialization
  const sessionSelectedGroupCode = useSessionStorage("selectedGroupCode");
  const sessionSelectedGroupName = useSessionStorage("selectedGroupName");

const Talks: FC = () => {
  const [selectedGroupId, setSelectedGroupId] =
    React.useState<TrackInfo | null>();

  const { isLoading, error, data } = useFetchTalks();
  //endregion

  if (error) {
    Sentry.captureException(error);
  }

  const dropDownOptions: TrackInfo[] = [
    {
      name: "All Tracks",
      code: undefined,
    },
    ...data.map((group) => ({
      code: group.groupId.toString(),
      name: group.groupName,
    })),
  ];

  const filteredTalks: IGroup[] =
    selectedGroupId !== null && selectedGroupId?.code !== undefined
      ? data.filter(
          (talk) => talk.groupId.toString() === selectedGroupId.code
        )
      : data;

  // eslint-disable-next-line no-console
  console.log(` selected group id: ${selectedGroupId?.code}`);
  // eslint-disable-next-line no-console
  console.log(` filtered talks: ${filteredTalks.length}`);
  // eslint-disable-next-line no-console
  console.log(` merged talks: ${data.length}`);

  React.useEffect(() => {
    document.title = `Talks - DevBcn - ${conferenceData.edition}`;
    if (
      sessionSelectedGroupCode !== "" &&
      sessionSelectedGroupCode !== null &&
      sessionSelectedGroupName !== null &&
      sessionSelectedGroupName !== ""
    ) {
      // eslint-disable-next-line no-console
      console.log(
        `== initial load == ${sessionSelectedGroupCode} ${sessionSelectedGroupName}`
      );
      setSelectedGroupId({
        name: sessionSelectedGroupName,
        code: sessionSelectedGroupCode,
      });
    }
  }, [sessionSelectedGroupCode, sessionSelectedGroupName]);
  const onChangeSelectedTrack = (e: DropdownChangeEvent) => {
    setSelectedGroupId(e.value);
    sessionStorage.setItem("selectedGroupCode", e.value.code);
    sessionStorage.setItem("selectedGroupName", e.value.name);
  };
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
          {data && data?.length === 0 && (
            <p style={{ color: Color.WHITE, textAlign: "center" }}>
              No talks selected yet. Keep in touch in our social media for
              upcoming announcements
            </p>
          )}
          {data && Array.isArray(data) && (
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
