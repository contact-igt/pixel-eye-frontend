import React from "react";
import styles from "./styles.module.css";
import { CalendarClock, ClipboardCheck, MapPin } from "lucide-react";

const FooterCTA = ({ handleTogglecontactForm }) => {
  return (
    <div className={styles.footerCTA}>
      <div className={styles.ctaItem}>
        <div className={styles.icon}>
          <CalendarClock color="#153b56" size={30} />
        </div>
        <div
          className={styles.text}
          onClick={() => {
            handleTogglecontactForm();
          }}
        >
          <h4>Book an Appointment</h4>
          <p>+91 40 4244 4222</p>
        </div>
      </div>
      <div className={styles.ctaItem}>
        <div className={styles.icon}>
          <ClipboardCheck color="#153b56" size={30} />
        </div>
        <div
          className={styles.text}
          onClick={() => {
            handleTogglecontactForm();
          }}
        >
          <h4>Book Health Check</h4>
          <p>Assess your health</p>
        </div>
      </div>
      <div className={styles.ctaItem}>
        <div className={styles.icon}>
          <MapPin color="#153b56" size={30} />
        </div>
        <div
          className={styles.text}
          onClick={() => {
            handleTogglecontactForm();
          }}
        >
          <h4>Find Hospital</h4>
          <p>Best care near you</p>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
