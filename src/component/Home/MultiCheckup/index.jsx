import React from 'react';
import Slider from 'react-slick';
import styles from './styles.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MultiCheckup = () => {

    const wellnessImages = [
        {
            src: "/assets/services.jpg"
        },
        {
            src: "/assets/services.jpg"
        },
        {
            src: "/assets/services.jpg"
        },
        {
            src: "/assets/services.jpg"
        },
        {
            src: "/assets/services.jpg"
        },
        {
            src: "/assets/services.jpg"
        },
        {
            src: "/assets/services.jpg"
        },
        {
            src: "/assets/services.jpg"
        },
        {
            src: "/assets/services.jpg"
        }
    ]
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            { breakpoint: 1400, settings: { slidesToShow: 5 } },
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className={styles.wellnessSection}>
            <div className="container-md">
                <h2 className={styles.sectionTitle}>WELLNESS CENTRE</h2>
                <p className={styles.sectionSubtitle}>Personalized Multi Disciplinary Health Checkup</p>
                <Slider {...settings}>
                    {wellnessImages.map((image) => (
                        <div key={image.id} className={styles.slide}>
                            <img src={image.src} alt={image.alt} className={styles.slideImage} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default MultiCheckup;
