import React from "react";
import styles from "./styles.module.css";
import Button from "../Button";

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <div className="container-md d-flex justify-content-between align-items-center">
        <div className={`${styles.imgContainer} d-flex align-items-center`}>
          <a href="https://www.pixeleyehospitals.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/pixel_logo.png"
              alt="Pixel Eye Hospitals Logo"
              className={styles.logo}
            />
          </a>
        </div>
        <div className={`${styles.buttonGroup} d-flex gap-1 gap-md-3`}>
            <Button
              isicon={true}
              href={"tel:+917075008561"}
              name="Call 7075008561"
              bgcolor="#153b56"
              txtcolor="#fff"
              border="1px solid #153b56"
              icon={"phone"}
              iconcolor={"#fff"}
            />
            <Button
              href={"https://wa.me/917075008561"}
              name="Chat on WhatsApp"
              bgcolor="#153b56"
              txtcolor="#ffffff"
              imgicon={"/assets/whatsapp.png"}
              isimg={true}
            />
          </div>
      </div>
    </div>
  );
};

export default TopHeader;
