import { render, screen } from "@testing-library/react";
import React from "react";

import { colorTagByText, Tag } from "./Tag";

describe("<Tags/>", () => {
  test("it render the Tag component", async () => {
    render(<Tag text="Java" />);
    expect(await screen.findByText(/Java/i)).toBeInTheDocument();
  });

  test("color tag by text", () => {
    expect(colorTagByText("Java")).toEqual("#93d6ff");
  });
});
