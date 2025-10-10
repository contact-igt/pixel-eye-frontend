import TestimonialCard from "@/common/TestimonialCard";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
import { Popup } from "@/common/Popup";
import { HomeData } from "@/constant/Home";

const Testimonials = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [centerMode, setCenterMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setSlidesToShow(3);
        setCenterMode(false);
      }else if(window.innerWidth > 700){
        setSlidesToShow(2);
        setCenterMode(false);
      }  else if (window.innerWidth <= 700 && window.innerWidth > 576) {
        setSlidesToShow(1.5);
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
  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };
  const settings = {
    dots: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    centerMode: centerMode,
    centerPadding: centerMode ? "0px" : "10px",
  };
  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.sectionTitle}>{HomeData?.testimonialData?.title}</h2>
      <div className={styles.testimonialContainer}>
        <Slider
          key={slidesToShow + (centerMode ? "c" : "")}
          {...settings}
          className={styles.sliderWrapper}
        >
          {HomeData?.testimonialData?.testimonialContents?.map((item, index) => (
            <TestimonialCard
              key={index}
              imageSrc={item?.imageSrc || item?.image}
              openModal={() => openModal(item.videoUrl)}
              name={item?.name}
              testimonial={item?.testimonial}
              surgery={item?.surgery}
            />
          ))}
        </Slider>
      </div>
      <Popup open={isModalOpen} onClose={closeModal} variant="video">
        <button
          className={styles.closeButton}
          onClick={closeModal}
          style={{ float: "right", marginBottom: "10px" }}
        >
          {" "}
          ✖
        </button>
        {selectedVideo && selectedVideo.includes("youtube.com") ? (
          <iframe
            width="100%"
            height="450"
            src={selectedVideo + "?autoplay=1"}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : selectedVideo ? (
          <video width="100%" height="auto" controls autoPlay>
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
      </Popup>
    </section>
  );
};

export default Testimonials;
