import { useLocation } from "react-router-dom";
import { sDdelhiToJaipurTaxi } from "../../assets/sameData";
import Same from "../../components/Same/Same";
import SameBanner from "../../components/Same/SameBanner";
import "./SamePage.scss";
import SEO from "../../components/SEO";

const SamePage1 = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="samePage">
      <SEO
        title="Same Day Delhi to Jaipur Taxi Service | Comfortable & Reliable Travel"
        description="Looking for a quick and reliable taxi ride from Delhi to Jaipur? Our Same Day Delhi to Jaipur Taxi Service offers a seamless, comfortable, and affordable journey. Book now for a stress-free trip!"
        url={fullUrl}
        keywords="same day taxi, Delhi to Jaipur, taxi service, affordable ride, comfortable journey, reliable travel, professional drivers, hassle-free transportation, day trip"
      />

      <SameBanner />
      <Same sameData={sDdelhiToJaipurTaxi} />
    </div>
  );
};

export default SamePage1;
