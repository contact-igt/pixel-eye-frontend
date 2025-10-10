import React from 'react';
import styles from './styles.module.css';
import DoctorCard from './DoctorCard';
import { HomeData } from '@/constant/Home';

const Experts = ({handleTogglecontactForm}) => {
  return (
    <section className={styles.expertsSection}>
      <div className="container-md">
        <h2 className={styles.sectionTitle}>{HomeData?.expertData?.title}</h2>
        <div className={`row justify-content-center ${styles.cardGrid}`}>
          {HomeData?.expertData?.expertsList.map((expert) => (
            <div className="col-lg-6 col-md-10" key={expert.id}>
              <DoctorCard expert={expert} handleTogglecontactForm={handleTogglecontactForm} />
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
};

export default Experts;
