import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const MultiCheckup = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [centerMode, setCenterMode] = useState(false);
  const wellnessImages = [
    {
      src: "/assets/gallery1.jpg",
    },
    {
      src: "/assets/gallery2.jpg",
    },
    {
      src: "/assets/gallery3.webp",
    },
    {
      src: "/assets/gallery4.jpg",
    },
    {
      src: "/assets/gallery5.webp",
    },
    {
      src: "/assets/gallery6.webp",
    },
    {
      src: "/assets/gallery7.webp",
    },
    {
      src: "/assets/gallery8.webp",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setSlidesToShow(4);
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
          <h2 className={styles.sectionTitle}>WELLNESS CENTRE</h2>
          <p className={styles.sectionSubtitle}>
            Personalized Multi Disciplinary Health Checkup
          </p>
        <div className="mt-5">
          <Slider key={slidesToShow} {...settings} className={styles.sliderWrapper}>
            {wellnessImages.map((data) => (
              <div key={data.id} className={styles.imgcard}>
                <img src={data.src} alt="gallery" className="img-fluid" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MultiCheckup;
