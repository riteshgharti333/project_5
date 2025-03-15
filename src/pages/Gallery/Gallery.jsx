import "./Gallery.scss";
import gallery_banner from "../../assets/images/photo-collage.webp";
import { galleryImages } from "../../assets/galleryData";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SEO from "../../components/SEO";

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
      <SEO
        title="Gallery | Explore Our Taxi & Car Rental Services in Pictures"
        description="Browse our gallery to see our premium taxi and car rental fleet. Explore high-quality images of our vehicles, services, and happy customers."
        url={window.location.href}
        keywords="taxi gallery, car rental images, taxi service photos, vehicle fleet, rental car pictures, best taxi service, travel gallery, taxi service showcase"
      />

      <div className="gallery-banner" data-aos="fade-up">
        <img src={gallery_banner} alt={gallery_banner} loading="lazy" />
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
          {galleryImages.map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={item.title}
              onClick={() => setSelectedImg(item.img)}
              data-aos={getRandomEffect()}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Fullscreen Preview" loading="lazy" />
          <span className="close-btn" onClick={() => setSelectedImg(null)}>
            ×
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
