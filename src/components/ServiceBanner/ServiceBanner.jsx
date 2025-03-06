import { tourImgs } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ServiceBanner.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ServiceBanner = () => {
  return (
    <div className="serviceBanner">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3.3}
        spaceBetween={5}
        centeredSlides={true}
        loop={true}
        speed={1000}
        navigation={{
          prevEl: ".serviceBanner-prev",
          nextEl: ".serviceBanner-next",
        }}
        className="serviceBanner-swiper"
      >
        {tourImgs.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              alt={`Tour ${index}`}
              className="serviceBanner-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="serviceBanner-prev">❮</div>
      <div className="serviceBanner-next">❯</div>
    </div>
  );
};

export default ServiceBanner;
