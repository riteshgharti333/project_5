import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

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

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog1" element={<Blog />} />

          {/* Services */}

          <Route path="/delhi-taxi-service" element={<Service1 />} />
          <Route path="/uttarakhand-taxi-service" element={<Service2 />} />
          <Route path="/himachal-taxi-service" element={<Service3 />} />
          <Route path="/rajasthan-taxi-service" element={<Service4 />} />
          <Route path="/uttar-pradesh-taxi-service" element={<Service5 />} />
          <Route path="/punjab-taxi-service" element={<Service6 />} />
          <Route path="/haryana-taxi-service" element={<Service7 />} />
          <Route path="/jammu-kashmir-taxi-service" element={<Service8 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
