import { createMemoryHistory } from "history";
import { ROUTE_ATTENDEE } from "../../constants/routes";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import AttendeeInformation from "./AttendeeInformation";

describe("Attendee information component", () => {
  it("renders component correctly", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_ATTENDEE);
    render(
      <React.Suspense>
        <Router history={history}>
          <AttendeeInformation />
        </Router>
      </React.Suspense>
    );
    const headingElement = screen.getByText("Attendee information");
    expect(headingElement).toBeInTheDocument();
  });
  it("renders pre-party sponsor correctly", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_ATTENDEE);
    render(
      <React.Suspense>
        <Router history={history}>
          <AttendeeInformation />
        </Router>
      </React.Suspense>
    );
    const headingElement = screen.getByAltText("Azul");
    expect(headingElement).toBeInTheDocument();
  });
});
