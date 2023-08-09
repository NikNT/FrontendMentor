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

  const [emptyForm, setEmptyForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    if (input.day === "" && input.month === "" && input.year === "") {
      setEmptyForm(true);
      console.log("Empty Form");
      return;
    }

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

  const fieldRequired = (
    <h6 className={styles.field_required}>This field is required</h6>
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inside}>
          <div className={styles.form}>
            <div className={styles.form_element}>
              <label htmlFor="day" className={emptyForm && styles.empty_value}>
                D a y
              </label>
              <input
                type="text"
                name="day"
                placeholder="DD"
                value={input.day}
                onChange={handleInputChange}
                className={emptyForm ? styles.error_border : ""}
              />
              {emptyForm && fieldRequired}
            </div>

            <div className={styles.form_element}>
              <label
                htmlFor="month"
                className={emptyForm && styles.empty_value}
              >
                M o n t h
              </label>
              <input
                type="text"
                name="month"
                placeholder="MM"
                value={input.month}
                onChange={handleInputChange}
                className={emptyForm ? styles.error_border : ""}
              />
              {emptyForm && fieldRequired}
            </div>

            <div className={styles.form_element}>
              <label htmlFor="year" className={emptyForm && styles.empty_value}>
                Y e a r
              </label>
              <input
                type="text"
                name="year"
                placeholder="YYYY"
                value={input.year}
                onChange={handleInputChange}
                className={emptyForm ? styles.error_border : ""}
              />
              {emptyForm && fieldRequired}
            </div>
          </div>
          <div className={styles.image}>
            <div className={styles.line}></div>
            <div className={styles.image_wrapper} onClick={handleClick}>
              <img src={icon} alt="Down Arrow" />
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
