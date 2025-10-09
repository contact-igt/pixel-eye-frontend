import React from "react";
import styles from "./styles.module.css";
import { servicesData } from "./constant";
import ServiceCard from "@/common/ServiceCard";

const Services = ({handleTogglecontactForm}) => {
  return (
    <section className={styles.servicesSection}>
      <div className="container-md">
        <h2 className={styles.sectionTitle}>Our Eye Care Specialities</h2>
        <div className={`d-flex justify-content-evenly gap-5 align-items-center flex-wrap`}>
          {servicesData.map((service) => (
            <div className={styles.serviceCard} key={service.id}>
              <ServiceCard service={service} handleTogglecontactForm={handleTogglecontactForm} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
