import TestimonialCard from "@/common/TestimonialCard";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css"
import { Popup } from "@/common/Popup";

const Testimonials = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [centerMode, setCenterMode] = useState(false);
    const testimonialContent = [
        {
            id: 1,
            name: "Priya Sharma",
            location: "Chennai",
            rating: 5,
            testimonial: "The multi-disciplinary health checkup was thorough and well-organized. The staff was professional and caring. I received my detailed reports within 24 hours. Highly recommend this wellness centre!",
            image: "/assets/services.jpg"
        },
        {
            id: 2,
            name: "Rajesh Kumar",
            location: "Bangalore",
            rating: 5,
            testimonial: "Excellent facilities and state-of-the-art equipment. The doctors took time to explain every test and the results. The preventive health checkup helped detect early signs of diabetes. Grateful for their care.",
            imageSrc: "/assets/services.jpg"
        },
        {
            id: 3,
            name: "Anita Reddy",
            location: "Hyderabad",
            rating: 5,
            testimonial: "Best healthcare experience I've had. The personalized health checkup package was comprehensive. The nutritionist's advice was invaluable. The entire process was smooth and hassle-free.",
            imageSrc: "/assets/services.jpg"
        },
        {
            id: 4,
            name: "Vikram Patel",
            location: "Mumbai",
            rating: 4,
            testimonial: "Very impressed with the wellness center's approach to preventive healthcare. The reports were detailed and easy to understand. The follow-up consultation was helpful in creating a health plan.",
            imageSrc: "/assets/services.jpg"
        },
        {
            id: 5,
            name: "Lakshmi Iyer",
            location: "Coimbatore",
            rating: 5,
            testimonial: "The staff was extremely courteous and the ambiance was calming. My elderly parents felt comfortable throughout the checkup. The doctors were patient in answering all our questions. Thank you!",
            imageSrc: "/assets/services.jpg"
        },
        {
            id: 6,
            name: "Arjun Menon",
            location: "Kochi",
            rating: 5,
            testimonial: "Outstanding service! The comprehensive health screening detected issues I wasn't aware of. The doctors provided a clear action plan. The wellness center truly focuses on holistic health.",
            imageSrc: "/assets/services.jpg"
        }
    ]

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setSlidesToShow(3);
                setCenterMode(false);
            } else if (window.innerWidth <= 768 && window.innerWidth > 576) {
                setSlidesToShow(2.5);
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
        centerPadding: centerMode ? '0px' : '10px',
    };
    return (
        <section className={styles.testimonialSection}>
            <h2 className={styles.title}>What Our Patients Say</h2>
            <div className={styles.testimonialContainer}>
                <Slider key={slidesToShow + (centerMode ? 'c' : '')} {...settings} className={styles.sliderWrapper}>
                    {
                        testimonialContent?.map((item, index) => (
                            <TestimonialCard key={index} imageSrc={item?.imageSrc || item?.image} openModal={() => openModal(item.videoUrl)} name={item?.name} testimonial={item?.testimonial} />
                        ))
                    }
                </Slider>
            </div>
            <Popup open={isModalOpen} onClose={closeModal} variant="video">
                <button className={styles.closeButton} onClick={closeModal} style={{ float: 'right', marginBottom: "10px" }}> ✖</button>
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