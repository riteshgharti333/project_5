import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../../assets/data";
import "./Tour.scss";

const Tour = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="tour">
      <div className="tour-top" data-aos="fade-up">
        <h2>
          Unveil India’s Wonders with Wanderlust India Expeditions – Curated
          Adventures, Timeless Memories
        </h2>
        <p>
          Ready to see India through new eyes? Wanderlust India Expeditions
          crafts journeys that blend iconic marvels with untold stories,
          transforming trips into soul-stirring sagas. Traverse ancient lands
          where history whispers through <strong>Mughal-era</strong> wonders,
          lose yourself in
          <strong> Rajasthan’s </strong>kaleidoscope of vibrant festivals, or
          unwind on
          <strong> Uttarakhand</strong> palm-fringed backwaters as the sun
          paints the sky gold.
        </p>

        <div className="tour-top-desc">
          <h3>Your Journey, Your Rhythm</h3>
          <p>
            Craving a sunrise yoga session in <strong>Rishikesh</strong> ? A
            culinary deep-dive into <strong> Kolkata’s </strong>bustling lanes?
            Or perhaps a private heritage walk through <strong>Jaipur’s</strong>{" "}
            hidden havelis? We design itineraries that bend to your curiosity.
            Choose from luxe retreats in <strong>Himalayan</strong> hideaways,
            spirited road trips along Konkan Coast highways, or immersive
            homestays in <strong>Tamil Nadu’s</strong> rural heartlands.{" "}
          </p>
        </div>

        <div className="tour-top-desc">
          <h3>Beyond the Guidebook</h3>
          <p>
            Our travel wizards don’t just plan trips—they ignite passions. Dive
            into <strong> Varanasi’s</strong> spiritual pulse with a dusk{" "}
            <strong>Ganga Aarti</strong> ceremony led by a local priest. Trek
            <strong> Ladakh’s</strong> rugged trails with guides who’ve called
            these peaks home for generations. Sleep under starry Thar Desert
            skies in a royal camp, serenaded by folk musicians. Every detail is
            stitched together for authenticity, comfort, and a dash of magic.
          </p>
        </div>
      </div>

      <div className="tour-cards">
        {services.map((item, index) => (
          <div className="tour-card" key={index} data-aos="fade-right">
            <div className="tour-card-top">
              {item.icon && <item.icon className="tour-card-icon" />}
            </div>

            <div className="tour-card-bottom">
              <h2>{item.title}</h2>
              <div className="tour-card-bottom-desc">
                <h3>{item.smTitle}</h3>
                <p>{item.desc}</p>
              </div>

              <div className="tour-card-bottom-option">
                {item.servicesOption.map((option, index) => (
                  <span key={index} data-aos="zoom-in">
                    {option}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour;
