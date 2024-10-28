import React from "react";
import {cleanup, render, screen} from "@testing-library/react";
import Kcd from "./Kcd";

// Mock the useWindowSize hook and data
jest.mock("react-use", () => ({
  useWindowSize: jest.fn(),
}));

jest.mock("data/2024.json", () => ({
  edition: "2024",
}));

describe("Kcd Component", () => {
  afterEach(cleanup);

  it("renders the component", () => {
    require("react-use").useWindowSize.mockReturnValue({ width: 1280 }); // Mock window size
    render(<Kcd />);
    expect(
      screen.getByText("Kubernetes Community Days - Barcelona"),
    ).toBeInTheDocument();
  });

  // Test for conditional rendering
  it("conditionally renders elements based on window size", () => {
    require("react-use").useWindowSize.mockReturnValue({ width: 800 }); // Mock window size
    render(<Kcd />);
    expect(screen.getByAltText("LessThanBlueWhiteIcon")).toBeInTheDocument();
    expect(screen.getByAltText("MoreThanBlue")).toBeInTheDocument();
  });
});
