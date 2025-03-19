import React, {FC, useEffect, useState} from "react";
import LessThanDarkBlueIcon from "../../assets/images/LessThanDarkBlueIcon.svg";
import MoreThanBlueIcon from "../../assets/images/MoreThanBlueIcon.svg";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import TitleSection from "../../components/SectionTitle/TitleSection";
import {Color} from "../../styles/colors";
import conferenceData from "../../data/2024.json";

import {useFetchTalks} from "./UseFetchTalks";
import * as Sentry from "@sentry/react";
import {Dropdown, DropdownChangeEvent} from "primereact/dropdown";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "../../styles/theme.css";
import {
    StyledMarginBottom,
    StyledSpeakersSection,
    StyledTitleContainer,
    StyledTitleIcon,
    StyledWaveContainer
} from "../../views/Talks/Talks.style";
import TrackInformation from "../../components/Talk/TrackInformation";

interface TrackInfo {
    name: string;
    code?: string;
}

const Talks2024: FC<React.PropsWithChildren<unknown>> = () => {
    const [selectedGroupId, setSelectedGroupId] = useState<TrackInfo | null>(
        null,
    );
    const {isLoading, error, data} = useFetchTalks();

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

    if (error) {
        Sentry.captureException(error);
    }

    const dropDownOptions = [
        {name: "All Tracks", code: undefined},
        ...(data !== undefined
            ? data.flatMap((group) => ({
                code: group.groupId.toString(),
                name: group.groupName,
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
                        <StyledTitleIcon src={LessThanDarkBlueIcon}/>
                        <TitleSection
                            title="TALKS"
                            subtitle="Speakers coming from all corners of the world join us to
              share their experience in various technologies and to
              invite everyone to participate in Open Source
              Technologies and in the JCP."
                            color={Color.WHITE}
                        />
                        <StyledTitleIcon src={MoreThanBlueIcon}/>
                    </StyledTitleContainer>
                </StyledSpeakersSection>
            </SectionWrapper>
            <StyledWaveContainer>
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{height: "100%", width: "100%"}}
                >
                    <path
                        d="M-3.72,102.14 C177.43,5.44 270.54,146.54 508.12,51.80 L500.00,150.00 L0.00,150.00 Z"
                        style={{stroke: "none", fill: "#4798CA"}}
                    ></path>
                </svg>
            </StyledWaveContainer>
            <SectionWrapper color={Color.LIGHT_BLUE} marginTop={1}>
                <section>
                    {isLoading && <h1>Loading </h1>}
                    {conferenceData.hideTalks ? (
                        <p style={{color: Color.WHITE, textAlign: "center"}}>
                            No talks selected yet. Keep in touch in our social
                            media for
                            upcoming announcements
                        </p>
                    ) : (
                        filteredTalks &&
                        Array.isArray(filteredTalks) && (
                            <>
                                <div style={{margin: "10px"}}>
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
                                    <TrackInformation key={track.groupId}
                                                      track={track}/>
                                ))}
                            </>
                        )
                    )}
                </section>
                <StyledMarginBottom/>
            </SectionWrapper>
        </>
    );
};

export default Talks2024;
