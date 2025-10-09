import React from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const MultiCheckup = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
    <section className={styles.wellnessSection}>
      <div className="container-md">
        <h2 className={styles.sectionTitle}>WELLNESS CENTRE</h2>
        <p className={styles.sectionSubtitle}>
          Personalized Multi Disciplinary Health Checkup
        </p>
        <Slider {...settings}>
          {wellnessImages.map((image) => (
            <div key={image.id} className={styles.slide}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.slideImage}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MultiCheckup;
