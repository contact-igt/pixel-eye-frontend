import React from "react";
import styles from "./styles.module.css";
import Button from "@/common/Button";

const ServiceCard = ({ service, handleTogglecontactForm }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={service.image}
          alt={service.title}
          className={styles.cardImage}
        />
        {service.newlyLaunched && (
          <span className={styles.newlyLaunched}>NEWLY LAUNCHED</span>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDescription}>{service.description}</p>
        <Button
          name="Learn More"
          bgcolor="#ffffff"
          txtcolor="#153b56"
          border="1px solid #153b56"
          href={service.link}
          target={"_blank"}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
