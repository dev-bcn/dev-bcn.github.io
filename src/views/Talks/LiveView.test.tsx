import { LiveView } from "./LiveView";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Live view component", () => {
  it("renders without crashing", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <LiveView />
      </QueryClientProvider>,
    );
    const titleElement = screen.getByText(/Live Schedule/);
    expect(titleElement).toBeInTheDocument();
  });
});
