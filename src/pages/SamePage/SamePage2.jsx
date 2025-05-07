import { useLocation } from "react-router-dom";
import { sDdelhiToNeemranaFortTaxi } from "../../assets/sameData";
import Same from "../../components/Same/Same";
import SameBanner from "../../components/Same/SameBanner";
import "./SamePage.scss";
import SEO from "../../components/SEO";

const SamePage2 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="samePage">
      <SEO
        title="Same Day Delhi to Neemrana Fort Taxi Service | Comfortable & Reliable Travel"
        description="Book your Same Day Delhi to Neemrana Fort Taxi Service for a smooth and convenient ride. Enjoy a safe, comfortable, and stress-free journey with professional drivers. Affordable prices and door-to-door service!"
        url={fullUrl}
        keywords="same day taxi, Delhi to Neemrana Fort, taxi service, Neemrana Fort trip, affordable ride, reliable taxi, professional drivers, comfortable journey, day trip"
      />

      <SameBanner />

      <Same sameData={sDdelhiToNeemranaFortTaxi} />
    </div>
  );
};

export default SamePage2;
