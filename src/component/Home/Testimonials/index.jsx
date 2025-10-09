import TestimonialCard from "@/common/TestimonialCard";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";
import { Popup } from "@/common/Popup";

const Testimonials = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [centerMode, setCenterMode] = useState(false);
  const testimonialContent = [
    {
      id: 1,
      name: "Koteswara",
      surgery: "Cataract Surgery",
      testimonial:
        "I was diagnosed with cataracts about a year ago and was advised to have surgery within six months to a year. On my friends’ recommendation, I visited Dr. Poojita, who had successfully operated on their eyes. The surgery took only about 15 minutes and was completely smooth. After using the prescribed eye drops, my vision became clear, and I no longer need reading glasses. It feels like a rebirth for my eyesight—I’m truly grateful for the excellent care and the clarity I’ve regained.",
      image: "/assets/testimonialImage1.png",
      videoUrl: "https://www.youtube.com/embed/iRWjw7FFzss?si=_LlxFRiQW468Af84",
    },
    {
      id: 2,
      name: "Our Patient",
      surgery: "Cataract Surgery",
      testimonial:
        "I came to Hyderabad from South Sudan with my mother for her eye treatment at Pixel Hospitals. From the moment we arrived, the staff welcomed us with kindness and humility, making us feel at home. Dr. Pja explained every detail about the cataract surgery clearly and patiently. The cost was very affordable, even though we had financial limitations. After the surgery, my mother’s vision improved greatly—she can see clearly again. We are truly thankful to Pixel Hospitals and Dr. Pja for their excellent care. I highly recommend this hospital to anyone looking for quality eye treatment in Hyderabad.",
      imageSrc: "/assets/testimonialImage2.png",
      videoUrl: "https://www.youtube.com/embed/JGXsahnIBEA?si=6OvkgPojalx5l9dK",
    },
    {
      id: 3,
      name: "Our patient",
      surgery: "Cataract Surgery",
      testimonial:
        "I had been struggling with health issues for more than 40 years. After receiving treatment, I experienced a remarkable improvement — it truly feels like a new beginning. The doctors and staff showed great care and support throughout my recovery journey. Today, I feel healthier, more confident, and grateful for the positive changes this treatment has brought to my life.",
      videoUrl: "https://www.youtube.com/embed/MCiL5Xxlkk4?si=XgyxLvfXs_axXoto",
      imageSrc: "/assets/testimonialImage3.png",
    },
    {
      id: 4,
      name: "Mr. Vishnuvardhan",
      surgery: "SMILE Surgery",
      testimonial:
        "I had been wearing glasses since my school days — nearly 15 years of constant dependency from morning till night. My power had increased to -6.5D, and I always wished I could see clearly without glasses. After following Dr. Abdul Rasheed’s videos on YouTube, I decided to visit Pixel Eye Hospital. Dr. Rasheed and his team guided me through every step and suggested SMILE surgery.",
      videoUrl: "https://www.youtube.com/embed/EqFa79PiI4U?si=bL_XBGSdPXJCXFxo",
      imageSrc: "/assets/testimonialImage4.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSlidesToShow(3);
        setCenterMode(false);
      } else if (window.innerWidth <= 768 && window.innerWidth > 576) {
        setSlidesToShow(2.5);
        setCenterMode(false);
      } else {
        setSlidesToShow(1.5);
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
      <h2 className={styles.sectionTitle}>What Our Patients Say</h2>
      <div className={styles.testimonialContainer}>
        <Slider
          key={slidesToShow + (centerMode ? "c" : "")}
          {...settings}
          className={styles.sliderWrapper}
        >
          {testimonialContent?.map((item, index) => (
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
