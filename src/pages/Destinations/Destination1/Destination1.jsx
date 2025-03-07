import "./Destination1.scss";
import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSidebar from "../../../components/ServiceSidebar/ServiceSidebar";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";
import { taxiFees } from "../../../assets/serviceData";

const Destination1 = () => {
  return (
    <div className="destination1">
      <div className="destination-banner">
        <ServiceBanner />
      </div>

      <div className="destination-container">
        <div className="destination-container-top">
          <div className="destination-container-top-left">
            <div className="destination-content">
              <h1>Jaipur Tour Package Overview</h1>
              <p>
                The bustling city of Chennai offers a mix of modernity and
                tradition, while the serene landscapes of Ooty and Kodaikanal
                provide a perfect escape from the heat. Tamil Nadu's cuisine,
                known for its aromatic spices, is a culinary delight, and its
                diverse festivals like Pongal and Diwali offer a glimpse into
                its colorful traditions.
              </p>
              <p>
                Tamil Nadu's tourism is also adorned with stunning coastal
                beauty. The temple town of Mahabalipuram is renowned for its
                intricately carved rock-cut monuments and sandy beaches. The
                French-flavored enclave of Pondicherry offers a unique blend of
                cultures. For wildlife enthusiasts, the dense forests of
                Mudumalai and the mangroves of Pichavaram are home to diverse
                flora and fauna. With its UNESCO World Heritage Sites,
                picturesque landscapes, and warm hospitality, Tamil Nadu
                captivates travelers seeking a blend of spirituality, culture,
                and natural beauty.
              </p>
            </div>
          </div>
          <div className="destination-container-top-right">
            <ServiceSidebar />
          </div>
        </div>
        <div className="destination-container-bottom">
        <h1>Our Taxi Services</h1>
        <div className="destination-cards">
          {taxiFees.map((item, index) => (
            <ServiceCard item={item} key={index} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Destination1;
