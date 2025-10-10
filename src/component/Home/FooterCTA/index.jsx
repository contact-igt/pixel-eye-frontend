import React from "react";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import { HomeData } from "@/constant/Home";

const FooterCTA = ({ handleTogglecontactForm }) => {
  return (
    <div className={styles.footerCTA}>
      {
        HomeData?.footerCTAData?.map((item) => (
          <a href={item?.link ? item.link : undefined} onClick={(e) => {
            if (!item?.link) {
              e.preventDefault();
              handleTogglecontactForm();
            }
          }} target="_blank" className={styles.ctaItem}>
            <div className={styles.icon}>
              <DynamicIcon name={item?.icon} color="#153b56" size={30} />
            </div>
            <div
              className={styles.text}
            >
              <h4>{item?.title}</h4>
              <p>{item?.description}</p>
            </div>
          </a>
        ))
      }
    </div>
  );
};

export default FooterCTA;
