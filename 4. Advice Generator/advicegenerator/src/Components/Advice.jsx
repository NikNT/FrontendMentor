import React, { useEffect, useState } from "react";
import styles from "./Advice.module.css";
import dice from "../Assets/icon-dice.svg";

const Advice = () => {
  const [advice, setAdvice] = useState({
    id: "",
    quote: "",
  });

  const [buttonClick, setButtonClick] = useState(false);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) =>
        setAdvice({
          id: data.slip.id,
          quote: data.slip.advice,
        })
      )
      .catch((error) => console.error("Error ", error));
  }, [buttonClick]);

  const generateNewQuote = () => {
    setButtonClick(!buttonClick);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.id}> A D V I C E # {advice.id} </div>
          <div className={styles.quote}> {advice.quote}</div>
          <div className={styles.dice}>
            <img src={dice} alt="Dice" onClick={generateNewQuote} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Advice;
