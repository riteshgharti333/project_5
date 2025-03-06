import { useEffect } from "react";
import "./Taxi.scss";
import { taxies } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Taxi = () => {
  useEffect(() => {
    const checkSwiper = setInterval(() => {
      if (
        document.querySelector(".taxi-swiper-prev") &&
        document.querySelector(".taxi-swiper-next")
      ) {
        clearInterval(checkSwiper);
        new Swiper(".taxi-swiper", {
          modules: [Navigation, Pagination],
          navigation: {
            nextEl: ".taxi-swiper-next",
            prevEl: ".taxi-swiper-prev",
          },
          loop: true,
        });
      }
    }, 100);
  }, []);

  return (
    <div className="taxi">
      <div className="taxi-top">
        <h1>India Taxi Packages</h1>
        <p>
          Planning to visit India? You're at the right place! Plan and book your
          incredible India tour package with our local experts and experience
          excellence with our personalized service throughout the tour.
        </p>
      </div>

      <div className="taxi-cards">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".taxi-swiper-next",
            prevEl: ".taxi-swiper-prev",
          }}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          className="taxi-swiper"
        >
          {taxies.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="taxi-card">
                <img src={item.img} alt={item.vehicle} />
                <div className="taxi-card-desc">
                  <div className="taxi-card-item">
                    <p>Taxi Vehicle Type</p>
                    <p>{item.vehicle}</p>
                  </div>
                  <div className="taxi-card-item">
                    <p>Rate Per KM</p>
                    <p>Rs. {item.rate} Per KM</p>
                  </div>
                  <div className="taxi-card-item">
                    <p>Driver Charges</p>
                    <p>Rs. {item.charges} per Day</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="taxi-swiper-prev">❮</div>
        <div className="taxi-swiper-next">❯</div>
      </div>
    </div>
  );
};

export default Taxi;
