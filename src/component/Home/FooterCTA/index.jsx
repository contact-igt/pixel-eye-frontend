import React from 'react';
import styles from './styles.module.css';
import { ctaItems } from './constant';
import Link from 'next/link';

const FooterCTA = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className="container-md">
        <div className={styles.ctaGrid}>
          {ctaItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link href={item.link} key={item.id}>
                <a className={styles.ctaItem}>
                  <div className={styles.iconWrapper}>
                    <Icon size={32} color="#153b56" />
                  </div>
                  <div className={styles.textWrapper}>
                    <h5 className={styles.title}>{item.title}</h5>
                    <p className={styles.subtitle}>{item.subtitle}</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
