import { useState, useEffect } from 'react';
import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";
import Image from "next/image";

const TestimonialCard = ({
    imageSrc,
    openModal,
    name,
    testimonial,
    surgery
}) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div className={styles.testimonialCard}>
            <Image
                src="/assets/pixel_logo.png"
                alt="Pixel Eye Hospital"
                className={styles.logo}
                width={140}
                height={80}
                style={{ objectFit: 'contain' }}
                loading="lazy"
            />
            <div className={styles.imageContainer}>
                <div style={{ position: 'relative', width: '100%', height: '330px' }}>
                    <Image
                        src={imageSrc}
                        alt={name}
                        className={styles.clientImage}
                        fill
                        loading="lazy"
                        sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                </div>
                <button
                    onClick={openModal}
                    className={styles.playButton}
                >
                    {mounted && <DynamicIcon name="play" fill='#fff' color="#fff" size={32} />}
                </button>
                <div className={styles.nameContainer}>
                    <h5>{name}</h5>
                </div>
                <h6>{surgery}</h6>
            </div>
            <div className={styles.textContainer}>
                <p>{testimonial}</p>
                <button
                    className={styles.seeMoreBtn}
                    onClick={openModal}
                >
                    See More
                </button>
            </div>
        </div>
    );
};

export default TestimonialCard;