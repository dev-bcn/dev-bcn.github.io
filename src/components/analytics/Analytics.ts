import { event } from "react-ga";

export const analyticsEventsTracker =
  (category = "action") =>
  (action = "", label = "") => {
    event({ category, action, label });
  };
export const gaEventTracker = analyticsEventsTracker("links");
