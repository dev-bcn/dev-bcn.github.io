import {BIG_BREAKPOINT} from "../../constants/BreakPoints";
import React, {FC} from "react";
import Faqs from "./components/Faqs/Faqs";
import HomeWithKcd from "./components/Home/HomeWithKcd";
import SpeakersCarousel from "./components/SpeakersCarousel/SpeakersCarousel";
import Sponsors from "./components/Sponsors/Sponsors";
import styled from "styled-components";

import {useLocation} from "react-router-dom";
import {useEventEdition} from "./UseEventEdition";

const StyledContainer = styled.div`
    padding-bottom: 10rem;

    @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
        padding-bottom: 20rem;
    }
`;

export interface Edition {
    actionButtons: boolean;
    carrousel: Carrousel;
    cfp: Cfp;
    diversity: boolean;
    edition: string;
    email: string;
    endDay: Date;
    facebook: string;
    github: string;
    hideSpeakers: boolean;
    hideTalks: boolean;
    jobOffers: Carrousel;
    linkedin: string;
    openFeedback: {
        enabled: boolean;
        url: string;
    };
    schedule: Carrousel;
    scheduleApi: string;
    showInfoButtons: boolean;
    speakerApi: string;
    startDay: Date;
    talkApi: string;
    tickets: Cfp;
    title: string;
    trackNumber: string;
    tracks: string;
    twitter: string;
    youtube: string;
}

export interface Carrousel {
    enabled: boolean;
}

export interface Cfp {
    startDay: Date;
    endDay: Date;
    link: string;
}

export const HomeWrapper: FC<React.PropsWithChildren<unknown>> = () => {
    const {hash} = useLocation();

    const {edition} = useEventEdition();
    React.useEffect(() => {
        document.title = `Home - ${edition?.title} - ${edition?.edition}`;
        if (hash != null && hash !== "") {
            const scroll = document.getElementById(hash.substring(1));
            scroll?.scrollIntoView();
        }
    }, [hash, edition]);

    return (
        <StyledContainer id="home-wrapper">
            {/* 2025 edition */}
            <HomeWithKcd/>
            {/* todo create new interface for this*/}
            <Faqs/>
            {edition?.carrousel.enabled && <SpeakersCarousel edition="2025"/>}
            <Sponsors/>
        </StyledContainer>
    );
};
