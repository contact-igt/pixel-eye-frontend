import React from "react";
import styles from "./styles.module.css";
import Button from "@/common/Button";
import { bannerData } from "./constant";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';

const HomeBanner = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className={styles.bannerContainer} ref={ref}>
            <div className="container-md">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.bannerContent}>
                            <h1>{bannerData.title}</h1>
                            <p className={styles.subtitle}>{bannerData.subtitle}</p>
                            <div className={styles.ctaContainer}>
                                <p className={styles.appointmentText}>{bannerData.appointmentText}</p>
                                <div className={styles.formContainer}>
                                    <input type="text" placeholder="+91 Contact Number" />
                                    <Button name="Request a Callback" bgcolor="#f5a623" txtcolor="#000" />
                                </div>
                            </div>
                            <div className={styles.statsContainer}>
                                    <div className={styles.statItem}>
                                        <p className={styles.statValue}>{inView && <CountUp end={30} start={0} duration={2.5} />}+</p>
                                        <p className={styles.statLabel}>Years of Trust</p>
                                    </div>
                                      <div className={styles.statItem}>
                                        <p className={styles.statValue}>{inView && <CountUp end={30} start={0} duration={2.5} />}+</p>
                                        <p className={styles.statLabel}>Cities</p>
                                    </div>
                                      <div className={styles.statItem}>
                                        <p className={styles.statValue}>{inView && <CountUp end={85} start={0} duration={2.5} />}+</p>
                                        <p className={styles.statLabel}>Eye Care Centres</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={bannerData.image} alt="Doctors" className={styles.bannerImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;