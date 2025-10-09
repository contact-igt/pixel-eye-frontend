import React from "react";
import TopHeader from "../TopHeader";
import SubHeader from "../SubHeader";
import styles from "./styles.module.css";

const Header = ({ handleTogglecontactForm }) => {
  return (
    <header className={styles.headerWrapper}>
      <TopHeader />
      <SubHeader handleTogglecontactForm={handleTogglecontactForm} />
    </header>
  );
};

export default Header;
