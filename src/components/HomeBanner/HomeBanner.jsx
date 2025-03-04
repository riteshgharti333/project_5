import { useState, useEffect } from "react";
import "./HomeBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { banners, smBanner } from "../../assets/data";

const HomeBanner = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1199px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1199px)");

    const handleMediaChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

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
          {(isMobile ? smBanner : banners).map((item, index) => (
            <SwiperSlide key={index} className="service_slide">
              <img src={item.img} alt="services" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
