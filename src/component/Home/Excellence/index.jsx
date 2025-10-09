import React from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
import { excellenceData } from "./constant";
import Button from "@/common/Button";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Excellence = ({ handleTogglecontactForm }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screens up to 1024px wide
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For screens up to 768px wide
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, // For screens up to 480px wide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.excellenceSection}>
      <div className="container-md">
        <h2 className={styles.sectionTitle}>
          Advanced Care for Every Eye Condition
        </h2>
        <p className={styles.sectionSubtitle}>
          Discover advanced treatments designed to address every vision
          challenge, safely and effectively.
        </p>
        <Slider {...settings} className={styles.slider}>
          {excellenceData.map((item) => (
            <a
              key={item.id}
              className={styles.slideItem}
              href={item.link}
              target="_blank"
              onClick={!item.link ? handleTogglecontactForm : undefined}
            >
              <div className={styles.card}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className={styles.cardIcon}
                />
                <p className={styles.cardTitle}>{item.title}</p>
              </div>
            </a>
          ))}
        </Slider>
        <div className={styles.viewMoreContainer}>
          <Button
            isicon={true}
            href={"tel:+917075008561"}
            name="Call Now"
            bgcolor="#153b56"
            txtcolor="#fff"
            icon={"phone"}
            iconcolor={"#fff"}
          />

          <Button
            isicon={true}
            handleTogglecontactForm={handleTogglecontactForm}
            name="Book an Appointment"
            bgcolor="#f5a623"
            txtcolor="#000"
            icon={"calendar"}
            iconcolor={"#000"}
          />
        </div>
      </div>
    </section>
  );
};

export default Excellence;
