import React from "react";
import { Popup } from "../Popup";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

export const AboutPopup = ({ open, onClose }) => {
  return (
    <Popup open={open} onClose={onClose}>
      <div className={styles.aboutPopupContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close popup"
        >
          <DynamicIcon name="x" size={24} />
        </button>

        <h2 className={styles.title}>About Us</h2>

        <div className={styles.content}>
          <p>
            In a world of technological advancements, where healthcare can sometimes feel impersonal, 
            Pixel Eye Hospital stands apart as the beacon of genuine care and compassion. At Pixel, 
            we believe that a patient isn't just a medical case - they're a person with a unique story, 
            hopes, and dreams.
          </p>

          <p>
            We are committed to revitalizing the age-old patient-doctor relationship that has been 
            fading away. Our approach isn't just about cutting-edge technology or surgical excellence, 
            although we pride ourselves on that. It's about the connection we forge with you, the trust 
            we build, and the assurance that your concerns matter.
          </p>

          <p>
            When you walk through our doors, you're not just a patient; you're a valued member of our 
            extended family. Our best ophthalmologists - Dr. Abdul Rasheed and Dr. Krishna Poojita - 
            take the time to listen, understand, and communicate with you, ensuring that you're an active 
            participant in your own healthcare journey.
          </p>

          <p>
            Pixel Eye Hospital in Kukatpally is where advanced medicine meets the warmth of human 
            connection. With us, your health is personal, your comfort is paramount, and your vision 
            for a better life is our shared goal.
          </p>

          <p>
            Discover a healthcare experience like no other, where patient-doctor relationships are at 
            the heart of everything we do. Pixel Eye Hospital, where you're not just a case; you're a 
            cherished individual.
          </p>

          <div className={styles.doctorSection}>
            <h3>Our Experts</h3>
            <div className={styles.doctorList}>
              <div className={styles.doctor}>
                <h4>Dr. Abdul Rasheed</h4>
                <p>Senior Ophthalmologist</p>
              </div>
              <div className={styles.doctor}>
                <h4>Dr. Krishna Poojita</h4>
                <p>Ophthalmologist</p>
              </div>
            </div>
          </div>

          <div className={styles.servicesSection}>
            <h3>Our Services</h3>
            <ul className={styles.servicesList}>
              <li>Cataract Surgery</li>
              <li>LASIK & Refractive Surgery</li>
              <li>Squint Correction</li>
              <li>Retina Treatment</li>
              <li>Glaucoma Treatment</li>
              <li>Pediatric Ophthalmology</li>
              <li>Dry Eye Treatment</li>
              <li>Keratoconus Treatment</li>
            </ul>
          </div>
        </div>
      </div>
    </Popup>
  );
};
