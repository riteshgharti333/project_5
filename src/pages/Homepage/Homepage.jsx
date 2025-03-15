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

const Homepage = () => {
  return (
    <div className="homepage">
      <SEO
        title="Best Taxi & Cab Service in India | Book Now"
        description="Book the best taxi and cab service in India, including Delhi and Mumbai. Safe rides with professional drivers. Explore India tours with our affordable rentals!"
        url={window.location.href}
        keywords="taxi service, cab service, India tour, global India, driver booking, Delhi taxi, Mumbai cab, best rental services"
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
