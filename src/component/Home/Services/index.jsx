import React from "react";
import styles from "./styles.module.css";
import ServiceCard from "@/common/ServiceCard";
import { HomeData } from "@/constant/Home";

const Services = ({ handleTogglecontactForm }) => {
  return (
    <section className={styles.servicesSection}>
      <div className="container-md">
        <h2 className={styles.sectionTitle}>{HomeData?.serviceData?.title}</h2>
        <div
          className={`d-flex justify-content-evenly gap-lg-5 gap-3 align-items-center flex-wrap`}
        >
          {HomeData?.serviceData?.servicesList?.map((service) => (
            <div className={styles.serviceCard} key={service.id}>
              <ServiceCard
                service={service}
                handleTogglecontactForm={handleTogglecontactForm}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
