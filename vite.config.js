import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://globalindiatravels.com", // Your website domain
      exclude: ["/404"], // Exclude 404 or any unwanted pages
      routes: [
        "/",  
        "/about-us",
        "/blog",
        "/our-gallery",
        "/contact-us",
        "/india-taxi-service",
        "/tour-guide",
        "/delhi-taxi-service",
        "/uttarakhand-taxi-service",
        "/himachal-taxi-service",
        "/rajasthan-taxi-service",
        "/uttar-pradesh-taxi-service",
        "/punjab-taxi-service",
        "/haryana-taxi-service",
        "/jammu-kashmir-taxi-service",
        "/rajasthan-destinations",
        "/uttar-pradesh-destinations",
        "/punjab-destinations",
        "/himachal-pradesh-destinations",
        "/uttarakhand-destinations",
        "/jaipur-destination",
        "/ranthambore-destination",
        "/udaipur-destination",
        "/jaisalmer-destination",
        "/pushkar-destination",
        "/agra-destination",
        "/varanasi-destination",
        "/ayodhya-destination",
        "/bodh-gaya-destination",
        "/amritsar-destination",
        "/chandigarh-destination",
        "/shimla-destination",
        "/manali-destination",
        "/dharamshala-destination",
        "/nainital-destination",
        "/rishikesh-haridwar-destination",
        "/kedarnath-badrinath-destination",
        "/delhi-to-rajasthan-taxi-service",
        "/delhi-to-himachal-pradesh-taxi-service",
        "/delhi-to-uttarakhand-taxi-service",
        "/delhi-to-punjab-taxi-service",
        "/delhi-to-jammu-kashmir-taxi-service",
        "/delhi-to-uttar-pradesh-taxi-service",
        "/tempo-service",
        "/blog/best-places-to-celebrate-holi-festival-in-india",
        "/blog/amazing-experiences-awaiting-you-on-the-golden-triangle-tour",
        "/blog/best-way-to-spend-luxury-vacation-in-india",
        "/blog/best-road-trips-to-experience-rajasthan",
        "/blog/best-things-to-do-in-udaipur"
      ]
    })
  ],
  build: {
    outDir: "dist",
  },
});
