import React from "react";
import CommonTalkCard, { TalkCardProps } from "../../../components/common/TalkCard";

export type { TalkCardProps };

export const TalkCard: React.FC<React.PropsWithChildren<TalkCardProps>> = (props) => {
  return <CommonTalkCard {...props} />;
};
