import { services } from "../../assets/data";
import "./Tour.scss";

const Tour = () => {
  return (
    <div className="tour">
      <div className="tour-top">
        <h1>
          Explore India with Global India Tour – Your Gateway to Unforgettable
          Journeys
        </h1>
        <p>
          For over a decade, Global India Tour has been a trusted name in
          crafting immersive travel experiences across India’s vibrant
          landscapes, rich heritage, and cultural treasures. Whether you’re a
          solo traveler, a family seeking adventure, or a corporate group
          planning a retreat, we specialize in curating personalized tours that
          cater to every travel dream. From the snow-capped peaks of the
          Himalayas to the sun-kissed beaches of Goa, and from the royal palaces
          of Rajasthan to the serene backwaters of Kerala, our expertly designed
          itineraries ensure seamless, safe, and unforgettable journeys.
        </p>
      </div>

      <div className="tour-cards">
        {services.map((item, index) => (
          <div className="tour-card" key={index}>
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
                  <span key={index}>{option}</span>
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
