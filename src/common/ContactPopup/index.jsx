import React from "react";
import { Popup } from "../Popup";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

export const ContactPopup = ({ open, onClose }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    // You can close the popup after successful submission
    // onClose();
  };

  return (
    <Popup open={open} onClose={onClose}>
      <div className={styles.contactPopupContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close popup"
        >
          <DynamicIcon name="x" size={24} />
        </button>

        <h2 className={styles.title}>Contact Us</h2>

        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <DynamicIcon name="map-pin" size={20} />
            </div>
            <div className={styles.infoText}>
              <h4>Address</h4>
              <p>
                Fourth floor, Commercial Complex PNR Highnest, 1-2-22/PNRHN/3/B,
                Hyder Nagar, Dharma Reddy Colony Phase II, Kukatpally Housing
                Board Colony, Kukatpally, Hyderabad, Telangana-500085
              </p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <DynamicIcon name="phone" size={20} />
            </div>
            <div className={styles.infoText}>
              <h4>Phone</h4>
              <p>
                <a href="tel:+917075008561">+91 70750 08561</a>
              </p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <DynamicIcon name="mail" size={20} />
            </div>
            <div className={styles.infoText}>
              <h4>Email</h4>
              <p>
                <a href="mailto:info@pixeleyehospitals.com">
                  info@pixeleyehospitals.com
                </a>
              </p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <DynamicIcon name="clock" size={20} />
            </div>
            <div className={styles.infoText}>
              <h4>Visiting Hours</h4>
              <p>Sunday : 10:00 AM - 03:00 PM</p>
              <p>Monday - Saturday : 09:00 AM - 07:00 PM</p>
            </div>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3>Send us a Message</h3>
          
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </Popup>
  );
};
