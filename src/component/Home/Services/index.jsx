import React from 'react';
import styles from './styles.module.css';
import { servicesData } from './constant';
import ServiceCard from '@/common/ServiceCard';

const Services = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="container-md">
        <h2 className={styles.sectionTitle}>Our Eye Care Specialities</h2>
        <div className={`row ${styles.cardGrid}`}>
          {servicesData.map((service) => (
            <div className="col-lg-3 col-md-6" key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
