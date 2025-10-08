import React, { useState } from "react";
import Navlinks from "../Header/Navlinks";
import Button from "../Button";
import styles from "./styles.module.css";
import headerStyles from "../Header/styles.module.css";

const SubHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.subHeader}>
      <div className="container-md d-flex justify-content-between align-items-center">
        <div className={`${headerStyles.nav} ${isNavOpen ? headerStyles.active : ''}`}>
          <Navlinks />
        </div>
        <Button
          name="Book an Appointment"
          bgcolor="#f5a623"
          txtcolor="#000"
        />
        <button className={headerStyles.hamburger} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
