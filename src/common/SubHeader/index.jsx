import React from "react";
import Navlinks from "../Header/Navlinks";
import Button from "../Button";
import styles from "./styles.module.css";

const SubHeader = () => {
  return (
    <div className={styles.subHeader}>
      <div className="container-md d-flex justify-content-between align-items-center">
        <Navlinks />
        <Button
          name="Book an Appointment"
          bgcolor="#f5a623"
          txtcolor="#000"
        />
      </div>
    </div>
  );
};

export default SubHeader;
