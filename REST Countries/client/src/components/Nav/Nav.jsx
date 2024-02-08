import React from "react";
import styles from "./Nav.module.css";
import moon from "../../asset/moon.png";
import sun from "../../asset/sun.png";
const Nav = ({ changeMode, darkMode }) => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <span className={styles.title}>Where in the world?</span>
        <div className={styles.darkMode} onClick={changeMode}>
          <img src={darkMode ? sun : moon} alt="Moon" />
          <span>{darkMode ? "Light" : "Dark"} Mode</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
