import { useLocation } from "react-router-dom";
import { sDdelhiToRishikeshTaxi } from "../../assets/sameData";
import Same from "../../components/Same/Same";
import SameBanner from "../../components/Same/SameBanner";
import "./SamePage.scss";
import SEO from "../../components/SEO";

const SamePage6 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="samePage">
      <SEO
        title="Same Day Delhi to Rishikesh Taxi Service | Comfortable & Stress-Free Travel"
        description="Enjoy a peaceful and relaxing journey with our Same Day Delhi to Rishikesh Taxi Service. Safe, comfortable, and affordable rides with professional drivers. Book your hassle-free day trip to Rishikesh now!"
        url={fullUrl}
        keywords="same day taxi, Delhi to Rishikesh, taxi service, Rishikesh trip, spiritual journey, professional drivers, comfortable journey, affordable taxi service, day trip"
      />

      <SameBanner />
      <Same sameData={sDdelhiToRishikeshTaxi} />
    </div>
  );
};

export default SamePage6;
