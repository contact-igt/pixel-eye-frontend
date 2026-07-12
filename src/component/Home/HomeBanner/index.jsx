import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Button from "@/common/Button";
import { HomeData, serviceOptions } from "@/constant/Home";
import CountUp from "react-countup";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import dynamic from "next/dynamic";
import { submitWebsiteLead } from "@/lib/leadSubmission";

const CustomSelect = dynamic(() => import("@/common/CustomSelect"), {
  ssr: false,
});

const HomeBanner = ({ data, handleScrollToAddress }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
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
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const errorStyle = { color: "#ff6f61", fontSize: "0.8rem", marginTop: "4px" };

  return (
    <div className={styles.bannerContainer}>
      <div className="container-md">
        <div className="row align-items-start">
          <div className="col-lg-6">
            <div className={styles.bannerContent}>
              <h1>{HomeData?.bannerData?.title}</h1>
              <p className={styles.subtitle}>
                {HomeData?.bannerData?.subtitle}
              </p>
              <h6
                className={styles.branchtitle}
                onClick={() => {
                  handleScrollToAddress();
                }}
              >
                {HomeData?.bannerData?.branch}
              </h6>
              <div className={styles.ctaContainer}>
                <p className={styles.appointmentText}>
                  {HomeData?.bannerData?.appointmentText}
                </p>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                  <div>
                    <input
                      suppressHydrationWarning
                      type="text"
                      name="PatientName"
                      value={formData.PatientName}
                      onChange={handleChange}
                      className={`form-control${errors.PatientName ? " is-invalid" : ""}`}
                      placeholder="Your Name"
                      aria-label="Patient Name"
                    />
                    {errors.PatientName ? (
                      <p style={errorStyle}>{errors.PatientName}</p>
                    ) : null}
                  </div>

                  <div>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        +91
                      </span>
                      <input
                        suppressHydrationWarning
                        type="tel"
                        name="MobileNumber"
                        inputMode="numeric"
                        maxLength={10}
                        value={formData.MobileNumber}
                        onChange={handleChange}
                        className={`form-control border-start-0${errors.MobileNumber ? " is-invalid" : ""}`}
                        placeholder="Contact Number"
                        aria-label="Contact Number"
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
                    {errors.Service ? (
                      <p style={errorStyle}>{errors.Service}</p>
                    ) : null}
                  </div>
                  {submitError ? <p style={errorStyle}>{submitError}</p> : null}

                  <Button
                    type="submit"
                    disabled={loading}
                    name={
                      loading ? "Booking your callback..." : "Request a Callback"
                    }
                    bgcolor="#f5a623"
                    txtcolor="#000"
                  />
                </form>
              </div>
              <div className={styles.statsContainer} ref={ref}>
                <div className={styles.statItem}>
                  <p className={styles.statValue}>
                    {mounted && inView && (
                      <CountUp
                        end={HomeData?.bannerData?.stat1value}
                        start={0}
                        duration={2.5}
                      />
                    )}
                    +
                  </p>
                  <p className={styles.statLabel}>
                    {HomeData?.bannerData?.stat1label}
                  </p>
                </div>
                <div className={styles.statItem}>
                  <p className={styles.statValue}>
                    {mounted && inView && (
                      <CountUp
                        end={HomeData?.bannerData?.stat2value}
                        start={0}
                        duration={2.5}
                      />
                    )}
                    &nbsp;Lakh+
                  </p>
                  <p className={styles.statLabel}>
                    {HomeData?.bannerData?.stat2label}
                  </p>
                </div>
                <div className={styles.statItem}>
                  <p className={styles.statValue}>
                    {mounted && inView && (
                      <CountUp
                        end={HomeData?.bannerData?.stat3value}
                        start={0}
                        duration={2.5}
                      />
                    )}
                    +
                  </p>
                  <p className={styles.statLabel}>
                    {HomeData?.bannerData?.stat3label}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className={styles.bannerImageWrapper}>
              <Image
                src={HomeData?.bannerData?.image}
                alt="Doctors"
                className={styles.bannerImage}
                width={720}
                height={720}
                priority
                sizes="(max-width: 992px) 100vw, 50vw"
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "1rem"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
