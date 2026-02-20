import styles from "./styles.module.css";
import Button from "@/common/Button";
import Image from "next/image";

const ServiceCard = ({ service, handleTogglecontactForm }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div style={{ position: 'relative', width: '100%', height: '300px' }}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className={styles.cardImage}
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        {service.newlyLaunched && (
          <span className={styles.newlyLaunched}>NEWLY LAUNCHED</span>
        )}
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDescription}>{service.description}</p>
        <Button
          name="Learn More"
          bgcolor="#ffffff"
          txtcolor="#153b56"
          border="1px solid #153b56"
          href={service.link}
          target={"_blank"}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
