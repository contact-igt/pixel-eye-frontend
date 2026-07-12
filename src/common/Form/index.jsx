import Button from "@/common/Button";
import React, { useState } from "react";
import styles from "./styles.module.css";
import emailjs from "emailjs-com";
import { serviceOptions } from "@/constant/Home";
import dynamic from "next/dynamic";
import { submitWebsiteLead } from "@/lib/leadSubmission";

const CustomSelect = dynamic(() => import("@/common/CustomSelect"), {
  ssr: false,
});

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
    const normalizedValue =
      name === "MobileNumber" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((prev) => ({ ...prev, [name]: normalizedValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, Service: value }));
    setErrors((prev) => ({ ...prev, Service: "" }));
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
      setSubmitError("");

      await submitWebsiteLead({
        formData,
        emailjs,
      });

      setLoading(false);
      window.location.href = "/thank-you";
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  const errorStyle = {
    color: "#ff6f61",
    fontSize: "0.82rem",
    marginTop: "4px",
  };

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
            value={formData.PatientName}
            onChange={handleChange}
            className={`form-control rounded-3 py-3${errors.PatientName ? " is-invalid" : ""}`}
            placeholder="Patient Name"
            aria-label="Patient Name"
          />
          {errors.PatientName ? (
            <p style={errorStyle}>{errors.PatientName}</p>
          ) : null}
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
              inputMode="numeric"
              maxLength={10}
              value={formData.MobileNumber}
              onChange={handleChange}
              className={`form-control border-start-0 rounded-end-3${errors.MobileNumber ? " is-invalid" : ""}`}
              placeholder="Mobile Number"
              aria-label="Mobile Number"
            />
          </div>
          {errors.MobileNumber ? (
            <p style={errorStyle}>{errors.MobileNumber}</p>
          ) : null}
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

        {submitError ? (
          <p style={{ ...errorStyle, marginBottom: "8px" }}>{submitError}</p>
        ) : null}
        <div className="d-grid mt-2">
          <Button
            type="submit"
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
