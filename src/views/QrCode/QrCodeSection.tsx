import { useMemo } from "react";

import conferenceData from "@data/2025.json";
import { useFetchTalks } from "@hooks/useFetchTalks";
import QrCode from "@views/QrCode/QrCode";

const QrCodeSection = () => {
  const openFeedbackId = conferenceData.openFeedbackId;
  const talks = useFetchTalks();
  const currentDateTime: Date = useMemo(() => {
    return new Date(2025, 6, 18, 10, 35, 0);
  }, []);

  return (
    <QrCode
      currentDateTime={currentDateTime}
      openFeedbackId={openFeedbackId}
      tracks={talks?.data}
    />
  );
};

export default QrCodeSection;
