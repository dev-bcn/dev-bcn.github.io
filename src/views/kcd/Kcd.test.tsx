import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { useWindowSize } from "react-use";
import { vi } from "vitest";

import Kcd from "./Kcd";

// Mock the useWindowSize hook and data
vi.mock("react-use", () => ({
  useWindowSize: vi.fn(),
}));

vi.mock("../../data/2024.json", () => {
  const mockData = {
    edition: "2024",
  };
  return { default: mockData };
});

describe("Kcd Component", () => {
  afterEach(cleanup);

  it("renders the component", () => {
    vi.mocked(useWindowSize).mockReturnValue({ width: 320, height: 568 });
    render(<Kcd />);
    expect(
      screen.getByText("Kubernetes Community Days - Barcelona"),
    ).toBeInTheDocument();
  });

  // Test for conditional rendering
  it("conditionally renders icons when screen width is greater than mobile breakpoint", () => {
    // Mock a desktop width (greater than MOBILE_BREAKPOINT)
    vi.mocked(useWindowSize).mockReturnValue({ width: 1200, height: 800 });
    render(<Kcd />);
    expect(screen.getByAltText("LessThanBlueWhiteIcon")).toBeInTheDocument();
    expect(screen.getByAltText("MoreThanBlue")).toBeInTheDocument();
  });

  // Test that icons are not rendered on mobile
  it("does not render icons when screen width is less than mobile breakpoint", () => {
    // Mock a mobile width (less than MOBILE_BREAKPOINT)
    vi.mocked(useWindowSize).mockReturnValue({ width: 320, height: 568 });
    render(<Kcd />);

    // Check that the icons are not in the document
    expect(() => screen.getByAltText("LessThanBlueWhiteIcon")).toThrow();
    expect(() => screen.getByAltText("MoreThanBlue")).toThrow();
  });
});
