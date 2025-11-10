import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "@/common/Button";
import { HomeData } from "@/constant/Home";
import CountUp from "react-countup";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

const HomeBanner = ({ data, handleScrollToAddress }) => {
  const router = useRouter();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [formData, setFormData] = useState({
    MobileNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.MobileNumber) {
      setError("Mobile number is required.");
      return;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.MobileNumber)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    try {
      setLoading(true);
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      const registerFormData = {
        name: formData?.PatientName,
        mobile: formData.MobileNumber,
        ip_address: ipData.ip,
        utm_source: localStorage.getItem("utm_source"),
        page_name: "sanathnagar",
      };
      const APISERVER =
        process.env.NEXT_PUBLIC_API_SERVER === "production"
          ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
          : process.env.NEXT_PUBLIC_API_SERVER === "stage"
          ? process.env.NEXT_PUBLIC_STAGE_API_URL
          : process.env.NEXT_PUBLIC_LOCALHOST_API_URL;
      const registerResponse = await fetch(`${APISERVER}/pixel-eye`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(registerFormData).toString(),
      });

      if (!registerResponse.ok) {
        setError("Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
      const newFormData = {
        PatientName: "",
        MobileNumber: formData.MobileNumber,
        IP_Address: ipData.ip,
        utm_source: localStorage.getItem("utm_source"),
      };
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxz-HpoU7v381Q8g38S7ZTO9A6BvyHJVTQUcsOx0g-DteQ7tr3RiKzOVpypzgPEmZrp/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(newFormData).toString(),
        }
      );
      await emailjs.send(
        "service_wiw9jr5",
        "template_gr9dlqd",
        {
          patient_name: formData.PatientName || "Guest Patient",
          mobile_number: formData.MobileNumber,
          service_name: "Eye Care Consultation",
          email_subject: "New Appointment Inquiry - Pixel Eye Hospitals",
          from_name: "Pixel Eye Hospitals",
          from_email: "info@pixeleyehospitals.com",
        },
        "4yBxE-kzbe7EuZqFh"
      );
      setLoading(false);
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.bannerContainer}>
      <div className="container-md">
        <div className="row align-items-center">
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
                <div className={styles.formContainer}>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="MobileNumber"
                      onChange={handleChange}
                      className="form-control border-start-0"
                      placeholder="Contact Number"
                      aria-label="Contact Number"
                    />
                  </div>
                  <Button
                    disabled={loading}
                    handleTogglecontactForm={handleSubmit}
                    name={
                      loading ? "Booking your callback… " : "Request a Callback"
                    }
                    bgcolor="#f5a623"
                    txtcolor="#000"
                  />
                </div>
                <div className={styles.error}>
                  <p className="small" style={{ color: "#ff6f61" }}>
                    {error}
                  </p>
                </div>
              </div>
              <div className={styles.statsContainer} ref={ref}>
                <div className={styles.statItem}>
                  <p className={styles.statValue}>
                    {inView && (
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
                    {inView && (
                      <CountUp
                        end={HomeData?.bannerData?.stat2value}
                        start={0}
                        duration={2.5}
                      />
                    )}
                    L+
                  </p>
                  <p className={styles.statLabel}>
                    {HomeData?.bannerData?.stat2label}
                  </p>
                </div>
                <div className={styles.statItem}>
                  <p className={styles.statValue}>
                    {inView && (
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
          <div className="col-lg-6">
            <img
              src={HomeData?.bannerData?.image}
              alt="Doctors"
              className={styles.bannerImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
