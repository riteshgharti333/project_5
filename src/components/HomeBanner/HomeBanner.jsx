import "./HomeBanner.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { banners } from "../../assets/data";


const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <div className="homeBanner-imgs">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          speed={1200}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="services-slide"
        >
          {banners.map((item, index) => (
            <SwiperSlide key={index} className="service_slide">
              <img src={item.img} alt="services" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
