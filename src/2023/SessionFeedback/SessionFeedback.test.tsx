import React from "react";
import { render, screen } from "@testing-library/react";
import SessionFeedback2023 from "./SessionFeedback2023";

// Mock sessionData
jest.mock("./sessionData", () => ({
  sessionData: [
    {
      id: "1",
      Title: "Session 1",
      Overall: 4,
      Fun: 3,
      Originality: 5,
      Creativity: 4,
      Communication: 5,
      Speaker_knowledge: 4,
      Pace_and_timing: 3,
      Recommend_to_others: 5,
      Insight: 4,
      votes: 10,
    },
    // ...add more mock session data as needed
  ],
}));

describe("SessionFeedback", () => {
  test("renders component correctly", () => {
    render(<SessionFeedback2023 />);

    // Assert that the component renders without errors
    expect(screen.getByText("Session Feedback")).toBeInTheDocument();
  });
});
