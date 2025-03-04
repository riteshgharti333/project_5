import "./OurTaxi.scss";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ourTaxies } from "../../assets/data";

const OurTaxi = () => {
  return (
    <div className="ourTaxi">
      <div className="ourTaxi-top">
        <h1>Our taxi service : Trust the Wheel, Enjoy the Ride</h1>
        <p>
          Traveling across North India is a dream for many, and having a
          reliable car rental service can make this dream a reality. *Global
          india tour*is your go-to solution for all your travel needs, providing
          comfort, safety, and affordability. Let’s dive into why Global india
          tour should be your top choice for exploring the rich cultural
          heritage and breathtaking landscapes of North India.
        </p>
      </div>

      <div className="ourTaxi-cards">
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={20}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="photoAlbums-slider album-swiper"
          initialSlide={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {ourTaxies.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="ourTaxi-card">
                <img src={item.img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTaxi;
