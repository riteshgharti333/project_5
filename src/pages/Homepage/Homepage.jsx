import BlogCards from "../../components/BlogCards/BlogCards";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import OurTaxi from "../../components/OurTaxi/OurTaxi";
import Popular from "../../components/Popular/Popular";
import Rental from "../../components/Rental/Rental";
import Review from "../../components/Review/Review";
import Taxi from "../../components/Taxi/Taxi";
import Tour from "../../components/Tour/Tour";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
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
