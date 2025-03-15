import { Helmet } from "react-helmet-async";
import serviceImage from "../assets/images/servicesimg/service1.jpeg";

const SEO = ({
  title = "Best Taxi & Cab Service in India | Affordable Rides",
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
      {/* ✅ Charset & Language */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Language" content="en" />

      {/* ✅ Title & Meta Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* ✅ Keywords & Author Meta */}
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* ✅ Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* ✅ Hreflang for Multilingual SEO */}
      <link rel="alternate" hreflang="en" href="https://yourwebsite.com/en/" />
      <link rel="alternate" hreflang="hi" href="https://yourwebsite.com/hi/" />

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

      {/* ✅ Structured Data (Local SEO Fix) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Global India Travel",
          "url": currentUrl,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "WZ95, Dharmpal Niwas",
            "addressLocality": "Thodapur Indar Puri",
            "addressRegion": "New Delhi",
            "postalCode": "110012",
            "addressCountry": "India",
          },
          "telephone": "+91 70118 90082",
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
