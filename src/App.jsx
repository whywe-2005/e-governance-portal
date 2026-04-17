import "./App.css";
import Aadhaar from "./pages/Aadhaar";
import Pan from "./pages/Pan";
import Vehicle from "./pages/Vehicle";
import Education from "./pages/Education";
import Passport from "./pages/Passport";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aadhaar" element={<Aadhaar />} />
        <Route path="/pan" element={<Pan />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/education" element={<Education />} />
        <Route path="/passport" element={<Passport />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
