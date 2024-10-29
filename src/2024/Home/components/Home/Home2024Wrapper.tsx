import React, {FC} from "react";
import {edition} from "src/data/2024";

import {useLocation, useParams} from "react-router-dom";
import Faqs from "src/views/Home/components/Faqs/Faqs";
import SpeakersCarousel
    from "src/views/Home/components/SpeakersCarousel/SpeakersCarousel";
import Sponsors from "src/views/Home/components/Sponsors/Sponsors";
import Home from "./Home";
import {
    StyledContainer
} from "../../../../views/Home/components/Home/Style.Home";

export const Home2024Wrapper: FC<React.PropsWithChildren<unknown>> = () => {
    const {hash} = useLocation();
    let {year} = useParams();
    //eslint-disable-next-line no-console
    console.log("YEAR", year);

    React.useEffect(() => {
        document.title = `Home - ${edition?.title} - ${edition?.edition}`;
        if (hash != null && hash !== "") {
            const scroll = document.getElementById(hash.substring(1));
            scroll?.scrollIntoView();
        }
    }, [hash]);

    return (
        <StyledContainer id="home-wrapper">
            <Home/>
            <Faqs/>
            {edition?.carrousel.enabled && (
                <SpeakersCarousel edition={edition.edition}
                                  carrouselEnabled={edition.carrousel.enabled}
                                  apiUrl={edition.speakerApi}/>
            )}
            <Sponsors/>
        </StyledContainer>
    );
};
