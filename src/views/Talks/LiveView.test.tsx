import LiveView from "./LiveView";
import React from "react";
import { renderWithQueryClient, screen } from "../../utils/testing/testUtils";

describe("Live view component", () => {
  it("renders without crashing", () => {
    renderWithQueryClient(<LiveView />);
    const titleElement = screen.getByText(/Live Schedule/);
    expect(titleElement).toBeInTheDocument();
  });
});
