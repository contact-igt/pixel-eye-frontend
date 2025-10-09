import { useState } from 'react';
import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const TestimonialCard = ({
    imageSrc,
    openModal,
    name,
    testimonial,
    surgery
}) => {
    return (
        <div className={styles.testimonialCard}>
            <img src="/assets/pixel_logo.png" alt="" className={styles.logo} />
            <div className={styles.imageContainer}>
                <img src={imageSrc} alt={name} className={styles.clientImage} />
                <button
                    onClick={openModal}
                    className={styles.playButton}
                >
                    <DynamicIcon name="play" fill='#fff' color="#fff" size={32} />
                </button>
                <div className={styles.nameContainer}>
                    <h5>{name}</h5>
                </div>
                <h6>{surgery}</h6>
            </div>
            <div className={styles.textContainer}>
                <p>{testimonial}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;