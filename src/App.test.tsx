import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("navigation pages", () => {
  test("it render the HOME page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    expect(
      await screen.findByText(/The Barcelona Developers Conference 2024/i),
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/June 13th - 14th, 2024/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/5 tracks with the following topics:/i),
    ).toBeInTheDocument();
  });

  test("it render the TRAVEL page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    expect(
      await screen.findByText(/The Barcelona Developers Conference 2024/i),
    ).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(screen.getByText("Travel"));
    expect(
      await screen.findByText("La Farga Centre d'Activitats"),
    ).toBeVisible();
  });

  test("it render the SPEAKERS page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Speakers"));
    expect(
      await screen.findByText(/Speakers coming from all corners of the world/i),
    ).toBeInTheDocument();
  });

  test("it render the TALKS page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Talks"));
    expect(await screen.findByText("/ Talks")).toBeInTheDocument();
  });

  test.skip("it render the JOB OFFERS page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("JOB OFFERS"));
    expect(
      await screen.findByText("Have a look at some opportunities"),
    ).toBeInTheDocument();
  });

  test("it render the CFP page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Cfp Committee"));
    expect(await screen.findByText("Java & JVM")).toBeInTheDocument();
  });

  test("it renders the ABOUT US page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("About Us"));
    expect(await screen.findByText(/Jonathan Vila/i)).toBeInTheDocument();
    expect(await screen.findByText(/Nacho Cougil/i)).toBeInTheDocument();
  });

  test("it renders the CODE OF CONDUCT page", async () => {
    render(
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </React.Suspense>,
      { wrapper: BrowserRouter },
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Code of Conduct"));
    expect(
      await screen.findByText(/The DevBcn is the yearly event/i),
    ).toBeInTheDocument();
  });
});
