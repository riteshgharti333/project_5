import ServiceSidebar from "../../components/ServiceSidebar/ServiceSidebar";
import "./Same.scss";

import ServiceContent from "../../components/ServiceContent/ServiceContent";

import banner_img from "../../assets/images/banner_img.jpg";

import { gatewayServices, delhiTaxi, taxiFees } from "../../assets/serviceData";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

import SEO from "../../components/SEO";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

const Same = ({ sameData }) => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://globalindiatravels.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="same">
      <SEO
        title="Delhi Taxi Service | Best Driver"
        description="Book a taxi in Delhi for local and outstation travel. Affordable rates, professional drivers, and 24/7 service. Choose from sedans, SUVs, and tempo travelers."
        url={fullUrl}
        keywords="Delhi taxi service, local cabs in Delhi, outstation taxi from Delhi, best taxi service in Delhi, airport taxi Delhi"
      />

      <div className="same-container">
        <div className="same-container-top">
          <div className="same-left">
            <div className="same-content" data-aos="fade-right">
              <div className="same-comp-content">
               
                <h1>{sameData.sdContent1.title}</h1>
                <p>{sameData.sdContent1.desc}</p>

                <div className="same-content-list">
                  <h3>{sameData.sdContent2.title}</h3>
                  <ul>
                    {sameData.sdContent2.points.map((item, index) => (
                      <li key={index}>
                        <span>{item.title}:</span> {item.desc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="same-content2-list">
                  <h3>{sameData.sdContent3.title}</h3>
                  <ul>
                    {sameData.sdContent3.points.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="same-content2-list">
                  <h3>{sameData.sdContent4.title}</h3>
                  <ul>
                    {sameData.sdContent4.points.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="same-content-list">
                  <h3>{sameData.sdContent5.title}</h3>
                  <p>{sameData.sdContent5.desc}</p>
                </div>

                
                <div className="same-content-list">
                  <h3>{sameData.sdContent6.title}</h3>
                  <p>{sameData.sdContent6.desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="same-sidebar">
            <ServiceSidebar />
          </div>
        </div>
      </div>

      <div className="same-content-bottom">
        <h3>Our Taxi Services</h3>
        <div className="same-cards">
          {taxiFees.map((item, index) => (
            <ServiceCard item={item} key={index} />
          ))}
        </div>
      </div>

      <div className="same-lg-sidebar">
        <ServiceSidebar />
      </div>
    </div>
  );
};

export default Same;
