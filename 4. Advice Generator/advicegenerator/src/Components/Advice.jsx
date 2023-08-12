import React, { useEffect, useState } from "react";
import styles from "./Advice.module.css";
import dice from "../Assets/icon-dice.svg";
import desktopPattern from "../Assets/pattern-divider-desktop.svg";
import mobilePattern from "../Assets/pattern-divider-mobile.svg";

const Advice = () => {
  const [advice, setAdvice] = useState({
    id: "",
    quote: "",
  });

  const [buttonClick, setButtonClick] = useState(0);
  const [view, setView] = useState(window.innerWidth);

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
    setButtonClick(buttonClick + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setView(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.id}>
              <p> ADVICE #{advice.id} </p>
            </div>
            <div className={styles.quote}>
              <p> “{advice.quote}” </p>
            </div>
            <div className={styles.image}>
              <img
                src={view >= 393 ? desktopPattern : mobilePattern}
                alt="Divider"
              />
            </div>
          </div>
          <div className={styles.dice}>
            <img src={dice} alt="Dice" onClick={generateNewQuote} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Advice;
