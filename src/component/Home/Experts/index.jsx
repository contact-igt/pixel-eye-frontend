import React from 'react';
import styles from './styles.module.css';
import { expertsData } from './constant';
import DoctorCard from './DoctorCard';

const Experts = () => {
  return (
    <section className={styles.expertsSection}>
      <div className="container-md">
        <h2 className={styles.sectionTitle}>Meet Our Experts</h2>
        <div className={`row justify-content-center ${styles.cardGrid}`}>
          {expertsData.map((expert) => (
            <div className="col-lg-6 col-md-10" key={expert.id}>
              <DoctorCard expert={expert} />
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
};

export default Experts;
