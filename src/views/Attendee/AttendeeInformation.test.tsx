import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AttendeeInformation from "./AttendeeInformation";

describe("Attendee information component", () => {
  it("renders component correctly", () => {
    render(
      <React.Suspense>
        <Routes>
          <Route path={"*"} element={<AttendeeInformation />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter }
    );
    const headingElement = screen.getByText("Attendee information");
    expect(headingElement).toBeInTheDocument();
  });
  it("renders pre-party sponsor correctly", () => {
    render(
      <React.Suspense>
        <Routes>
          <Route path={"*"} element={<AttendeeInformation />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter }
    );
    const headingElement = screen.getByAltText("Azul");
    expect(headingElement).toBeInTheDocument();
  });
});
