import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Kcd from "./Kcd";
import { vi } from "vitest";
// Mock the useWindowSize hook and data
vi.mock("react-use", () => ({
  useWindowSize: vi.fn(),
}));

vi.mock("../../data/2024.json", () => ({
  edition: "2024",
}));

describe("Kcd Component", () => {
  afterEach(cleanup);

  it("renders the component", () => {
    vi.mocked(useWindowSize).mockReturnValueOnce({ width: 320, height: 568 });
    render(<Kcd />);
    expect(
      screen.getByText("Kubernetes Community Days - Barcelona"),
    ).toBeInTheDocument();
  });

  // Test for conditional rendering
  it("conditionally renders elements based on window size", () => {
    render(<Kcd />);
    expect(screen.getByAltText("LessThanBlueWhiteIcon")).toBeInTheDocument();
    expect(screen.getByAltText("MoreThanBlue")).toBeInTheDocument();
  });
});
