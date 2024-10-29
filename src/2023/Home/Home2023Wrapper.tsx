import {BIG_BREAKPOINT} from "src/constants/BreakPoints";
import React, {FC} from "react";
import Home from "./components/Home/Home";
import Sponsors from "./components/Sponsors/Sponsors";
import styled from "styled-components";
import {edition} from "src/data/2023";
import {useLocation} from "react-router-dom";
import Faqs from "src/views/Home/components/Faqs/Faqs";
import SpeakersCarousel
    from "src/views/Home/components/SpeakersCarousel/SpeakersCarousel";

const StyledContainer = styled.div`
    padding-bottom: 10rem;

    @media only screen and (max-width: ${BIG_BREAKPOINT}px) {
        padding-bottom: 20rem;
    }
`;

export const Home2023Wrapper: FC<React.PropsWithChildren> = () => {
    const {hash} = useLocation();

    React.useEffect(() => {
        localStorage.setItem("edition", edition.edition);
        document.title = `Home - DevBcn - ${edition.edition}`;
        if (hash != null && hash !== "") {
            const scroll = document.getElementById(hash.substring(1));
            scroll?.scrollIntoView();
        }
    }, [hash]);
    return (
        <StyledContainer id="home-wrapper">
            <Home/>
            <Faqs/>
            <SpeakersCarousel edition={edition.edition}
                              carrouselEnabled={edition.carrousel.enabled}
                              apiUrl={edition.speakerApi}/>
            <Sponsors/>
        </StyledContainer>
    );
};
