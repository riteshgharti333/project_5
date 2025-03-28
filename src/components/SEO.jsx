import { Helmet } from "react-helmet-async";
import serviceImage from "../assets/images/servicesimg/service1_result.webp";

const SEO = ({
  title = "Best Taxi & Cab Service in India | Affordable Rides",
  description = "Book the best taxi service in India. Explore global India tours, cab service, driver booking, and affordable rentals. View details now!",
  keywords = "taxi service, cab service, India tour, global India, driver booking, Delhi taxi, Mumbai cab, best rental services, service view, view detail, taxi service view, service view detail, India travel",
  url = "https://globalindiatravels.com", // Fallback URL for SSR
  image = serviceImage,
  author = "Global India Travel",
}) => {
  // ✅ Ensure consistent image URL for SSG (no window dependency)
  const fullImageUrl = image?.startsWith("http")
    ? image
    : `${import.meta.env.VITE_BASE_URL || url}/${image}`;

  return (
    <Helmet>
      {/* ✅ Charset & Language */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Language" content="en" />

      {/* ✅ Title & Meta Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* ✅ Keywords & Author */}
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* ✅ Canonical URL */}
      <link rel="canonical" href={url} />

      {/* ✅ Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />

      {/* ✅ Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* ✅ Structured Data (Better for SEO) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Global India Travel",
          url: url,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 70118 90082",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["en"],
          },
          sameAs: [
            "https://www.facebook.com/globalindiatravels",
            "https://www.instagram.com/globalindiatravels",
            "https://www.linkedin.com/company/globalindiatravels",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
