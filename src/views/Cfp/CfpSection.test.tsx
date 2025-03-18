import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import CfpSection from "./CfpSection";
import conferenceData from "../../data/2025.json";
import {data} from "./CfpData";

describe("CfpSection", () => {
  it("sets document title on mount", () => {
    render(<CfpSection />);
    expect(document.title).toBe(
      `CFP Committee — DevBcn - Barcelona Developers Conference — ${conferenceData.edition}`,
    );
  });

  it("renders TitleSection with correct props", () => {
    render(<CfpSection />);
    expect(screen.getByText(/CFP Committee/)).toBeInTheDocument();
    expect(screen.getByText(/We're excited to announce/)).toBeInTheDocument();
  });

  it("renders a CfpTrackComponent for each track in data", () => {
    render(<CfpSection />);
    data.forEach((track) => {
      expect(screen.getByText(track.name)).toBeInTheDocument();
    });
  });
});
