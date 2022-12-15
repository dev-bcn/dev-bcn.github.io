import "./index.scss";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import ReactGa from "react-ga";

const tracking_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_API_KEY || "G-0BG1LNPT11";
ReactGa.initialize(tracking_ID);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
