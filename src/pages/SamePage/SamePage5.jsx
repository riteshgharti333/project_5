import { useLocation } from "react-router-dom";
import { sDdelhiToChandigarhTaxi } from "../../assets/sameData";
import Same from "../../components/Same/Same";
import SameBanner from "../../components/Same/SameBanner";
import "./SamePage.scss";
import SEO from "../../components/SEO";

const SamePage5 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="samePage">
      <SEO
        title="Same Day Delhi to Chandigarh Taxi Service | Comfortable & Reliable Travel"
        description="Book our Same Day Delhi to Chandigarh Taxi Service for a smooth, safe, and affordable journey. Enjoy a hassle-free ride with professional drivers and door-to-door service. Your perfect day trip to Chandigarh starts here!"
        url={fullUrl}
        keywords="same day taxi, Delhi to Chandigarh, taxi service, Chandigarh trip, reliable ride, professional drivers, comfortable journey, day trip, affordable taxi service"
      />

      <SameBanner />
      <Same sameData={sDdelhiToChandigarhTaxi} />
    </div>
  );
};

export default SamePage5;
