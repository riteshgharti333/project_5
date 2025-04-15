import React, { lazy, Suspense } from "react";
import "./Homepage.scss";
import SEO from "../../components/SEO";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import { useLocation } from "react-router-dom";

// Lazy-loaded components
const Tour = lazy(() => import("../../components/Tour/Tour"));
const OurTaxi = lazy(() => import("../../components/OurTaxi/OurTaxi"));
const Rental = lazy(() => import("../../components/Rental/Rental"));
const Taxi = lazy(() => import("../../components/Taxi/Taxi"));
const Popular = lazy(() => import("../../components/Popular/Popular"));
const Review = lazy(() => import("../../components/Review/Review"));
const BlogCards = lazy(() => import("../../components/BlogCards/BlogCards"));

const Homepage = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="homepage">
      <SEO
        title="Affordable Taxi & Car Rental Services | Book Now!"
        description="Book the best taxi and cab service in India, including Delhi and Mumbai. Safe rides with professional drivers. Explore India tours with our affordable rentals!"
        url={fullUrl}
        keywords="taxi service, cab service, India tour, global India, driver booking, Delhi taxi, Mumbai cab, best rental services, service view, view detail, taxi service view, service view detail, India travel"
      />

      <HomeBanner />

      <div className="homepage-content">
        <div className="child">
          <Suspense fallback={<div style={{ height: "300px" }} />}>
            <Tour />
            <OurTaxi />
            <Rental />
            <Taxi />
            <Popular />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<div style={{ height: "300px" }} />}>
        <Review />
      </Suspense>

      <div className="home-blogs-cards">
        <Suspense fallback={<div style={{ height: "300px" }} />}>
          <BlogCards />
        </Suspense>
      </div>
    </div>
  );
};

export default Homepage;
