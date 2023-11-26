import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import App from "./App";
import { createMemoryHistory } from "history";
import { ROUTE_HOME } from "./constants/routes";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("navigation pages", () => {
  test("it render the HOME page", async () => {
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
      await screen.findByText(/The Barcelona Developers Conference 2024/i)
    ).toBeInTheDocument();

    expect(await screen.findByText(/June 3rd-5th, 2024/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/5 tracks with the following topics:/i)
    ).toBeInTheDocument();

    //expect(await screen.findByText(/🎟️ Buy Tickets/i)).toBeInTheDocument();
    //expect(screen.getAllByText(/Interested in meeting/i)).toHaveLength(2);
  });

  test("it render the TRAVEL page", async () => {
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
      await screen.findByText(/The Barcelona Developers Conference 2024/i)
    ).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(screen.getByText("Travel"));
    expect(
      await screen.findByText("La Farga Centre d'Activitats")
    ).toBeVisible();
  });

  test.skip("it render the SPEAKERS page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Speakers"));
    expect(
      await screen.findByText(/Speakers coming from all corners of the world/i)
    ).toBeInTheDocument();
  });

  test.skip("it render the TALKS page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Talks"));
    expect(await screen.findByText("/ Talks")).toBeInTheDocument();
  });
  test.skip("it render the Workshops page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Workshops"));
    expect(await screen.findByText("/ Workshops")).toBeInTheDocument();
  });

  test.skip("it render the JOB OFFERS page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("JOB OFFERS"));
    expect(
      await screen.findByText("Have a look at some opportunities")
    ).toBeInTheDocument();
  });

  test.skip("it render the CFP page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Cfp Committee"));
    expect(await screen.findByText("Java & JVM")).toBeInTheDocument();
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

  test("it renders the ABOUT US page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("About Us"));
    expect(await screen.findByText(/Jonathan Vila/i)).toBeInTheDocument();
    expect(await screen.findByText(/Nacho Cougil/i)).toBeInTheDocument();
  });

  test("it renders the CODE OF CONDUCT page", async () => {
    const history = createMemoryHistory();
    history.push(ROUTE_HOME);
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Router history={history}>
          <App />
        </Router>
      </React.Suspense>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Code of Conduct"));
    expect(
      await screen.findByText(/The DevBcn is the yearly event/i)
    ).toBeInTheDocument();
  });
});
