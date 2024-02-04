import React from "react";
import styles from "./Nav.module.css";
import moon from "../../asset/moon.png";
const Nav = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <span className={styles.title}>Where in the world?</span>
        <div className={styles.darkMode}>
          <img src={moon} alt="Moon" />
          <span>Dark Mode</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
