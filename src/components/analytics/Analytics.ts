import ReactGa from "react-ga";

export const analyticsEventsTracker =
  (category = "action") =>
  (action = "", label = "") => {
    ReactGa.event({ category, action, label });
  };
export const gaEventTracker = analyticsEventsTracker("links");
