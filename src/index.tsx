import "./index.scss";
import {
  BrowserRouter,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import App from "./App";
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { initialize } from "react-ga";
import * as Sentry from "@sentry/react";
import { Loading } from "@components/Loading/Loading";

const trackingID =
  import.meta.env.VITE_GOOGLE_ANALYTICS_API_KEY ?? "G-0BG1LNPT11";
initialize(trackingID);

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
  <React.Suspense fallback={<Loading />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Suspense>,
);
reportWebVitals();
