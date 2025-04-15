// Optimized App.jsx with React.lazy + Suspense for route-level code splitting
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import ScrollToTopAndTrack from "./components/ScrollToTopAndTrack";

// Lazy-loaded pages
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const About = lazy(() => import("./pages/About/About"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const Blog2 = lazy(() => import("./pages/Blog/Blog2"));
const Blog3 = lazy(() => import("./pages/Blog/Blog3"));
const Blog4 = lazy(() => import("./pages/Blog/Blog4"));
const Blog5 = lazy(() => import("./pages/Blog/Blog5"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

// Services
const TaxiService = lazy(() =>
  import("./pages/OurServices/TaxiService/TaxiService")
);
const TourGuide = lazy(() => import("./pages/OurServices/TourGuide/TourGuide"));
const Service1 = lazy(() => import("./pages/Services/Service1/Service1"));
const Service2 = lazy(() => import("./pages/Services/Service2/Service2"));
const Service3 = lazy(() => import("./pages/Services/Service3/Service3"));
const Service4 = lazy(() => import("./pages/Services/Service4/Service4"));
const Service5 = lazy(() => import("./pages/Services/Service5/Service5"));
const Service6 = lazy(() => import("./pages/Services/Service6/Service6"));
const Service7 = lazy(() => import("./pages/Services/Service7/Service7"));
const Service8 = lazy(() => import("./pages/Services/Service8/Service8"));

// Main Destinations
const MainDestination1 = lazy(() =>
  import("./pages/MainDestinations/MainDestination1/MainDestination1")
);
const MainDestination2 = lazy(() =>
  import("./pages/MainDestinations/MainDestination2/MainDestination2")
);
const MainDestination3 = lazy(() =>
  import("./pages/MainDestinations/MainDestination3/MainDestination3")
);
const MainDestination4 = lazy(() =>
  import("./pages/MainDestinations/MainDestination4/MainDestination4")
);
const MainDestination5 = lazy(() =>
  import("./pages/MainDestinations/MainDestination5/MainDestination5")
);

// Regional Destinations
const RajasthanDestination1 = lazy(() =>
  import(
    "./pages/Destinations/RajasthanDestinations/RajasthanDestination1/RajasthanDestination1"
  )
);
const RajasthanDestination2 = lazy(() =>
  import(
    "./pages/Destinations/RajasthanDestinations/RajasthanDestination2/RajasthanDestination2"
  )
);
const RajasthanDestination3 = lazy(() =>
  import(
    "./pages/Destinations/RajasthanDestinations/RajasthanDestination3/RajasthanDestination3"
  )
);
const RajasthanDestination4 = lazy(() =>
  import(
    "./pages/Destinations/RajasthanDestinations/RajasthanDestination4/RajasthanDestination4"
  )
);
const RajasthanDestination5 = lazy(() =>
  import(
    "./pages/Destinations/RajasthanDestinations/RajasthanDestination5/RajasthanDestination5"
  )
);
const UpDestination1 = lazy(() =>
  import("./pages/Destinations/UpDestinations/UpDestination1/UpDestination1")
);
const UpDestination2 = lazy(() =>
  import("./pages/Destinations/UpDestinations/UpDestination2/UpDestination2")
);
const UpDestination3 = lazy(() =>
  import("./pages/Destinations/UpDestinations/UpDestination3/UpDestination3")
);
const UpDestination4 = lazy(() =>
  import("./pages/Destinations/UpDestinations/UpDestination4/UpDestination4")
);
const PbDestination1 = lazy(() =>
  import(
    "./pages/Destinations/PunjabDestinations/PbDestination1/PbDestination1"
  )
);
const PbDestination2 = lazy(() =>
  import(
    "./pages/Destinations/PunjabDestinations/PbDestination2/PbDestination2"
  )
);
const HpDestination1 = lazy(() =>
  import("./pages/Destinations/HpDestinations/HpDestination1/HpDestination1")
);
const HpDestination2 = lazy(() =>
  import("./pages/Destinations/HpDestinations/HpDestination2/HpDestination2")
);
const HpDestination3 = lazy(() =>
  import("./pages/Destinations/HpDestinations/HpDestination3/HpDestination3")
);
const UkDestination1 = lazy(() =>
  import("./pages/Destinations/UkDestinations/UkDestination1/UkDestination1")
);
const UkDestination2 = lazy(() =>
  import("./pages/Destinations/UkDestinations/UkDestination2/UkDestination2")
);
const UkDestination3 = lazy(() =>
  import("./pages/Destinations/UkDestinations/UkDestination3/UkDestination3")
);

// Outstation Services
const OutstationService1 = lazy(() =>
  import("./pages/TaxiOutstationServices/OutstationService1/OutstationService1")
);
const OutstationService2 = lazy(() =>
  import("./pages/TaxiOutstationServices/OutstationService2/OutstationService2")
);
const OutstationService3 = lazy(() =>
  import("./pages/TaxiOutstationServices/OutstationService3/OutstationService3")
);
const OutstationService4 = lazy(() =>
  import("./pages/TaxiOutstationServices/OutstationService4/OutstationService4")
);
const OutstationService5 = lazy(() =>
  import("./pages/TaxiOutstationServices/OutstationService5/OutstationService5")
);
const OutstationService6 = lazy(() =>
  import("./pages/TaxiOutstationServices/OutstationService6/OutstationService6")
);
const Tempo = lazy(() => import("./pages/Tempo/Tempo"));

function App() {
  return (
    <div className="app">
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTopAndTrack />
          <Navbar />
          <FloatingButtons />

          <Suspense fallback={<div style={{ height: "100vh" }} />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/blog" element={<Blogs />} />
              <Route
                path="/blog/best-places-to-celebrate-holi-festival-in-india"
                element={<Blog />}
              />
              <Route
                path="/blog/amazing-experiences-awaiting-you-on-the-golden-triangle-tour"
                element={<Blog2 />}
              />
              <Route
                path="/blog/best-way-to-spend-luxury-vacation-in-india"
                element={<Blog3 />}
              />
              <Route
                path="/blog/best-road-trips-to-experience-rajasthan"
                element={<Blog4 />}
              />
              <Route
                path="/blog/best-things-to-do-in-udaipur"
                element={<Blog5 />}
              />
              <Route path="/our-gallery" element={<Gallery />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/india-taxi-service" element={<TaxiService />} />
              <Route path="/tour-guide" element={<TourGuide />} />
              <Route path="/delhi-taxi-service" element={<Service1 />} />
              <Route path="/uttarakhand-taxi-service" element={<Service2 />} />
              <Route path="/himachal-taxi-service" element={<Service3 />} />
              <Route path="/rajasthan-taxi-service" element={<Service4 />} />
              <Route
                path="/uttar-pradesh-taxi-service"
                element={<Service5 />}
              />
              <Route path="/punjab-taxi-service" element={<Service6 />} />
              <Route path="/haryana-taxi-service" element={<Service7 />} />
              <Route
                path="/jammu-kashmir-taxi-service"
                element={<Service8 />}
              />
              <Route
                path="/rajasthan-destinations"
                element={<MainDestination1 />}
              />
              <Route
                path="/uttar-pradesh-destinations"
                element={<MainDestination2 />}
              />
              <Route
                path="/punjab-destinations"
                element={<MainDestination3 />}
              />
              <Route
                path="/himachal-pradesh-destinations"
                element={<MainDestination4 />}
              />
              <Route
                path="/uttarakhand-destinations"
                element={<MainDestination5 />}
              />
              <Route
                path="/jaipur-destination"
                element={<RajasthanDestination1 />}
              />
              <Route
                path="/ranthambore-destination"
                element={<RajasthanDestination2 />}
              />
              <Route
                path="/udaipur-destination"
                element={<RajasthanDestination3 />}
              />
              <Route
                path="/jaisalmer-destination"
                element={<RajasthanDestination4 />}
              />
              <Route
                path="/pushkar-destination"
                element={<RajasthanDestination5 />}
              />
              <Route path="/agra-destination" element={<UpDestination1 />} />
              <Route
                path="/varanasi-destination"
                element={<UpDestination2 />}
              />
              <Route path="/ayodhya-destination" element={<UpDestination3 />} />
              <Route
                path="/bodh-gaya-destination"
                element={<UpDestination4 />}
              />
              <Route
                path="/amritsar-destination"
                element={<PbDestination1 />}
              />
              <Route
                path="/chandigarh-destination"
                element={<PbDestination2 />}
              />
              <Route path="/shimla-destination" element={<HpDestination1 />} />
              <Route path="/manali-destination" element={<HpDestination2 />} />
              <Route
                path="/dharamshala-destination"
                element={<HpDestination3 />}
              />
              <Route
                path="/nainital-destination"
                element={<UkDestination1 />}
              />
              <Route
                path="/rishikesh-haridwar-destination"
                element={<UkDestination2 />}
              />
              <Route
                path="/kedarnath-badrinath-destination"
                element={<UkDestination3 />}
              />
              <Route
                path="/delhi-to-rajasthan-taxi-service"
                element={<OutstationService1 />}
              />
              <Route
                path="/delhi-to-himachal-pradesh-taxi-service"
                element={<OutstationService2 />}
              />
              <Route
                path="/delhi-to-uttarakhand-taxi-service"
                element={<OutstationService3 />}
              />
              <Route
                path="/delhi-to-punjab-taxi-service"
                element={<OutstationService4 />}
              />
              <Route
                path="/delhi-to-jammu-kashmir-taxi-service"
                element={<OutstationService5 />}
              />
              <Route
                path="/delhi-to-uttar-pradesh-taxi-service"
                element={<OutstationService6 />}
              />
              <Route path="/tempo-service" element={<Tempo />} />
            </Routes>
          </Suspense>

          <Footer />
          <Toaster
            toastOptions={{
              style: {
                fontFamily: "Jost, sans-serif",
                fontSize: "18px",
                fontWeight: "600",
              },
            }}
          />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
