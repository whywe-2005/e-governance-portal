import { useState } from "react";
import "./ServicePage.css";

const Education = () => {
  const [formType, setFormType] = useState("scholarship");
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/service", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ ...formData, serviceType:"education", formType })
    });

    alert("Submitted");
  };

  return (
    <div className="service-layout">
      <div className="service-left">
        <h1>Education Services</h1>

        <div className="service-menu">
          <button onClick={()=>setFormType("scholarship")}>Scholarship</button>
          <button onClick={()=>setFormType("certificate")}>Certificate</button>
          <button onClick={()=>setFormType("result")}>Result</button>
        </div>
      </div>

      <div className="service-right">
        <form className="service-form" onSubmit={handleSubmit}>
          <h2>{formType}</h2>

          <input placeholder="Student Name" onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
          <input placeholder="Roll Number" onChange={(e)=>setFormData({...formData,roll:e.target.value})}/>
          <input placeholder="Institution" onChange={(e)=>setFormData({...formData,institute:e.target.value})}/>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Education;