import React from "react";
import TopHeader from "../TopHeader";
import SubHeader from "../SubHeader";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <TopHeader />
      <SubHeader />
    </header>
  );
};

export default Header;
