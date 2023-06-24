import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { ROUTE_SPEAKER_INFO } from "../../constants/routes";
import { Router } from "react-router-dom";
import SpeakerInformation from "./SpeakerInformation";

describe("Speakers activities component", () => {
  it("renders component correctly", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_SPEAKER_INFO);
    render(
      <React.Suspense>
        <Router history={history}>
          <SpeakerInformation />
        </Router>
      </React.Suspense>
    );
    const headingElement = screen.getByText("Speakers activities plan");
    expect(headingElement).toBeInTheDocument();
  });
});
