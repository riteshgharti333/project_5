import { Helmet } from "react-helmet-async";
import logo from "../assets/images/logo.png";

const SEO = ({
  title = "Best Taxi & Cab Service in India | Affordable Rides",
  description = "Book the best taxi service in India. Explore global India tours, cab service, driver booking, and affordable rentals. View details now!",
  keywords = "taxi service, cab service, India tour, global India, driver booking, Delhi taxi, Mumbai cab, best rental services, service view, view detail, taxi service view, service view detail, India travel",
  url = "https://globalindiatravels.com",
  image = logo,
  author = "Global India Travel",
}) => {
  const fullImageUrl = image?.startsWith("https")
    ? image
    : `${url.replace(/\/$/, "")}/${image.replace(/^\//, "")}`;

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
          logo: fullImageUrl,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 70118 90082",
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: ["en"],
          },
          sameAs: [
            "https://www.facebook.com/story.php?story_fbid=122118610604656777&id=61569703324498&mibextid=WC7FNe&rdid=wWHCKsMY0g04aEGH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fp%2F1FSwuHsTm8%2F%3Fmibextid%3DWC7FNe#",
            "https://www.instagram.com/p/DGmowV8TTPv/?igsh=bzFnaW1xdG9zdW81",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
