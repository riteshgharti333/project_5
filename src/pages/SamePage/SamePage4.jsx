import { useLocation } from "react-router-dom";
import { sDdelhiToKurukshetraTaxi } from "../../assets/sameData";
import Same from "../../components/Same/Same";
import SameBanner from "../../components/Same/SameBanner";
import "./SamePage.scss";
import SEO from "../../components/SEO";

const SamePage4 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;
  return (
    <div className="samePage">
      <SEO
        title="Same Day Delhi to Kurukshetra Taxi Service | Comfortable & Reliable Travel"
        description="Experience a seamless journey with our Same Day Delhi to Kurukshetra Taxi Service. Enjoy a comfortable, safe, and affordable ride with professional drivers. Book now for a stress-free day trip to Kurukshetra!"
        url={fullUrl}
        keywords="same day taxi, Delhi to Kurukshetra, taxi service, Kurukshetra trip, spiritual journey, reliable ride, professional drivers, comfortable journey, day trip"
      />

      <SameBanner />
      <Same sameData={sDdelhiToKurukshetraTaxi} />
    </div>
  );
};

export default SamePage4;
