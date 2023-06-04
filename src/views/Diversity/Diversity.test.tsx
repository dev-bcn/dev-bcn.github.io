import React from "react";
import { render, screen } from "@testing-library/react";
import Diversity from "./Diversity";
import { createMemoryHistory } from "history";
import { ROUTE_HOME } from "../../constants/routes";
import { Router } from "react-router-dom";

describe("Diversity component", () => {
  it("renders heading correctly", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense>
        <Router history={history}>
          <Diversity />
        </Router>
      </React.Suspense>
    );
    const headingElement = screen.getByText("Diversity Sponsorship");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders paragraph text correctly", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense>
        <Router history={history}>
          <Diversity />
        </Router>
      </React.Suspense>
    );
    const paragraphElement = screen.getByText(
      /DevBcn, its volunteers, and staff consider that understanding/i
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it("renders sponsor logos correctly", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense>
        <Router history={history}>
          <Diversity />
        </Router>
      </React.Suspense>
    );
    const vepeeLogo = screen.getByAltText("Vepee");
    const adevintaLogo = screen.getByAltText("Adevinta");

    expect(vepeeLogo).toBeInTheDocument();
    expect(adevintaLogo).toBeInTheDocument();
  });
});
