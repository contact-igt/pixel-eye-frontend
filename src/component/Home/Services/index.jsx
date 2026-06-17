"use client";

import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import ServiceCard from "@/common/ServiceCard";
import { HomeData } from "@/constant/Home";
import Image from "next/image";
import Button from "@/common/Button";

const Services = ({ handleTogglecontactForm }) => {
  const firstTwoServices = HomeData?.serviceData?.servicesList?.slice(0, 2) || [];
  const remainingServices = HomeData?.serviceData?.servicesList?.slice(2) || [];

  return (
    <section className={styles.servicesSection}>
      <div className="container-md">
        <h2 className={styles.sectionTitle}>{HomeData?.serviceData?.title}</h2>
        
        {/* All services in flex layout */}
        <div className={`d-flex justify-content-evenly gap-lg-5 gap-3 align-items-center flex-wrap`}>
          {/* First two services with carousel */}
          {firstTwoServices?.map((service) => (
            <div className={styles.serviceCard} key={service.id}>
              <ServiceImageCarousel service={service} handleTogglecontactForm={handleTogglecontactForm} />
            </div>
          ))}
          
          {/* Remaining services as regular cards */}
          {remainingServices?.map((service) => (
            <div className={styles.serviceCard} key={service.id}>
              <ServiceCard
                service={service}
                handleTogglecontactForm={handleTogglecontactForm}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceImageCarousel = ({ service }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = service.images || [service.image];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.imageCarouselCard}>
      <div className={styles.imageCarouselContainer}>
        {/* Sliding strip */}
        <div
          className={styles.imageStrip}
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className={styles.imageSlide}>
              <Image
                src={src}
                alt={`${service.title} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        {/* Dot indicators */}
        {images.length > 1 && (
          <div className={styles.imageIndicators}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
      <div className={styles.cardDetailsContainer}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDescription}>{service.description}</p>
        <Button
          name="Learn More"
          bgcolor="#ffffff"
          txtcolor="#153b56"
          border="1px solid #153b56"
          href={service.link}
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Services;
