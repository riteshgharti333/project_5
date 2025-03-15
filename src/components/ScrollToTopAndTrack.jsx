import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../utils/googleAnalytics";

const ScrollToTopAndTrack = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
};

export default ScrollToTopAndTrack;
