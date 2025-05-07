import { useLocation } from "react-router-dom";
import { sDdelhiToMathuraVrindavanTaxi } from "../../assets/sameData";
import Same from "../../components/Same/Same";
import SameBanner from "../../components/Same/SameBanner";
import "./SamePage.scss";
import SEO from "../../components/SEO";

const SamePage3 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="samePage">
      <SEO
        title="Same Day Delhi to Mathura Vrindavan Taxi Service | Comfortable & Reliable Travel"
        description="Book our Same Day Delhi to Mathura Vrindavan Taxi Service for a peaceful and memorable trip. Enjoy a comfortable, safe, and hassle-free ride with professional drivers. Affordable prices and door-to-door service!"
        url={fullUrl}
        keywords="same day taxi, Delhi to Mathura Vrindavan, taxi service, Mathura Vrindavan trip, spiritual journey, reliable ride, professional drivers, comfortable journey, day trip"
      />

      <SameBanner />
      <Same sameData={sDdelhiToMathuraVrindavanTaxi} />
    </div>
  );
};

export default SamePage3;
