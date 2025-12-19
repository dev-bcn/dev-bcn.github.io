import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Diversity } from "./Diversity";

describe("Diversity component", () => {
  it("renders heading correctly", () => {
    render(
      <React.Suspense>
        <Routes>
          <Route path={"*"} element={<Diversity />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const headingElement = screen.getByText("Diversity Sponsorship");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders paragraph text correctly", () => {
    render(
      <React.Suspense>
        <Routes>
          <Route path={"*"} element={<Diversity />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const paragraphElement = screen.getByText(
      /DevBcn, its volunteers, and staff consider that understanding/i,
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it("renders sponsor logos correctly", () => {
    render(
      <React.Suspense>
        <Routes>
          <Route path={"*"} element={<Diversity />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const ocadoLogo = screen.getByAltText("NUBANK");

    expect(ocadoLogo).toBeInTheDocument();
  });
});
