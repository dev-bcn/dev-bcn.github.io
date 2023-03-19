import { render, screen } from "@testing-library/react";
import { colorTagByText, Tag } from "./Tag";
import React from "react";

describe("<Tags/>", () => {
  test("it render the Tag component", async () => {
    render(<Tag text="Java" />);
    expect(await screen.findByText(/Java/i)).toBeInTheDocument();
  });

  test("color tag by text", () => {
    expect(colorTagByText("Java")).toEqual("#002454");
  });
});
