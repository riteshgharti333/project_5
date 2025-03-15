import { Helmet } from "react-helmet-async";
import serviceImage from "../assets/images/servicesimg/service1.jpeg";

const SEO = ({
  title = "Best Taxi & Cab Service in India | Affordable Rides & Tours",
  description = "Book the best taxi service in India. Explore global India tours, cab service, driver booking, and affordable rentals. View details now!",
  keywords = "taxi service, cab service, India tour, global India, driver booking, Delhi taxi, Mumbai cab, best rental services, service view, view detail, taxi service view, service view detail, India travel",
  url,
  image = serviceImage,
  author = "Global India Travel",
}) => {
  const currentUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");

  const fullImageUrl =
    image?.startsWith("http") ? image : `${window.location.origin}${image || serviceImage}`;

  return (
    <Helmet>
      {/* ✅ Title & Meta Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* ✅ Keywords & Author Meta */}
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* ✅ Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* ✅ Open Graph for Facebook & Instagram */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullImageUrl} />

      {/* ✅ Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};

export default SEO;
