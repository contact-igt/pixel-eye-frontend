import React from 'react';
import styles from './styles.module.css';
import Button from '@/common/Button';
import { ThumbsUp, Briefcase } from 'lucide-react';

const DoctorCard = ({ expert }) => {
  return (
    <div className={styles.doctorCard}>
      <img src={expert.image} alt={expert.name} className={styles.doctorImage} />
      <div className={styles.cardContent}>
        <div>
          <h3 className={styles.doctorName}>{expert.name}</h3>
          <p className={styles.doctorQualifications}>{expert.qualifications}</p>
          <div className={styles.doctorStats}>
            <div className={styles.statItem}>
              <div className='d-flex gap-2'>
                <Briefcase size={20} className={styles.statIcon} />
                <strong>{expert.experience}</strong>
              </div>
              <span>Experience</span>
            </div>
            <div className={styles.statItem}>
              <div className='d-flex gap-2'>
                <ThumbsUp size={20} className={styles.statIcon} />
                <strong>{expert.reviews}</strong>
              </div>
              <span>Positive Reviews</span>
            </div>
          </div>
        </div>
        <Button name="Book Consultation" bgcolor="#153b56" txtcolor="#ffffff" />
      </div>
    </div>
  );
};

export default DoctorCard;
