import {Color} from "../../styles/colors";

import React, {FC} from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import SpeakerDetail from "./SpeakerDetail";
import {useParams} from "react-router-dom";
import conferenceData from "../../data/2024.json";
import {useFetchSpeakers} from "../Speakers/UseFetchSpeakers";
import * as Sentry from "@sentry/react";
import {StyledContainer} from "../../views/SpeakerDetail/Speaker.style";
import {StyledWaveContainer} from "../../views/Talks/Talks.style";

const SpeakerDetailContainer: FC<React.PropsWithChildren<unknown>> = () => {
    const {id} = useParams<{ id: string }>();

    const {isLoading, error, data} = useFetchSpeakers(id);

    if (error) {
        Sentry.captureException(error);
    }
    React.useEffect(() => {
        if (data) {
            document.title = `${data[0]?.fullName} - DevBcn - ${conferenceData.edition}`;
        }
    }, [id, data]);
    return (
        <StyledContainer>
            <SectionWrapper color={Color.BLUE} marginTop={4}>
                {isLoading && <h2>Loading</h2>}
                {!isLoading && data && data.length > 0 ? (
                    <SpeakerDetail speaker={data[0]}/>
                ) : (
                    "not found"
                )}
            </SectionWrapper>
            <StyledWaveContainer>
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{height: "100%", width: "100%"}}
                >
                    <path
                        d="M-8.17,75.50 C207.95,-129.75 329.85,202.80 500.27,5.45 L501.41,-5.41 L0.00,0.00 Z"
                        style={{stroke: "none", fill: "#0496ff"}}
                    ></path>
                </svg>
            </StyledWaveContainer>
        </StyledContainer>
    );
};

export default SpeakerDetailContainer;
