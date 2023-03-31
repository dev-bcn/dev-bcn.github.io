import React, { FC } from "react";
import { TalkCard } from "./TalkCard";
import { IGroup } from "../Talk.types";
import { StyledSessionSection, StyledTrackInfo } from "../Talks.style";

interface TrackInfoProps {
  track: IGroup;
}

const TrackInformation: FC<TrackInfoProps> = ({ track }) => {
  return (
    <div style={{ marginLeft: "40px" }} className="track-information">
      <StyledTrackInfo>{track.groupName}</StyledTrackInfo>
      <StyledSessionSection>
        {Array.isArray(track.sessions) &&
          track.sessions.map((session, index) => (
            <TalkCard talk={session} key={index} index={session.id} />
          ))}
      </StyledSessionSection>
    </div>
  );
};

export default TrackInformation;
