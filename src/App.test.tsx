import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import App from "./App";
import { createMemoryHistory } from "history";
import {
  ROUTE_HOME,
  ROUTE_JOB_OFFERS,
  ROUTE_SPEAKERS,
  ROUTE_TALKS,
  ROUTE_TRAVEL,
} from "./constants/routes";

describe("navigation pages", () => {
  test("it render the home page", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(
      screen.getByText(/The Developers Conference 2023/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/July 3rd-5th, 2023/i)).toBeInTheDocument();
    expect(
      screen.getByText(/7 tracks with the following topics:/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/🎟️ Buy Tickets/i)).toBeInTheDocument();
  });

  test("it render the travel page", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_TRAVEL);
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(
      screen.getByText(/La Farga Centre d'Activitats/i)
    ).toBeInTheDocument();
  });

  test("it render the speakers page", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_SPEAKERS);
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(
      screen.getByText(/Speakers coming from all corners of the world/i)
    ).toBeInTheDocument();
  });

  test("it render the talks page", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_TALKS);
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getByText("/ TALKS")).toBeInTheDocument();
  });

  test("it render the Job Offers page", () => {
    const history = createMemoryHistory();
    history.push(ROUTE_JOB_OFFERS);
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(
      screen.getByText("Have a look at some opportunities")
    ).toBeInTheDocument();
  });

  test("it render the 404 page", () => {
    const history = createMemoryHistory();
    history.push("/some-test");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(screen.getByText("Error 404. Page not found")).toBeInTheDocument();
  });
});
