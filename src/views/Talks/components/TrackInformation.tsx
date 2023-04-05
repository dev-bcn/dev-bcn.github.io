import React, { FC, useMemo } from "react";
import { TalkCard } from "./TalkCard";
import { IGroup } from "../Talk.types";
import { StyledSessionSection, StyledTrackInfo } from "../Talks.style";

interface TrackInfoProps {
  track: IGroup;
}

const useGenerateAnchorName = (trackName: string) => {
  const visibleTodos = useMemo(() => {
    return trackName
      .split(/\s+/)
      .map((word) => word.replace(/,$/, "").toLowerCase());
  }, [trackName]);
  return visibleTodos[0];
};

const TrackInformation: FC<TrackInfoProps> = ({ track }) => {
  // eslint-disable-next-line no-console
  console.log(`Track information ${track.groupName} rendered`);
  const anchorName = useGenerateAnchorName(track.groupName);

  return (
    <div style={{ marginLeft: "40px" }} className="track-information">
      <StyledTrackInfo id={anchorName}>{track.groupName}</StyledTrackInfo>
      <StyledSessionSection>
        {Array.isArray(track.sessions) &&
          track.sessions.map((session) => (
            <TalkCard talk={session} key={session.id} index={session.id} />
          ))}
      </StyledSessionSection>
    </div>
  );
};

export default React.memo(TrackInformation);
