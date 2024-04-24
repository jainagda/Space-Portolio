"use client"
import React, { useState } from "react";

interface EnquireFormProps{
    onClose?:(()=> void | undefined) |  undefined
}
const EnquireForm = ({onClose }:EnquireFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    data: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    let newValue = value;
      // Check if the input is for the phone number
      if (name === "phone") {
        // Remove any non-numeric characters
        newValue = value.replace(/\D/g, "");
        // Limit to 10 digits
        newValue = newValue.slice(0, 10);
      }
  
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async () => {
    console.log("formData",formData)
    try {
      // Replace this URL with your API endpoint
      const response = await fetch("https://a.sumitnegi.xyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("res",data);
      onClose && onClose()
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="wrapperEF">
      
      <div className="contact-form">
      <div className="titleEF">
        <h1>Enquiry Form</h1>
      </div>
        <div className="input-fields">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="Email Address"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            placeholder="Phone"
          />
         
        </div>
        <div className="msg" style={{marginTop:"10px"}}>
          <textarea
            name="data"
            value={formData.data}
            onChange={handleChange}
            placeholder="Message"
          ></textarea>
          <div className="btn" onClick={handleSubmit}>
            Send
          </div>
          <div className="btn" onClick={()=> onClose && onClose()}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquireForm;
