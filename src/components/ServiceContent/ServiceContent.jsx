import "./ServiceContent.scss";

const ServiceContent = ({ delhiTaxi }) => {
  return (
    <>
      {delhiTaxi.map((item, index) => (
        <div className="service-comp-content" key={index}>
          {/* Title & Description */}
          <h1>{item.taxiContent1.title}</h1>
          <p>{item.taxiContent1.desc}</p>

          {/* Sightseeing Places */}
          <div className="service-content-list">
            <h3>{item.taxiContent2.place}</h3>
            <ul>
              {item.taxiContent2.places.map((place, idx) => (
                <li key={idx}>
                  <span>{place.placeTitle}:</span> {place.placeDesc}
                </li>
              ))}
            </ul>
          </div>

          {/* Getway Services */}
          <div className="service-content2-list">
            <h3>{item.taxiContent3.getway}</h3>
            <ul>
              {item.taxiContent3.gatewayServices.map((service, idy) => (
                <li key={idy}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceContent;
