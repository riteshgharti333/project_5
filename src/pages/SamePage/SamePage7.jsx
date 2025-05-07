import { useLocation } from "react-router-dom";
import { sDdelhiToBharatpurTaxi } from "../../assets/sameData";
import Same from "../../components/Same/Same";
import SameBanner from "../../components/Same/SameBanner";
import "./SamePage.scss";
import SEO from "../../components/SEO";

const SamePage7 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="samePage">
      <SEO
        title="Same Day Delhi to Bharatpur Taxi Service | Comfortable & Affordable Travel"
        description="Book our Same Day Delhi to Bharatpur Taxi Service for a smooth, comfortable, and affordable journey. Experience a hassle-free ride with professional drivers and enjoy a perfect day trip to Bharatpur."
        url={fullUrl}
        keywords="same day taxi, Delhi to Bharatpur, taxi service, Bharatpur trip, reliable ride, professional drivers, comfortable journey, affordable taxi service, day trip"
      />

      <SameBanner />
      <Same sameData={sDdelhiToBharatpurTaxi} />
    </div>
  );
};

export default SamePage7;
