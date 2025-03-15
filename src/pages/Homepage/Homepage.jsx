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
        title="Best Taxi Service in India | Affordable Cabs & Tours"
        description="Book affordable taxi services in India, including Delhi, Mumbai & major cities. Safe rides, 24/7 support, and top-rated drivers. Find the best cab rentals now!"
        url={window.location.href}
        keywords="best taxi service, taxi in India, very affordable cab rental, Delhi taxi service, Mumbai taxi, tour packages, best driver experience"
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
