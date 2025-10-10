import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
import { excellenceData } from "./constant";
import Button from "@/common/Button";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Excellence = ({ handleTogglecontactForm }) => {
    const [slidesToShow, setSlidesToShow] = useState(5);
    const [centerMode, setCenterMode] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setSlidesToShow(5);
        setCenterMode(false);
      } else if (window.innerWidth > 700) {
        setSlidesToShow(3);
        setCenterMode(false);
      } else if (window.innerWidth <= 700 && window.innerWidth > 576) {
        setSlidesToShow(2);
        setCenterMode(false);
      } else {
        setSlidesToShow(1);
        setCenterMode(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: centerMode,
    centerPadding: centerMode ? "0px" : "10px",
    autoplay: false,
    arrows: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
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
                <div className={styles.iconWrapper}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className={styles.cardIcon}
                />
                </div>
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
