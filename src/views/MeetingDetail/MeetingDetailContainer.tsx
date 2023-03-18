import { Color } from "../../styles/colors";
import React, { FC } from "react";
import NotFoundError from "../../components/NotFoundError/NotFoundError";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import conferenceData from "../../data/2023.json";
import { sessionAdapter, useFetchTalksById } from "../Talks/UseFetchTalks";
import MeetingDetail from "./MeetingDetail";
import * as Sentry from "@sentry/react";

const StyledContainer = styled.div`
  background-color: ${Color.WHITE};
`;
const MeetingDetailContainer: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data } = useFetchTalksById(id);

  React.useEffect(() => {
    document.title = `${data?.at(0)?.title} - DevBcn - ${
      conferenceData.edition
    }`;
  }, [data]);

  if (error) {
    Sentry.captureException(error);
  }

  return (
    <StyledContainer>
      <SectionWrapper color={Color.WHITE} marginTop={4}>
        {isLoading && <h2>Loading</h2>}
        {!isLoading && data ? (
          <MeetingDetail meeting={sessionAdapter(data?.at(0))} />
        ) : (
          <NotFoundError message="Session" />
        )}
      </SectionWrapper>
    </StyledContainer>
  );
};

export default MeetingDetailContainer;
