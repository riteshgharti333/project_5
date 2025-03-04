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
      <Tour />
      <OurTaxi />
      <Rental />

      <Taxi />

      <Popular />
      <Review />
    </div>
  );
};

export default Homepage;
