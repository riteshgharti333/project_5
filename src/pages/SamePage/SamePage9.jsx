import { useLocation } from "react-router-dom";
import { sDdelhiToHaridwarTaxi } from "../../assets/sameData";
import Same from "../../components/Same/Same";
import SameBanner from "../../components/Same/SameBanner";
import "./SamePage.scss";
import SEO from "../../components/SEO";

const SamePage9 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="samePage">
      <SEO
        title="Same Day Delhi to Haridwar Taxi Service | Comfortable & Affordable Travel"
        description="Book our Same Day Delhi to Haridwar Taxi Service for a smooth, safe, and comfortable journey. Enjoy a stress-free ride with professional drivers and explore the spiritual beauty of Haridwar in one day."
        url={fullUrl}
        keywords="same day taxi, Delhi to Haridwar, taxi service, Haridwar trip, spiritual journey, reliable ride, professional drivers, comfortable journey, affordable taxi service, day trip"
      />

      <SameBanner />
      <Same sameData={sDdelhiToHaridwarTaxi} />
    </div>
  );
};

export default SamePage9;
