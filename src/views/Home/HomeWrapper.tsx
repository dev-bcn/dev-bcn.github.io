import {BIG_BREAKPOINT} from "../../constants/BreakPoints";
import React, {FC} from "react";
import Faqs from "./components/Faqs/Faqs";
import Home from "./components/Home/Home";
import Sponsors from "./components/Sponsors/Sponsors";
import styled from "styled-components";
import conferenceData from "../../data/2025.json";
import {useLocation} from "react-router";

import SpeakersCarousel from "../../components/Swiper/SpeakersCarousel";
import {ROUTE_SPEAKERS} from "../../constants/routes";
import {useDocumentTitleUpdater} from "../../hooks/useDocumentTitleUpdate";

const StyledContainer = styled.div`
    padding-bottom: 10rem;

    @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
        padding-bottom: 20rem;
    }
`;

const HomeWrapper: FC<React.PropsWithChildren<unknown>> = () => {
    const {hash} = useLocation();

    React.useEffect(() => {
        if (hash != null && hash !== "") {
            const scroll = document.getElementById(hash.substring(1));
            scroll?.scrollIntoView();
        }
    }, [hash]);

    useDocumentTitleUpdater("Home", conferenceData?.edition ?? "2025");

    return (
        <StyledContainer id="home-wrapper">
            <Home/>
            <Faqs/>
            {conferenceData?.carrousel.enabled && (
                <SpeakersCarousel
                    sessionizeUrl={conferenceData.sessionizeUrl}
                    speakersLink={ROUTE_SPEAKERS}
                />
            )}
            <Sponsors/>
        </StyledContainer>
    );
};

export default HomeWrapper;
