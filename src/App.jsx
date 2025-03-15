import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";

import Service1 from "./pages/Services/Service1/Service1";
import Service2 from "./pages/Services/Service2/Service2";
import Service3 from "./pages/Services/Service3/Service3";
import Service4 from "./pages/Services/Service4/Service4";
import Service5 from "./pages/Services/Service5/Service5";
import Service6 from "./pages/Services/Service6/Service6";
import Service7 from "./pages/Services/Service7/Service7";
import Service8 from "./pages/Services/Service8/Service8";
import Blogs from "./pages/Blogs/Blogs";
import Blog from "./pages/Blog/Blog";
import { useEffect } from "react";

import MainDestination1 from "./pages/MainDestinations/MainDestination1/MainDestination1";
import MainDestination2 from "./pages/MainDestinations/MainDestination2/MainDestination2";
import MainDestination3 from "./pages/MainDestinations/MainDestination3/MainDestination3";
import MainDestination4 from "./pages/MainDestinations/MainDestination4/MainDestination4";
import MainDestination5 from "./pages/MainDestinations/MainDestination5/MainDestination5";

import RajasthanDestination1 from "./pages/Destinations/RajasthanDestinations/RajasthanDestination1/RajasthanDestination1";
import RajasthanDestination2 from "./pages/Destinations/RajasthanDestinations/RajasthanDestination2/RajasthanDestination2";
import RajasthanDestination3 from "./pages/Destinations/RajasthanDestinations/RajasthanDestination3/RajasthanDestination3";
import RajasthanDestination4 from "./pages/Destinations/RajasthanDestinations/RajasthanDestination4/RajasthanDestination4";
import RajasthanDestination5 from "./pages/Destinations/RajasthanDestinations/RajasthanDestination5/RajasthanDestination5";

import UpDestination1 from "./pages/Destinations/UpDestinations/UpDestination1/UpDestination1";
import UpDestination2 from "./pages/Destinations/UpDestinations/UpDestination2/UpDestination2";
import UpDestination3 from "./pages/Destinations/UpDestinations/UpDestination3/UpDestination3";
import UpDestination4 from "./pages/Destinations/UpDestinations/UpDestination4/UpDestination4";

import PbDestination1 from "./pages/Destinations/PunjabDestinations/PbDestination1/PbDestination1";
import PbDestination2 from "./pages/Destinations/PunjabDestinations/PbDestination2/PbDestination2";

import HpDestination1 from "./pages/Destinations/HpDestinations/HpDestination1/HpDestination1";
import HpDestination2 from "./pages/Destinations/HpDestinations/HpDestination2/HpDestination2";
import HpDestination3 from "./pages/Destinations/HpDestinations/HpDestination3/HpDestination3";

import UkDestination1 from "./pages/Destinations/UkDestinations/UkDestination1/UkDestination1";
import UkDestination2 from "./pages/Destinations/UkDestinations/UkDestination2/UkDestination2";
import UkDestination3 from "./pages/Destinations/UkDestinations/UkDestination3/UkDestination3";
import Gallery from "./pages/Gallery/Gallery";
import TourGuide from "./pages/OurServices/TourGuide/TourGuide";
import TaxiService from "./pages/OurServices/TaxiService/TaxiService";
import Contact from "./pages/Contact/Contact";

import OutstationService1 from "./pages/TaxiOutstationServices/OutstationService1/OutstationService1";
import OutstationService2 from "./pages/TaxiOutstationServices/OutstationService2/OutstationService2";
import OutstationService3 from "./pages/TaxiOutstationServices/OutstationService3/OutstationService3";
import OutstationService4 from "./pages/TaxiOutstationServices/OutstationService4/OutstationService4";
import OutstationService5 from "./pages/TaxiOutstationServices/OutstationService5/OutstationService5";
import OutstationService6 from "./pages/TaxiOutstationServices/OutstationService6/OutstationService6";

import Tempo from "./pages/Tempo/Tempo";

import Blog2 from "./pages/Blog/Blog2";
import Blog3 from "./pages/Blog/Blog3";
import Blog4 from "./pages/Blog/Blog4";
import Blog5 from "./pages/Blog/Blog5";

import { HelmetProvider } from "react-helmet-async";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import ScrollToTopAndTrack from "./components/ScrollToTopAndTrack";

function App() {
  return (
    <div className="app">
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTopAndTrack />
          <Navbar />
          <FloatingButtons />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/blog" element={<Blogs />} />

            <Route path="/our-gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<Contact />} />

            {/* Our Services */}
            <Route path="/india-taxi-service" element={<TaxiService />} />
            <Route path="/tour-guide" element={<TourGuide />} />

            {/* Services */}

            <Route path="/delhi-taxi-service" element={<Service1 />} />
            <Route path="/uttarakhand-taxi-service" element={<Service2 />} />
            <Route path="/himachal-taxi-service" element={<Service3 />} />
            <Route path="/rajasthan-taxi-service" element={<Service4 />} />
            <Route path="/uttar-pradesh-taxi-service" element={<Service5 />} />
            <Route path="/punjab-taxi-service" element={<Service6 />} />
            <Route path="/haryana-taxi-service" element={<Service7 />} />
            <Route path="/jammu-kashmir-taxi-service" element={<Service8 />} />

            {/* Main Destinations */}
            <Route
              path="/rajasthan-destinations"
              element={<MainDestination1 />}
            />

            <Route
              path="/uttar-pradesh-destinations"
              element={<MainDestination2 />}
            />

            <Route path="/punjab-destinations" element={<MainDestination3 />} />
            <Route
              path="/himachal-pradesh-destinations"
              element={<MainDestination4 />}
            />

            <Route
              path="/uttarakhand-destinations"
              element={<MainDestination5 />}
            />

            {/* Destinations */}

            {/* RJ Destination */}
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

            {/* UP Destination */}
            <Route path="/agra-destination" element={<UpDestination1 />} />
            <Route path="/varanasi-destination" element={<UpDestination2 />} />
            <Route path="/ayodhya-destination" element={<UpDestination3 />} />
            <Route path="/bodh-gaya-destination" element={<UpDestination4 />} />

            {/* Punjab Destination */}
            <Route path="/amritsar-destination" element={<PbDestination1 />} />
            <Route
              path="/chandigarh-destination"
              element={<PbDestination2 />}
            />

            {/* Himachal Destination */}
            <Route path="/shimla-destination" element={<HpDestination1 />} />
            <Route path="/manali-destination" element={<HpDestination2 />} />
            <Route
              path="/dharamshala-destination"
              element={<HpDestination3 />}
            />

            {/* Uttrakhand Destination */}
            <Route path="/nainital-destination" element={<UkDestination1 />} />
            <Route
              path="/rishikesh-haridwar-destination"
              element={<UkDestination2 />}
            />
            <Route
              path="/kedarnath-badrinath-destination"
              element={<UkDestination3 />}
            />

            {/* OutStation Services */}
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

            {/* blog */}
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
          </Routes>
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
