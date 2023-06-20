import { fireEvent, render, screen } from "@testing-library/react";
import { Supporters } from "./Supporters";
import { createMemoryHistory } from "history";
import { ROUTE_HOME } from "../../../../constants/routes";
import React from "react";
import { Router } from "react-router-dom";
import { useWindowSize } from "react-use";

jest.mock("react-use", () => ({
  useWindowSize: jest.fn(),
}));

describe("Supporters", () => {
  beforeEach(() => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: 1024 }); // Mock window width for testing
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("renders component with supporters", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <Supporters />
        </Router>
      </React.Suspense>
    );

    expect(screen.getByTestId("supporters")).toBeInTheDocument();
    expect(screen.getByText("SUPPORTERS")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(5);
  });

  it("applies hover styles on mouse enter", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <Supporters />
        </Router>
      </React.Suspense>
    );
    const supportersElement = screen.getByTestId("supporters");

    fireEvent.mouseEnter(supportersElement);

    expect(supportersElement).toHaveClass("SponsorItem");
    expect(screen.getByText("SUPPORTERS")).toHaveStyle(
      "color: rgb(255, 252, 249)"
    );
  });

  it("removes hover styles on mouse leave", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <Supporters />
        </Router>
      </React.Suspense>
    );
    const supportersElement = screen.getByTestId("supporters");

    fireEvent.mouseEnter(supportersElement);
    fireEvent.mouseLeave(supportersElement);

    expect(supportersElement).not.toHaveClass("hovered");
    expect(screen.getByText("SUPPORTERS")).toHaveStyle("color: rgb(0, 36, 84)");
  });

  // Add more test cases as needed
});
