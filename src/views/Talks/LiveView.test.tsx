import LiveView from "./LiveView";
import React from "react";
import {
  renderWithQueryClientAndRouter,
  screen,
} from "../../utils/testing/testUtils";

describe("Live view component", () => {
  it("renders without crashing", () => {
    renderWithQueryClientAndRouter(<LiveView />);
    const titleElement = screen.getByText(/Live Schedule/);
    expect(titleElement).toBeInTheDocument();
  });
});
