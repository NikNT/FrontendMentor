import React, { useState } from "react";
import styles from "./Age.module.css";
import icon from "../Assets/icon-arrow.svg";

const Age = () => {
  const [input, setInput] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [output, setOutput] = useState({
    day: "- -",
    month: "- -",
    year: "- -",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    const date = new Date();

    const today = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    const calculateDay =
      input.day < today ? today - input.day : input.day - today;
    const calculateMonth =
      input.month < currentMonth ? currentMonth - input.month : 0;
    const calculateYear = currentYear - input.year;

    setOutput({
      day: calculateDay,
      month: calculateMonth,
      year: calculateYear,
    });

    setInput({
      day: "",
      month: "",
      year: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inside}>
          <div className={styles.form}>
            <div className={styles.form_element}>
              <label htmlFor="day">D a y</label>
              <input
                type="text"
                name="day"
                placeholder="DD"
                value={input.day}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.form_element}>
              <label htmlFor="month">M o n t h</label>
              <input
                type="text"
                name="month"
                placeholder="MM"
                value={input.month}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.form_element}>
              <label htmlFor="year">Y e a r</label>
              <input
                type="text"
                name="year"
                placeholder="YYYY"
                value={input.year}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.image}>
            <div className={styles.line}></div>
            <div className={styles.image_wrapper}>
              <img src={icon} alt="" onClick={handleClick} />
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.years}>
              <p>
                <span>{output.year}</span>
                years
              </p>
            </div>
            <div className={styles.month}>
              <p>
                <span>{output.month}</span> months
              </p>
            </div>
            <div className={styles.days}>
              <p>
                <span>{output.day}</span> days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Age;
