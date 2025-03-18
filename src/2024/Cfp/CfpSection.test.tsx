import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CfpSection2024 from "./CfpSection2024";
import conferenceData from "../../data/2024.json";
import { data } from "./CfpData";

describe("CfpSection", () => {
  it("sets document title on mount", () => {
    render(<CfpSection2024 />);
    expect(document.title).toBe(
      `CFP Committee — DevBcn - Barcelona Developers Conference — ${conferenceData.edition}`,
    );
  });

  it("renders TitleSection with correct props", () => {
    render(<CfpSection2024 />);
    expect(screen.getByText(/CFP Committee/)).toBeInTheDocument();
    expect(screen.getByText(/We're excited to announce/)).toBeInTheDocument();
  });

  it("renders a CfpTrackComponent for each track in data", () => {
    render(<CfpSection2024 />);
    data.forEach((track) => {
      expect(screen.getByText(track.name)).toBeInTheDocument();
    });
  });
});
