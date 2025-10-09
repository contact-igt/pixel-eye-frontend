import React from "react";
import Navlinks from "../Header/Navlinks";
import Button from "../Button";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const SubHeader = ({ handleTogglecontactForm }) => {
   const router = useRouter();
  const path = router.pathname;
  const isThankYouPage = path === "/thank-you";
  return (
    <div className={styles.subHeader}>
      <div className="container-md d-flex justify-content-between align-items-center">
        <Navlinks />

       {!isThankYouPage && <Button
          isicon={true}
          handleTogglecontactForm={handleTogglecontactForm}
          name="Book an Appointment"
          bgcolor="#f5a623"
          txtcolor="#000"
          icon={"calendar"}
          iconcolor={"#000"}
        />}
      </div>
    </div>
  );
};

export default SubHeader;
