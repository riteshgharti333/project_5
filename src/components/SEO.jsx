import { Helmet } from "react-helmet-async";
import serviceImage from "../assets/images/servicesimg/service1.jpeg";

const SEO = ({
  title = "Affordable Taxi & Car Rental Services | Book Now!",
  description = "Find the best taxi and car rental services in your city. Affordable prices, safe rides, and 24/7 support. Book your ride today!",
  keywords = "taxi rental, car hire, affordable taxi, best rental services",
  url,
  image = serviceImage,
  author = "Global India Travel",
}) => {
  const currentUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");

  const fullImageUrl =
    image.startsWith("http") ? image : `${window.location.origin}${image}`;

  return (
    <Helmet>
      {/* Charset & Language */}
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Language" content="en" />

      {/* ✅ Updated Title & Description for SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* ✅ Added Keywords Meta Tag */}
      <meta name="keywords" content={keywords} />

      {/* ✅ Added Author Meta Tag */}
      <meta name="author" content={author} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph (Facebook & Instagram) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullImageUrl} />

      {/* Structured Data (Schema Markup) for Google SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Global India Travel",
          "url": currentUrl,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "wz95/ Dharmpal Niwas",
            "addressLocality": "Thodapur Indar Puri",
            "addressRegion": "New Delhi",
            "postalCode": "110012",
            "addressCountry": "India",
          },
          "phone": "+91 70118 90082",
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
