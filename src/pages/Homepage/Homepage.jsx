import SEO from "../../components/SEO";
import "./Homepage.scss";

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
        title="Affordable Taxi & Car Rental Services | Book Now!"
        description="Find the best taxi and car rental services in your city. Affordable prices, safe rides, and 24/7 support. Book your ride today!"
        url={window.location.href}
        keywords="taxi rental, car hire, affordable taxi, best rental services"
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
