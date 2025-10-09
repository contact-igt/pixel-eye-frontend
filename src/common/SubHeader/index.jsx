import React from "react";
import Navlinks from "../Header/Navlinks";
import Button from "../Button";
import styles from "./styles.module.css";

const SubHeader = ({ handleTogglecontactForm }) => {
  return (
    <div className={styles.subHeader}>
      <div className="container-md d-flex justify-content-between align-items-center">
        <Navlinks />

        <Button
          isicon={true}
          handleTogglecontactForm={handleTogglecontactForm}
          name="Book an Appointment"
          bgcolor="#f5a623"
          txtcolor="#000"
          icon={"calendar"}
          iconcolor={"#000"}
        />
      </div>
    </div>
  );
};

export default SubHeader;
