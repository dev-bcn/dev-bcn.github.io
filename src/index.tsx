import "./index.scss";
import {
  BrowserRouter,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from "react-router";
import App from "./App";
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import ReactGa from "react-ga";
import * as Sentry from "@sentry/react";
import Loading from "./components/Loading/Loading";

const trackingID =
  process.env.REACT_APP_GOOGLE_ANALYTICS_API_KEY ?? "G-0BG1LNPT11";
ReactGa.initialize(trackingID);

Sentry.init({
  dsn: "https://fdfaeed3901d43a299b95c534e42a4c1@o194303.ingest.sentry.io/4504348314435584",
  integrations: [
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
  ],
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  release: "devBcn@" + process.env.npm_package_version,
});

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
