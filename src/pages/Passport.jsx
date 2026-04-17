import { useState } from "react";
import "./ServicePage.css";

const Passport = () => {
  const [formType, setFormType] = useState("new");
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/service", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ ...formData, serviceType:"passport", formType })
    });

    alert("Submitted");
  };

  return (
    <div className="service-layout">
      <div className="service-left">
        <h1>Passport Services</h1>

        <div className="service-menu">
          <button onClick={()=>setFormType("new")}>New</button>
          <button onClick={()=>setFormType("renewal")}>Renewal</button>
          <button onClick={()=>setFormType("police")}>Police</button>
          <button onClick={()=>setFormType("status")}>Status</button>
        </div>
      </div>

      <div className="service-right">
        <form className="service-form" onSubmit={handleSubmit}>
          <h2>{formType}</h2>

          <input placeholder="Full Name" onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
          <input type="date" onChange={(e)=>setFormData({...formData,dob:e.target.value})}/>
          <input placeholder="Passport Number" onChange={(e)=>setFormData({...formData,passportNumber:e.target.value})}/>
          <input placeholder="Nationality" onChange={(e)=>setFormData({...formData,nationality:e.target.value})}/>
          <input placeholder="Address" onChange={(e)=>setFormData({...formData,address:e.target.value})}/>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Passport;