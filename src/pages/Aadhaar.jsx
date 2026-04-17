import { useState } from "react";
import "./ServicePage.css";

const Aadhaar = () => {
  const [formType, setFormType] = useState("update");
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/service", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ ...formData, serviceType:"aadhaar", formType })
    });

    alert("Submitted");
  };

  return (
    <div className="service-layout">
      <div className="service-left">
        <h1>Aadhaar Services</h1>

        <div className="service-menu">
          <button onClick={()=>setFormType("update")}>Update</button>
          <button onClick={()=>setFormType("download")}>Download</button>
          <button onClick={()=>setFormType("status")}>Status</button>
        </div>
      </div>

      <div className="service-right">
        <form className="service-form" onSubmit={handleSubmit}>
          <h2>{formType}</h2>

          <input placeholder="Full Name" onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
          <input type="date" onChange={(e)=>setFormData({...formData,dob:e.target.value})}/>
          
          <select onChange={(e)=>setFormData({...formData,gender:e.target.value})}>
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input placeholder="Aadhaar Number" maxLength="12"
          onChange={(e)=>setFormData({...formData,aadhaarNumber:e.target.value})}/>

          <input placeholder="Address"
          onChange={(e)=>setFormData({...formData,address:e.target.value})}/>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Aadhaar;