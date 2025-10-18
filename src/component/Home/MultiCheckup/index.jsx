import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
import { HomeData } from "@/constant/Home";
import Button from "@/common/Button";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const MultiCheckup = ({ handleTogglecontactForm }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [centerMode, setCenterMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setSlidesToShow(3);
        setCenterMode(false);
      } else if (window.innerWidth > 700) {
        setSlidesToShow(2.5);
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
    speed: 7000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: centerMode,
    centerPadding: centerMode ? "0px" : "10px",
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <section className={styles.gallerysection}>
      <div className={styles.gallery}>
        <h2 className={styles.sectionTitle}>{HomeData?.wellnessData?.title}</h2>
        <p className={styles.sectionSubtitle}>
          {HomeData?.wellnessData?.subTitle}
        </p>
        <div className="mt-5">
          <Slider
            key={slidesToShow}
            {...settings}
            className={styles.sliderWrapper}
          >
            {HomeData?.wellnessData?.wellnessImages.map((data) => (
              <div key={data.id} className={styles.imgcard}>
                <img src={data.src} alt="gallery" className="img-fluid" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.viewMoreContainer}>
        <Button
          isicon={true}
          href={HomeData?.excellenceData?.button1href}
          name={HomeData?.excellenceData?.button1text}
          bgcolor="#ffff"
          txtcolor="#153b56"
          icon={"phone"}
          iconcolor={"#153b56"}
        />

        <Button
          isicon={true}
          handleTogglecontactForm={handleTogglecontactForm}
          name={HomeData?.excellenceData?.button2text}
          bgcolor="#f5a623"
          txtcolor="#000"
          icon={"calendar"}
          iconcolor={"#000"}
        />
      </div>
    </section>
  );
};

export default MultiCheckup;
