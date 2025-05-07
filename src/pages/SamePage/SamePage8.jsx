import { useLocation } from "react-router-dom";
import { sDdelhiToRanthamboreTaxi } from "../../assets/sameData";
import Same from "../../components/Same/Same";
import SameBanner from "../../components/Same/SameBanner";
import "./SamePage.scss";
import SEO from "../../components/SEO";

const SamePage8 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="samePage">
      <SEO
        title="Same Day Delhi to Ranthambore Taxi Service | Comfortable & Reliable Travel"
        description="Book our Same Day Delhi to Ranthambore Taxi Service for a comfortable, safe, and affordable journey. Enjoy a hassle-free ride with professional drivers and experience the beauty of Ranthambore in one day."
        url={fullUrl}
        keywords="same day taxi, Delhi to Ranthambore, taxi service, Ranthambore trip, reliable ride, professional drivers, comfortable journey, affordable taxi service, day trip"
      />

      <SameBanner />
      <Same sameData={sDdelhiToRanthamboreTaxi} />
    </div>
  );
};

export default SamePage8;
