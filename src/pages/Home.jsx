import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const servicesRef = useRef(null);
  const navigate = useNavigate();
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="main-content hero">
      <h1>Welcome to E-Governance Portal</h1>
      <p>
        Providing secure, transparent and efficient digital government services.
      </p>
      <div className="explore-label"> 
          Explore Services
      </div>
      <div className="services" ref={servicesRef}>
        <div
          className="service-card"
          onClick={() => navigate("/aadhaar")}
        >
          <h3>🆔 Aadhaar Services</h3>
          <p>Update details, download e-Aadhaar, check status.</p>
        </div>
        <div
          className="service-card"
          onClick={() => navigate("/pan")}
        >
          <h3>📄 PAN Services</h3>
          <p>Apply for PAN, track application, corrections.</p>
        </div>
        <div
          className="service-card"
          onClick={() => navigate("/vehicle")}
        >
          <h3>🚗 Vehicle Services</h3>
          <p>Driving license, RC status, traffic fines.</p>
        </div>
        <div
          className="service-card"
          onClick={() => navigate("/education")}
        >
          <h3>🎓 Education Services</h3>
          <p>Scholarships, certificates, exam results.</p>
        </div>
        <div className="service-card" onClick={() => navigate("/passport")}>
            <h3>✈️ Passport Services</h3>
            <p>Apply and renew passport easily with guidance.</p>
        </div>  
      </div>
    </div>
  );
}
export default Home;




