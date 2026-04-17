import { useState } from "react";
import "./ServicePage.css";

const Pan = () => {
  const [formType, setFormType] = useState("apply");
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/service", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ ...formData, serviceType:"pan", formType })
    });

    alert("Submitted");
  };

  return (
    <div className="service-layout">
      <div className="service-left">
        <h1>PAN Services</h1>

        <div className="service-menu">
          <button onClick={()=>setFormType("apply")}>Apply</button>
          <button onClick={()=>setFormType("track")}>Track</button>
          <button onClick={()=>setFormType("correction")}>Correction</button>
        </div>
      </div>

      <div className="service-right">
        <form className="service-form" onSubmit={handleSubmit}>
          <h2>{formType}</h2>

          <input placeholder="Full Name" onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
          <input type="date" onChange={(e)=>setFormData({...formData,dob:e.target.value})}/>
          <input placeholder="PAN Number (ABCDE1234F)" maxLength="10"
          onChange={(e)=>setFormData({...formData,panNumber:e.target.value})}/>
          <input placeholder="Email" onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
          <input placeholder="Phone Number" onChange={(e)=>setFormData({...formData,phone:e.target.value})}/>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Pan;