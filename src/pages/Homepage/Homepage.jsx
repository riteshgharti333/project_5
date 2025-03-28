import "./Homepage.scss";
import SEO from "../../components/SEO";
import BlogCards from "../../components/BlogCards/BlogCards";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import OurTaxi from "../../components/OurTaxi/OurTaxi";
import Popular from "../../components/Popular/Popular";
import Rental from "../../components/Rental/Rental";
import Review from "../../components/Review/Review";
import Taxi from "../../components/Taxi/Taxi";
import Tour from "../../components/Tour/Tour";
import { useLocation } from "react-router-dom";

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
          <Tour />
          <OurTaxi />
          <Rental />
          <Taxi />
          <Popular />
        </div>
      </div>
      <Review />
      <div className="home-blogs-cards">
        <BlogCards />
      </div>
    </div>
  );
};

export default Homepage;
