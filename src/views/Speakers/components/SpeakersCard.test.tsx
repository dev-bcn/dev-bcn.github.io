import React from "react";
import { screen } from "@testing-library/react";
import { SpeakerCard, getSpeakerRoute } from "./SpeakersCard";
import { createMockSpeaker, renderWithRouter } from "../../../utils/testing/speakerTestUtils";
import { ROUTE_2023_SPEAKER_DETAIL, ROUTE_2024_SPEAKER_DETAIL, ROUTE_SPEAKER_DETAIL } from "../../../constants/routes";

describe("SpeakerCard", () => {
  const mockSpeaker = createMockSpeaker();
  
  it("renders speaker information correctly", () => {
    renderWithRouter(<SpeakerCard speaker={mockSpeaker} year="2024" />);
    
    // Check that the speaker's name and tagline are displayed
    expect(screen.getByText(mockSpeaker.fullName)).toBeInTheDocument();
    expect(screen.getByText(mockSpeaker.tagLine)).toBeInTheDocument();
    
    // Check that the image is rendered with the correct src
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockSpeaker.speakerImage);
  });
  
  it("creates a link to the correct speaker detail page for 2024", () => {
    renderWithRouter(<SpeakerCard speaker={mockSpeaker} year="2024" />);
    
    // Check that the link points to the correct route
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `${ROUTE_2024_SPEAKER_DETAIL}/${mockSpeaker.id}`);
  });
  
  it("creates a link to the correct speaker detail page for 2023", () => {
    renderWithRouter(<SpeakerCard speaker={mockSpeaker} year="2023" />);
    
    // Check that the link points to the correct route
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `${ROUTE_2023_SPEAKER_DETAIL}/${mockSpeaker.id}`);
  });
  
  it("creates a link to the default speaker detail page for other years", () => {
    renderWithRouter(<SpeakerCard speaker={mockSpeaker} year="2022" />);
    
    // Check that the link points to the correct route
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `${ROUTE_SPEAKER_DETAIL}/${mockSpeaker.id}`);
  });
});

describe("getSpeakerRoute", () => {
  it("returns the 2023 route for year 2023", () => {
    expect(getSpeakerRoute("2023")).toBe(ROUTE_2023_SPEAKER_DETAIL);
  });
  
  it("returns the 2024 route for year 2024", () => {
    expect(getSpeakerRoute("2024")).toBe(ROUTE_2024_SPEAKER_DETAIL);
  });
  
  it("returns the default route for other years", () => {
    expect(getSpeakerRoute("2022")).toBe(ROUTE_SPEAKER_DETAIL);
    expect(getSpeakerRoute("")).toBe(ROUTE_SPEAKER_DETAIL);
  });
});