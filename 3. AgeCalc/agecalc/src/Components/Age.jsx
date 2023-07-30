import React from "react";
import styles from "./Age.module.css";
import icon from "../Assets/icon-arrow.svg";

const Age = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <div className={styles.form_element}>
            <label htmlFor="day">Day</label>
            <input type="text" name="day" />
          </div>

          <div className={styles.form_element}>
            <label htmlFor="month">Month</label>
            <input type="text" name="month" />
          </div>

          <div className={styles.form_element}>
            <label htmlFor="year">Year</label>
            <input type="text" name="year" />
          </div>
        </div>
        <div className={styles.image}>
          <div className={styles.image_wrapper}>
            <img src={icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Age;
