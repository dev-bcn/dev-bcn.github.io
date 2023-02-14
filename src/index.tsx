import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import ReactGa from "react-ga";
import { BrowserTracing } from "@sentry/tracing";
import * as Sentry from "@sentry/react";
import Loading from "./components/Loading/Loading";

const tracking_ID =
  process.env.REACT_APP_GOOGLE_ANALYTICS_API_KEY || "G-0BG1LNPT11";
ReactGa.initialize(tracking_ID);

Sentry.init({
  dsn: "https://fdfaeed3901d43a299b95c534e42a4c1@o194303.ingest.sentry.io/4504348314435584",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  release: "devBcn@" + process.env.npm_package_version,
});

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
