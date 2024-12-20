import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router";
import SpeakerInformation from "./SpeakerInformation";

describe("Speakers activities component", () => {
  it("renders component correctly", () => {
    render(
      <React.Suspense>
        <Routes>
          <Route path={"*"} element={<SpeakerInformation />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter }
    );
    const headingElement = screen.getByText("Speakers activities plan");
    expect(headingElement).toBeInTheDocument();
  });
});
