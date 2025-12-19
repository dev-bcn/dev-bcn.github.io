import { render, screen } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";
import { data } from "./CfpData";
import CfpSection from "./CfpSection";
import conferenceData from "../../data/2026.json";

describe("CfpSection", () => {
  it("sets document title on mount", () => {
    render(<CfpSection />);
    expect(document.title).toBe(
      `CFP Committee — DevBcn - Barcelona Developers Conference — ${conferenceData.edition}`,
    );
  });

  it.skip("renders TitleSection with correct props", () => {
    render(<CfpSection />);
    expect(screen.getByText(/CFP Committee/)).toBeInTheDocument();
    expect(screen.getByText(/We're excited to announce/)).toBeInTheDocument();
  });

  it.skip("renders a CfpTrackComponent for each track in data", () => {
    render(<CfpSection />);
    data.forEach((track) => {
      expect(screen.getByText(track.name)).toBeInTheDocument();
    });
  });
});
