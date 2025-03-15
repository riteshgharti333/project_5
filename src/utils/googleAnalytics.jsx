import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-RFXY33FZTR";
ReactGA.initialize(MEASUREMENT_ID);

export const trackPageView = (pathname) => {
  if (pathname) {
    ReactGA.send({ hitType: "pageview", page: pathname });
  }
};

export const trackFloatingButtonClick = (buttonType) => {
  ReactGA.event({
    category: "Floating Buttons",
    action: `Clicked on ${buttonType}`,
    label: buttonType,
  });
};
