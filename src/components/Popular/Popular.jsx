import { popularDestinations } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Popular.scss";

const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-top">
        <h1>Popular Destinations</h1>
        <p>These popular destinations have a lot to offer</p>
      </div>
      <div className="popular-cards">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3.5}
          spaceBetween={20}
          navigation={true}
          speed={1200}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          className="popular-swiper"
        >
          {popularDestinations.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="popular-card">
                <img src={item.img} alt="" />

                <div className="bg-overlay"></div>
                <div className="popular-card-dsc">
                  <h2>{item.title}</h2>
                  <button>Explore Now</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
