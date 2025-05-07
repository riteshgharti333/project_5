import "./Same.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import banner_img from "../../assets/images/banner_img.jpg";

const SameBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="sameBanner">
      <div className="sameBanner-banner" data-aos="fade-up">
        <img src={banner_img} alt={banner_img} loading="lazy" />

        <div className="sameBanner-banner-desc">
          <h1>Same Day Service</h1>
        </div>
      </div>
    </div>
  );
};

export default SameBanner;
