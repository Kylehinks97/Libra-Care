import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home.jsx";
import Values from "./Values.jsx";
import DataProtection from "./DataProtection.jsx";
import Inquiry from "./Inquiry";
import Services from "./Services";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/values" element={<Values />} />
        <Route path="/data-protection" element={<DataProtection />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
