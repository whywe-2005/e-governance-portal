import { useState } from "react";
import "./ServicePage.css";

const Vehicle = () => {
  const [formType, setFormType] = useState("license");
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/service", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ ...formData, serviceType:"vehicle", formType })
    });

    alert("Submitted");
  };

  return (
    <div className="service-layout">
      <div className="service-left">
        <h1>Vehicle Services</h1>

        <div className="service-menu">
          <button onClick={()=>setFormType("license")}>License</button>
          <button onClick={()=>setFormType("rc")}>RC Status</button>
          <button onClick={()=>setFormType("fine")}>Traffic Fines</button>
        </div>
      </div>

      <div className="service-right">
        <form className="service-form" onSubmit={handleSubmit}>
          <h2>{formType}</h2>

          <input placeholder="Owner Name" onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
          <input placeholder="Vehicle Number" onChange={(e)=>setFormData({...formData,vehicleNumber:e.target.value})}/>
          <input placeholder="License Number" onChange={(e)=>setFormData({...formData,licenseNumber:e.target.value})}/>
          <input placeholder="Chassis Number" onChange={(e)=>setFormData({...formData,chassis:e.target.value})}/>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Vehicle;