import Button from "@/common/Button";
import React, { useState } from "react";
import styles from "./styles.module.css";
import emailjs from "emailjs-com";
import { serviceOptions } from "@/constant/Home";
import dynamic from "next/dynamic";

const CustomSelect = dynamic(() => import("@/common/CustomSelect"), { ssr: false });

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    PatientName: "",
    MobileNumber: "",
    Service: "",
  });
  const [errors, setErrors] = useState({
    PatientName: "",
    MobileNumber: "",
    Service: "",
  });
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, Service: value });
    setErrors({ ...errors, Service: "" });
  };

  const validate = () => {
    const newErrors = { PatientName: "", MobileNumber: "", Service: "" };
    let valid = true;

    if (!formData.PatientName.trim()) {
      newErrors.PatientName = "Name is required.";
      valid = false;
    }

    if (!formData.MobileNumber) {
      newErrors.MobileNumber = "Mobile number is required.";
      valid = false;
    } else if (!/^[6-9]\d{9}$/.test(formData.MobileNumber)) {
      newErrors.MobileNumber = "Enter a valid 10-digit mobile number.";
      valid = false;
    }

    if (!formData.Service) {
      newErrors.Service = "Please select a service.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();

      const newFormData = {
        PatientName: formData.PatientName,
        MobileNumber: formData.MobileNumber,
        Service: formData.Service,
        IP_Address: ipData.ip,
        utm_source: localStorage.getItem("utm_source"),
      };
      console.log("newFormData", newFormData)
      await fetch(
        "https://script.google.com/macros/s/AKfycbxNRDdmbe0CV8xYgZrXmYE1Dwzab4p5La8TfZQZJtxdR0L8u1bQk0xRu3qn7Quojl8F/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(newFormData).toString(),
        }
      );
      await emailjs.send(
        "service_wiw9jr5",
        "template_gr9dlqd",
        {
          patient_name: formData.PatientName,
          mobile_number: formData.MobileNumber,
          service_name: formData.Service,
          email_subject: "New Appointment Inquiry - Pixel Eye Hospitals",
          from_name: "Pixel Eye Hospitals",
          from_email: "info@pixeleyehospitals.com",
        },
        "4yBxE-kzbe7EuZqFh"
      );
      setLoading(false);
      window.location.href = "/thank-you";
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  const errorStyle = { color: "#ff6f61", fontSize: "0.82rem", marginTop: "4px" };

  return (
    <div className={`${styles.card}`}>
      <h4 className="fw-semibold mb-4 text-2xl" style={{ color: "#2A3B77" }}>
        Book Consultation
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            suppressHydrationWarning
            type="text"
            name="PatientName"
            onChange={handleChange}
            className={`form-control rounded-3 py-3${errors.PatientName ? " is-invalid" : ""}`}
            placeholder="Patient Name"
            aria-label="Patient Name"
          />
          {errors.PatientName ? <p style={errorStyle}>{errors.PatientName}</p> : null}
        </div>

        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0 rounded-start-3 py-3">
              +91
            </span>
            <input
              suppressHydrationWarning
              name="MobileNumber"
              type="tel"
              onChange={handleChange}
              className={`form-control border-start-0 rounded-end-3${errors.MobileNumber ? " is-invalid" : ""}`}
              placeholder="Mobile Number"
              aria-label="Mobile Number"
            />
          </div>
          {errors.MobileNumber ? <p style={errorStyle}>{errors.MobileNumber}</p> : null}
        </div>

        <div className="mb-3">
          <CustomSelect
            options={serviceOptions}
            value={formData.Service}
            onChange={handleServiceChange}
            placeholder="Select a Service"
            error={errors.Service}
          />
          {errors.Service ? <p style={errorStyle}>{errors.Service}</p> : null}
        </div>

        {submitError ? <p style={{ ...errorStyle, marginBottom: "8px" }}>{submitError}</p> : null}
        <div className="d-grid mt-2">
          <Button
            disabled={loading}
            name={loading ? "Booking..." : "Book Now"}
            bgcolor="#f5a623"
            txtcolor="#000"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
