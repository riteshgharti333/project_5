import "./Gallery.scss";
import gallery_banner from "../../assets/images/photo-collage.webp";
import galleryImages from "../../assets/galleryData";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const animationEffects = [
  "fade-up",
  "fade-down",
  "zoom-in",
  "flip-left",
  "flip-right",
];

const getRandomEffect = () => {
  return animationEffects[Math.floor(Math.random() * animationEffects.length)];
};

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="gallery">
      <div className="gallery-banner" data-aos="fade-up">
        <img src={gallery_banner} alt="" />
        <h1>Gallery</h1>
      </div>

      <div className="gallery-content">
        <h1>Our Gallery</h1>
        <p>
          Discover the smiles of our happy customers! Our gallery showcases real
          experiences, comfortable rides, and the trust we build every day.
        </p>

        {/* Gallery Images */}
        <div className="gallery-imgs">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`gallery-img-${index}`}
              onClick={() => setSelectedImg(img)}
              data-aos={getRandomEffect()}
            />
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Fullscreen Preview" />
          <span className="close-btn" onClick={() => setSelectedImg(null)}>
            ×
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
