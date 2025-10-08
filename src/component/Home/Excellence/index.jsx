import React from 'react';
import Slider from 'react-slick';
import styles from './styles.module.css';
import { excellenceData } from './constant';
import Button from '@/common/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Excellence = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 5 } },
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className={styles.excellenceSection}>
      <div className="container-md">
        <h2 className={styles.sectionTitle}>Centres of Excellence</h2>
        <p className={styles.sectionSubtitle}>
          Our depth of each center of excellence, making it a force to reckon with in the field of Super Speciality Tertiary Healthcare.
        </p>
        <Slider {...settings} className={styles.slider}>
          {excellenceData.map((item) => (
            <div key={item.id} className={styles.slideItem}>
              <div className={styles.card}>
                <img src={item.icon} alt={item.title} className={styles.cardIcon} />
                <p className={styles.cardTitle}>{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.viewMoreContainer}>
          <Button name="View More" bgcolor="#153b56" txtcolor="#ffffff" />
          <Button name="Book An Appointment" bgcolor="#153b56" txtcolor="#ffffff" />
        </div>
      </div>
    </section>
  );
};

export default Excellence;
