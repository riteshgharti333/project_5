import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Service1 from "./pages/Services/Service1/Service1";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />

          {/* Services */}

          <Route path="/delhi-taxi-service" element={<Service1 />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
