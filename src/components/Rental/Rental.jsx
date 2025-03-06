import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Rental.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ourTaxies } from "../../assets/data";

const Rental = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  return (
    <div className="rental">
      <div className="rental-top" data-aos="fade-up">
        <h1>Car Rental Service: Hassle-Free Rides, Every Mile Smiles</h1>
        <p>
          Exploring North India is an adventure filled with rich history,
          stunning landscapes, and vibrant cultures. To make your journey smooth
          and hassle-free, Global India Tour offers the perfect car rental
          service. Whether you're planning a road trip through the Himalayas or
          visiting iconic cities like Delhi, Jaipur, or Agra, we provide
          reliable, comfortable, and budget-friendly travel solutions.
        </p>
        <p>
          With a commitment to safety, convenience, and customer satisfaction,
          Global India Tour ensures that your North India travel experience is
          unforgettable. Choose us for a seamless and enjoyable ride as you
          discover the beauty of this incredible region!
        </p>
      </div>

      <div className="ourTaxi-cards" data-aos="fade-up">
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
            <SwiperSlide
              key={index}
            >
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

export default Rental;
