import { taxiFees } from "../../../assets/serviceData";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import "./TourGuide.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import banner_img from "../../../assets/images/banner_img.jpg";
import SEO from "../../../components/SEO";
import { useLocation } from "react-router-dom";

const TourGuide = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="tourGuide">
      <SEO
        title="Best Tour Operator Service | Plan Your Perfect Trip Today"
        description="Explore top destinations with our professional tour operator service. Customized travel packages, guided tours, and seamless experiences. Book your dream trip now!"
        url={fullUrl}
        keywords="tour operator service, best travel agency, guided tours, holiday packages, customized travel plans, India tour services, sightseeing tours"
      />

      <div className="tourGuide-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} loading="lazy" />

        <div className="tourGuide-banner-desc">
          <h1>Tour Operator Service</h1>
        </div>
      </div>

      <div className="tourGuide-content">
        <div className="tourGuide-contet-left" data-aos="fade-right">
          <h2>Tour Operator Service</h2>
          <p>
            Global India Travel Service, based in the bustling area of Karol
            Bagh in Delhi, stands out as a leading tour operator for North
            India. Our mission is to provide travelers with an unforgettable
            journey through this culturally rich and diverse region. North India
            is home to a myriad of attractions, from the snow-capped peaks of
            the Himalayas to the golden sands of the Thar Desert, and from the
            serene banks of the Ganges to the vibrant hustle and bustle of
            Delhi, Jaipur, and Agra. We understand that each traveler has unique
            interests and preferences, which is why we offer a wide range of
            tour packages tailored to various needs.
          </p>
          <p>
            Our tour packages include cultural tours, adventure tours, religious
            tours, and wildlife tours, among others. Cultural tours take you
            through the historical lanes of Delhi, the royal palaces of Jaipur,
            and the timeless beauty of the Taj Mahal in Agra. Adventure
            enthusiasts can embark on treks in the Himalayas or safaris in the
            deserts of Rajasthan. For those seeking spiritual solace, our
            religious tours cover significant pilgrimage sites like Varanasi,
            Haridwar, and Amritsar.
          </p>
          <p>
            Every tour is led by experienced and knowledgeable guides who are
            passionate about the region's history, culture, and traditions. They
            ensure that each journey is not just a trip, but an enriching
            experience. From arranging transportation and accommodations to
            planning daily itineraries, our team takes care of every detail,
            allowing you to immerse yourself fully in the beauty and wonder of
            North India.
          </p>
        </div>
        <div className="tourGuide-contet-right">
          <ServiceSidebar />
        </div>
      </div>

      <div className="tourGuide-bottom">
        <h2>Our Taxi Services</h2>
        <div className="tourGuide-cards">
          {taxiFees.map((item, index) => (
            <ServiceCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourGuide;
