import React from "react";
import Nav from "../components/Nav/Nav";
import styles from "./Country.module.css";
import { Link, useLocation } from "react-router-dom";
import back from "../asset/back.png";
import backLight from "../asset/back-light.png";
import CountryInfo from "../components/CountryInfo/CountryInfo";

const Country = ({ darkMode, changeMode }) => {
  const item = JSON.parse(
    new URLSearchParams(useLocation().search).get("item")
  );
  return (
    <div
      className={`index-background ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <Nav changeMode={changeMode} darkMode={darkMode} />
      <div className={styles.container}>
        <div className={styles.button}>
          <Link to="/">
            <button>
              <img src={darkMode ? backLight : back} alt="Back Arrow" />
              Back
            </button>
          </Link>
        </div>
        <CountryInfo item={item} />
      </div>
    </div>
  );
};

export default Country;
