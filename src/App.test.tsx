import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import App from "./App";
import { createMemoryHistory } from "history";
import {
  ROUTE_ABOUT_US,
  ROUTE_CODE_OF_CONDUCT,
  ROUTE_DIVERSITY,
  ROUTE_HOME,
  ROUTE_JOB_OFFERS,
  ROUTE_SPEAKERS,
  ROUTE_TALKS,
  ROUTE_TRAVEL,
} from "./constants/routes";
import React from "react";

describe("navigation pages", () => {
  test("it render the home page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    expect(
      await screen.findByText(/The Barcelona Developers Conference 2023/i)
    ).toBeInTheDocument();

    expect(await screen.findByText(/July 3rd-5th, 2023/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/7 tracks with the following topics:/i)
    ).toBeInTheDocument();

    expect(await screen.findByText(/🎟️ Buy Tickets/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Interested in meeting/i)).toHaveLength(2);
  });

  test("it render the travel page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_TRAVEL);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    expect(
      await screen.findByText(/La Farga Centre d'Activitats/i)
    ).toBeInTheDocument();
  });

  test("it render the speakers page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_SPEAKERS);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    expect(
      await screen.findByText(/Speakers coming from all corners of the world/i)
    ).toBeInTheDocument();
  });

  test("it render the talks page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_TALKS);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    expect(await screen.findByText("/ TALKS")).toBeInTheDocument();
  });

  test("it render the Job Offers page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_JOB_OFFERS);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    expect(
      await screen.findByText("Have a look at some opportunities")
    ).toBeInTheDocument();
  });

  test("it render the 404 page", async () => {
    const history = createMemoryHistory();
    history.push("/some-test");
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    expect(
      await screen.findByText("Error 404. Page not found")
    ).toBeInTheDocument();
  });

  test("it renders the about us page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_ABOUT_US);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    expect(await screen.findByText(/Jonathan Vila/i)).toBeInTheDocument();
    expect(await screen.findByText(/Nacho Cougil/i)).toBeInTheDocument();
  });

  test("it renders the code of conduct page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_CODE_OF_CONDUCT);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    expect(
      await screen.findByText(/The DevBcn is the yearly event/i)
    ).toBeInTheDocument();
  });

  test("it renders the talks page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_TALKS);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    expect(await screen.findByText("Loading")).toBeInTheDocument();
  });

  test("it renders the diversity page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_DIVERSITY);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    expect(
      await screen.findByText(/diversity sponsorship for DevBcn 2023/i)
    ).toBeInTheDocument();
  });
});
