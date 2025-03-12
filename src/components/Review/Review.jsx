import { useEffect } from "react";
import "./Review.scss";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import { FaUser } from "react-icons/fa";
import "aos/dist/aos.css";
import { reviews } from "../../assets/reviewData";

import google_img from "../../assets/images/reviews.png";

const Review = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="review">
      <div className="review-container">
        <div className="review-left" data-aos="fade-up">
          <div className="review-left-top">
            <h1>What our customers are saying?</h1>
            <p>
              Don't take our word, see what our clients have to say about us...
            </p>
            <a
              href="https://www.google.com/maps/place/Getway+Cab+Service/@28.6452237,77.1813131,17z/data=!4m8!3m7!1s0x390d033a0762b977:0x7df7e628feb2912f!8m2!3d28.645219!4d77.183888!9m1!1b1!16s%2Fg%2F11vb2vsxf7?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <img src={google_img} alt="" />
            </a>
          </div>

          <div className="review-left-desc">
            <div className="review-left-desc-item">
              <h1>13m+</h1>
              <p>Happy People</p>
            </div>

            <div className="review-left-desc-item">
              <h1>4.88</h1>
              <p>Overall rating</p>
            </div>
          </div>
        </div>

        <div className="review-right" data-aos="fade-up">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            navigation={{
              nextEl: ".review-swiper-next",
              prevEl: ".review-swiper-prev",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1200}
            className="review-swiper"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="review-right-card">
                  <div className="review-right-top">
                    <FaUser className="user-icon" />
                    <div className="review-right-top-item">
                      <p>{item.name}</p>

                      <div className="review-left-desc-item-stars">
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                        <FaStar className="star-icon" />
                      </div>
                    </div>
                  </div>
                  <h4>{item.review}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="review-swiper-prev">❮</div>
          <div className="review-swiper-next">❯</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
