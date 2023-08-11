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

  const [validateInput, setValidateInput] = useState({
    isValid: true,
    day: true,
    month: true,
    year: true,
  });

  const [validityOfCompleteDate, setValidityOfCompleteDate] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (emptyForm) {
      setEmptyForm(false);
    }
  };

  const checkCompleteDate = (year, month, day) => {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === parseInt(year, 10) &&
      date.getMonth() === parseInt(month, 10) - 1 &&
      date.getDate() === parseInt(day, 10)
    );
  };

  const handleClick = () => {
    const date = new Date();
    // Check I - Input fields are empty
    if (input.day === "" && input.month === "" && input.year === "") {
      setEmptyForm(true);
      console.log("Empty Form");
      return;
    }

    //Check II - Entered Date is Valid or Not
    const checkDate = checkCompleteDate(input.year, input.month, input.day);

    if (!checkDate) {
      setValidityOfCompleteDate(false);
      console.log("Wrong Date");
      return;
    }

    // Check III - Either Day | Month | Year field is empty

    const isValidDay = parseInt(input.day) >= 1 && parseInt(input.day) <= 31;
    const isValidMonth =
      parseInt(input.month) >= 1 && parseInt(input.month) <= 12;
    const isValidYear =
      parseInt(input.year) >= 1900 &&
      parseInt(input.year) <= date.getFullYear();

    console.log("Day", isValidDay);
    console.log("Month", isValidMonth);
    console.log("Year", isValidYear);

    setValidateInput((prevValidateInput) => ({
      ...prevValidateInput,
      isValid: isValidDay && isValidMonth && isValidYear,
      day: isValidDay,
      month: isValidMonth,
      year: isValidYear,
    }));

    console.log("is Valid", validateInput.isValid);

    if (!isValidDay || !isValidMonth || !isValidYear) {
      return;
    } else {
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

      setEmptyForm(false);
      setValidityOfCompleteDate(true);
    }
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
              <label
                htmlFor="day"
                className={
                  (emptyForm || !validateInput.day) && styles.empty_value
                }
              >
                D a y
              </label>
              <input
                type="text"
                name="day"
                placeholder="DD"
                value={input.day}
                onChange={handleInputChange}
                className={
                  emptyForm || !validateInput.day ? styles.error_border : ""
                }
              />
              {emptyForm && fieldRequired}
              {!validateInput.day && (
                <h6 className={styles.field_required}>Must be a valid day</h6>
              )}
              {!validityOfCompleteDate && (
                <h6 className={styles.field_required}>Must be a valid date</h6>
              )}
            </div>

            <div className={styles.form_element}>
              <label
                htmlFor="month"
                className={
                  (emptyForm || !validateInput.month) && styles.empty_value
                }
              >
                M o n t h
              </label>
              <input
                type="text"
                name="month"
                placeholder="MM"
                value={input.month}
                onChange={handleInputChange}
                className={
                  emptyForm || !validateInput.month ? styles.error_border : ""
                }
              />
              {emptyForm && fieldRequired}
              {!validateInput.month && (
                <h6 className={styles.field_required}>Must be a valid month</h6>
              )}
            </div>

            <div className={styles.form_element}>
              <label
                htmlFor="year"
                className={
                  (emptyForm || !validateInput.year) && styles.empty_value
                }
              >
                Y e a r
              </label>
              <input
                type="text"
                name="year"
                placeholder="YYYY"
                value={input.year}
                onChange={handleInputChange}
                className={
                  emptyForm || !validateInput.year ? styles.error_border : ""
                }
              />
              {emptyForm && fieldRequired}
              {!validateInput.year && (
                <h6 className={styles.field_required}>Must be a valid year</h6>
              )}
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
