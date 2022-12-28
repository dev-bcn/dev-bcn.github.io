import React, { FC } from "react";
import { TalkCard } from "./TalkCard";
import { IGroup } from "../Talk.types";
import styled from "styled-components";
import { Color } from "../../../styles/colors";

interface TrackInfoProps {
  track: IGroup;
}

const StyledTrackInfo = styled.h2`
   {
    color: ${Color.DARK_BLUE};
  }
`;

const StyledSessionSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
`;

const TrackInformation: FC<TrackInfoProps> = ({ track }) => {
  return (
    <>
      <StyledTrackInfo>{track.groupName}</StyledTrackInfo>
      <StyledSessionSection>
        {Array.isArray(track.sessions) &&
          track.sessions.map((session, index) => (
            <TalkCard talk={session} key={index} index={session.id} />
          ))}
      </StyledSessionSection>
    </>
  );
};

export default TrackInformation;
