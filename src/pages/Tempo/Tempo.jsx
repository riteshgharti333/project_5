import "./Tempo.scss";

import SEO from "../../components/SEO";


import banner_img from "../../assets/images/banner_img.jpg";

import ServiceSidebar from "../../components/ServiceSidebar/ServiceSidebar";
import { taxiFees } from "../../assets/serviceData";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { tempo } from "../../assets/outstationData";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Tempo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="tempo">
      <SEO
        title="Tempo & Bus Rental Services | Affordable Group Travel Solutions"
        description="Hire tempo travelers and buses for group travel, corporate trips, weddings, and tours. Affordable pricing, comfortable rides, and professional drivers. Book now!"
        url={window.location.href}
        keywords="tempo rental, bus hire, group travel service, tempo traveler booking, luxury bus rental, wedding bus hire, corporate travel, affordable tempo service"
      />

      <div className="tempo-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} />

        <div className="tempo-banner-desc">
          <h1>Tempo/Bus Service</h1>
        </div>
      </div>
      <div className="tempo-container">
        <div className="tempo-container-top">
          <div className="tempo-left" data-aos="fade-right">
            <div className="tempo-content">
              <div className="tempo-content-item">
                <h1>{tempo.contentItem1.title}</h1>
                {tempo.contentItem1.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="tempo-content-item">
                <h3>{tempo.contentItem2.title}</h3>
                {tempo.contentItem2.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="tempo-content-item">
                <h3>{tempo.contentItem3.title}</h3>

                {tempo.contentItem3.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
                <div className="tempo-content-item-cards">
                  {tempo.contentItem3.contentItem3Cards.map((item, index) => (
                    <div className="tempo-content-item-card" key={index}>
                      <img src={item.img} alt={item.desc} />
                      <h3>{item.desc}</h3>

                      <div className="tempo-content-item-card-desc">
                        <div className="card-content">
                          <ul>
                            {item.list.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                          <p>{item.fare}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/*  */}

              <div className="tempo-content-item">
                <h3>{tempo.contentItem4.title}</h3>

                <div className="tempo-content-item-cards">
                  {tempo.contentItem4.list.map((item, index) => (
                    <div className="tempo-content-item-card" key={index}>
                      <img src={item.img} alt={item.desc} />
                      <h3>{item.desc}</h3>

                      <div className="tempo-content-item-card-desc">
                        <div className="card-content">
                          <ul>
                            {item.details.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                          <p>{item.fare}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/*  */}
              <div className="tempo-content-item">
                <h3>{tempo.contentItem4.title}</h3>

                {tempo.contentItem5.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}

                <ul>
                  {tempo.contentItem5.list.map((item, index) => (
                    <li key={index}>
                      <span>{item.title} : </span>
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tempo-content-item">
                <h3>{tempo.contentItem6.title}</h3>
                <p>{tempo.contentItem6.smdesc}</p>

                <ul>
                  {tempo.contentItem6.desc.map((item, index) => (
                    <li key={index}>
                      <span>{item.title} : </span>
                      {item.desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tempo-content-item">
                <h3>{tempo.contentItem7.title}</h3>

                {tempo.contentItem7.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="tempo-content-item">
                <h3>{tempo.contentItem8.title}</h3>

                {tempo.contentItem8.desc.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="tempo-right">
            <ServiceSidebar />
          </div>
        </div>
      </div>
      <div className="tempo-lg-sidebar">
        <ServiceSidebar fade="fade-up" />
      </div>
    </div>
  );
};

export default Tempo;
