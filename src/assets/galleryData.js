const images = import.meta.glob("../assets/images/gallery/*.{jpeg,jpg,png}", {
  eager: true,
});

const galleryImages = Object.values(images).map((img) => img.default);

export default galleryImages;
