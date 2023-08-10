import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home.jsx";
import Values from "./Values.jsx";
import DataProtection from "./DataProtection.jsx";
import Inquiry from "./Inquiry";
import Services from "./Services";
import OurTeam from "./OurTeam";
import ContactUs from "./ContactUs";
import Testimonials from "./Testimonials";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Blog from "./Blog.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="values" element={<Values />} />
        <Route path="/data-protection" element={<DataProtection />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
